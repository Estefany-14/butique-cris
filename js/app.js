/**
 * BOUTIQUE CRIS TRAVENSOLI - APLICAÇÃO INTERATIVA E-COMMERCE
 * Beleza, Semijoias, Moda Íntima & Atendimento Integrado ao WhatsApp
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado Global da Aplicação
  const state = {
    currentCategory: "all",
    searchQuery: "",
    sortBy: "featured",
    cart: JSON.parse(localStorage.getItem("cris_boutique_cart") || "[]"),
    shippingOption: "retirada", // retirada, motoboy, correios
    couponCode: localStorage.getItem("cris_boutique_coupon") || "",
    couponDiscount: 0,
    vipCustomer: JSON.parse(localStorage.getItem("cris_boutique_vip_customer") || "null")
  };

  // Se já tiver cupom salvo BEMVINDA10
  if (state.couponCode === "BEMVINDA10") {
    state.couponDiscount = 0.10;
  }

  // Elementos do DOM
  const productsGrid = document.getElementById("productsGrid");
  const videosGrid = document.getElementById("videosGrid");
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const filterPills = document.querySelectorAll(".filter-pill");

  // Carrinho
  const cartDrawerBackdrop = document.getElementById("cartDrawerBackdrop");
  const cartDrawer = document.getElementById("cartDrawer");
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartBadge = document.getElementById("cartBadge");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const cartShippingEl = document.getElementById("cartShipping");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartDiscountEl = document.getElementById("cartDiscount");
  const cartTotalEl = document.getElementById("cartTotal");
  const shippingSelect = document.getElementById("shippingSelect");
  const couponInput = document.getElementById("couponInput");
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  const couponMessage = document.getElementById("couponMessage");
  const checkoutWhatsAppBtn = document.getElementById("checkoutWhatsAppBtn");

  // Modal de Vídeo Real
  const videoModalBackdrop = document.getElementById("videoModalBackdrop");
  const videoModalClose = document.getElementById("videoModalClose");
  const videoPlayerElement = document.getElementById("videoPlayerElement");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoModalDesc = document.getElementById("videoModalDesc");
  const videoModalBadge = document.getElementById("videoModalBadge");
  const videoModalAuthor = document.getElementById("videoModalAuthor");
  const videoModalHighlights = document.getElementById("videoModalHighlights");
  const videoModalPrice = document.getElementById("videoModalPrice");
  const videoAddToCartBtn = document.getElementById("videoAddToCartBtn");
  const videoWhatsAppBtn = document.getElementById("videoWhatsAppBtn");
  const videoPlayPauseBtn = document.getElementById("videoPlayPauseBtn");
  const videoMuteBtn = document.getElementById("videoMuteBtn");
  let currentVideoProduct = null;

  // Modal de Detalhes do Produto
  const productModalBackdrop = document.getElementById("productModalBackdrop");
  const productModalClose = document.getElementById("productModalClose");
  const productModalContent = document.getElementById("productModalContent");

  // Formulário VIP
  const vipForm = document.getElementById("vipRegistrationForm");
  const vipSuccessBox = document.getElementById("vipSuccessBox");
  const vipCouponDisplay = document.getElementById("vipCouponDisplay");
  const copyCouponBtn = document.getElementById("copyCouponBtn");

  // =====================================================================
  // 1. RENDERIZAÇÃO DA VITRINE DE PRODUTOS
  // =====================================================================
  function getFilteredProducts() {
    return PRODUCTS_DATA.filter(prod => {
      // Filtro de categoria
      const matchCat = state.currentCategory === "all" || prod.category === state.currentCategory;
      // Filtro de busca
      const query = state.searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        prod.name.toLowerCase().includes(query) ||
        prod.brand.toLowerCase().includes(query) ||
        prod.shortDesc.toLowerCase().includes(query) ||
        prod.categoryLabel.toLowerCase().includes(query);
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }

  function renderVitrine() {
    const products = getFilteredProducts();

    if (products.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #777;">
          <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">Nenhum produto encontrado</p>
          <p style="font-size: 0.9rem;">Tente ajustar sua busca ou selecionar outra categoria.</p>
          <button id="resetSearchBtn" style="margin-top: 1rem; background: var(--color-primary); color: #000; padding: 0.5rem 1.2rem; border-radius: 99px; font-weight: 600;">Ver Todos os Produtos</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetSearchBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.currentCategory = "all";
          state.searchQuery = "";
          searchInput.value = "";
          filterPills.forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
          renderVitrine();
        });
      }
      return;
    }

    productsGrid.innerHTML = products.map(prod => {
      const pixPrice = (prod.price * 0.95).toFixed(2).replace(".", ",");
      const formattedPrice = prod.price.toFixed(2).replace(".", ",");
      const formattedOriginal = prod.originalPrice ? prod.originalPrice.toFixed(2).replace(".", ",") : null;

      return `
        <article class="product-card" data-product-id="${prod.id}">
          <div class="product-image-box">
            ${prod.badge ? `<span class="product-badge-corner">${prod.badge}</span>` : ""}
            <img src="${prod.image}" alt="${prod.name}" class="product-thumb" loading="lazy">
            ${prod.video ? `
              <div class="product-badge-video" data-video-trigger="${prod.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Ver Vídeo Real
              </div>
            ` : ""}
          </div>

          <div class="product-body">
            <span class="product-brand">${prod.brand}</span>
            <h3 class="product-title" title="${prod.name}">${prod.name}</h3>
            
            <div class="product-rating">
              ★ ${prod.rating.toFixed(1)} <span>(${prod.reviewsCount} avaliações)</span>
            </div>

            <div class="product-price-box">
              ${formattedOriginal ? `<span class="price-original">R$ ${formattedOriginal}</span>` : ""}
              <div class="price-current">R$ ${formattedPrice}</div>
              <div class="price-pix">R$ ${pixPrice} no PIX (5% OFF)</div>
              <div class="price-installments">${prod.installments}</div>
            </div>

            <div class="product-card-actions">
              <button class="btn-card-details" data-quickview-id="${prod.id}">Detalhes</button>
              <button class="btn-card-buy" data-buy-id="${prod.id}">Comprar</button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Conectar eventos dos botões dos cards
    document.querySelectorAll("[data-quickview-id]").forEach(btn => {
      btn.addEventListener("click", () => openProductModal(btn.dataset.quickviewId));
    });

    document.querySelectorAll("[data-buy-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.buyId);
        openCart();
      });
    });

    document.querySelectorAll("[data-video-trigger]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openVideoModalByProductId(btn.dataset.videoTrigger);
      });
    });
  }

  // =====================================================================
  // 2. RENDERIZAÇÃO DOS REELS / VÍDEOS REAIS EM DESTAQUE
  // =====================================================================
  function renderShowcaseVideos() {
    videosGrid.innerHTML = SHOWCASE_VIDEOS.map(video => {
      return `
        <div class="video-card" data-showcase-video-id="${video.id}">
          <img src="${video.poster}" alt="${video.title}" class="video-card-thumb" loading="lazy">
          <div class="video-card-overlay">
            <div class="video-card-top">
              <span class="video-tag">${video.tag}</span>
              <span class="video-views">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                ${video.views}
              </span>
            </div>

            <div class="video-play-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>

            <div class="video-card-bottom">
              <div class="video-card-title">${video.title}</div>
              <div class="video-card-sub">${video.subtitle}</div>
              <div class="video-product-pill">
                <span>${video.productName.substring(0, 22)}...</span>
                <span>${video.productPrice}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    document.querySelectorAll("[data-showcase-video-id]").forEach(card => {
      card.addEventListener("click", () => {
        const vidId = card.dataset.showcaseVideoId;
        const videoData = SHOWCASE_VIDEOS.find(v => v.id === vidId);
        if (videoData) {
          openVideoModal(videoData);
        }
      });
    });
  }

  // =====================================================================
  // 3. RENDERIZAÇÃO DOS DEPOIMENTOS
  // =====================================================================
  function renderTestimonials() {
    testimonialsGrid.innerHTML = TESTIMONIALS_DATA.map(t => {
      const initial = t.name.charAt(0);
      return `
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-comment">"${t.comment}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${initial}</div>
            <div class="author-info">
              <h5>${t.name}</h5>
              <span>${t.city} • Comprou: ${t.product}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // =====================================================================
  // 4. MODAL DE VÍDEO REAL DO PRODUTO (REELS INTERATIVO)
  // =====================================================================
  function openVideoModalByProductId(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod || !prod.video) return;

    const showcase = SHOWCASE_VIDEOS.find(v => v.productId === productId);
    const videoData = showcase || {
      id: "custom-" + prod.id,
      productId: prod.id,
      title: prod.video.title,
      subtitle: prod.brand,
      author: "Cris Travensoli",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: prod.video.thumbnail,
      productName: prod.name,
      productPrice: `R$ ${prod.price.toFixed(2).replace(".", ",")}`,
      tag: prod.categoryLabel
    };

    openVideoModal(videoData);
  }

  function openVideoModal(videoData) {
    const product = PRODUCTS_DATA.find(p => p.id === videoData.productId);
    currentVideoProduct = product;

    videoModalTitle.textContent = videoData.title;
    videoModalBadge.textContent = videoData.tag || product.categoryLabel;
    videoModalAuthor.innerHTML = `Gravado na Boutique por <strong>${videoData.author || 'Cris Travensoli'}</strong> • Loja Bateias`;
    
    if (product && product.video) {
      videoModalDesc.textContent = product.video.description;
      videoModalHighlights.innerHTML = `
        <h5>Destaques mostrados no vídeo:</h5>
        <ul>
          ${product.video.highlights.map(h => `<li>✓ ${h}</li>`).join("")}
        </ul>
      `;
    } else {
      videoModalDesc.textContent = "Assista aos detalhes de perto e confira a qualidade impecável dos produtos originais da Boutique Cris Travensoli.";
      videoModalHighlights.innerHTML = "";
    }

    if (product) {
      videoModalPrice.textContent = `R$ ${product.price.toFixed(2).replace(".", ",")}`;
    }

    // Configurar o vídeo HTML5
    videoPlayerElement.src = videoData.videoSrc;
    videoPlayerElement.poster = videoData.poster;
    videoPlayerElement.currentTime = 0;
    videoPlayerElement.muted = false;

    videoModalBackdrop.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Tentar tocar com tratamento para autoplay policies do navegador
    const playPromise = videoPlayerElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Se o navegador bloquear som no autoplay, mutamos e tocamos
        videoPlayerElement.muted = true;
        videoPlayerElement.play();
        updateMuteButtonUI();
      });
    }
  }

  function closeVideoModal() {
    videoPlayerElement.pause();
    videoPlayerElement.src = "";
    videoModalBackdrop.style.display = "none";
    document.body.style.overflow = "";
    currentVideoProduct = null;
  }

  videoModalClose.addEventListener("click", closeVideoModal);
  videoModalBackdrop.addEventListener("click", (e) => {
    if (e.target === videoModalBackdrop) closeVideoModal();
  });

  // Controles de Play/Pause e Áudio
  videoPlayPauseBtn.addEventListener("click", () => {
    if (videoPlayerElement.paused) {
      videoPlayerElement.play();
      videoPlayPauseBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    } else {
      videoPlayerElement.pause();
      videoPlayPauseBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    }
  });

  function updateMuteButtonUI() {
    if (videoPlayerElement.muted) {
      videoMuteBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
    } else {
      videoMuteBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
    }
  }

  videoMuteBtn.addEventListener("click", () => {
    videoPlayerElement.muted = !videoPlayerElement.muted;
    updateMuteButtonUI();
  });

  // Ações do Modal de Vídeo
  videoAddToCartBtn.addEventListener("click", () => {
    if (currentVideoProduct) {
      addToCart(currentVideoProduct.id);
      closeVideoModal();
      openCart();
    }
  });

  videoWhatsAppBtn.addEventListener("click", () => {
    if (currentVideoProduct) {
      const msg = encodeURIComponent(`Olá Cris! Estava assistindo ao vídeo do produto "${currentVideoProduct.name}" no site da Boutique e gostaria de tirar uma dúvida sobre disponibilidade e compra.`);
      window.open(`https://wa.me/5541999999999?text=${msg}`, "_blank");
    }
  });

  // =====================================================================
  // 5. MODAL DE DETALHES DO PRODUTO (QUICK VIEW)
  // =====================================================================
  function openProductModal(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    const pixPrice = (prod.price * 0.95).toFixed(2).replace(".", ",");
    const formattedPrice = prod.price.toFixed(2).replace(".", ",");

    let specsHtml = "";
    if (prod.specs) {
      specsHtml = `
        <table class="modal-specs-table">
          ${Object.entries(prod.specs).map(([key, val]) => `
            <tr>
              <td>${key}:</td>
              <td>${val}</td>
            </tr>
          `).join("")}
        </table>
      `;
    }

    productModalContent.innerHTML = `
      <div class="product-modal-image-col">
        <img src="${prod.image}" alt="${prod.name}" class="modal-product-img">
      </div>
      <div class="product-modal-info-col">
        <span class="product-brand">${prod.brand} • ${prod.categoryLabel}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #FFF; margin: 0.4rem 0;">${prod.name}</h2>
        
        <div class="product-rating" style="margin-bottom: 1rem;">
          ★ ${prod.rating.toFixed(1)} <span>(${prod.reviewsCount} clientes satisfeitas)</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.2rem;">${prod.shortDesc}</p>

        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-subtle); padding: 1.2rem; border-radius: 8px; margin-bottom: 1.2rem;">
          <div style="font-size: 1.7rem; font-weight: 800; color: #FFF;">R$ ${formattedPrice}</div>
          <div style="color: var(--color-pix); font-weight: 700; font-size: 0.9rem;">R$ ${pixPrice} à vista no PIX (5% de desconto)</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">${prod.installments}</div>
        </div>

        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.4rem;">Especificações do Cosmético:</h4>
        ${specsHtml}

        <div style="display: flex; gap: 0.8rem; margin-top: auto; padding-top: 1.5rem; flex-wrap: wrap;">
          <button id="modalAddToCartBtn" style="flex: 1; background: linear-gradient(135deg, var(--gold-light), var(--gold-primary)); color: #000; font-weight: 800; padding: 0.9rem; border-radius: 6px;">Adicionar à Sacola</button>
          ${prod.video ? `<button id="modalWatchVideoBtn" style="background: linear-gradient(135deg, #FF0055, #E1306C); color: #FFF; font-weight: 700; padding: 0.9rem 1.2rem; border-radius: 6px; display: flex; align-items: center; gap: 0.4rem;">▶ Ver Vídeo Real</button>` : ""}
          <button id="modalWhatsAppBtn" style="background: var(--color-whatsapp); color: #FFF; font-weight: 800; padding: 0.9rem 1.2rem; border-radius: 6px;">Pedir no WhatsApp</button>
        </div>
      </div>
    `;

    productModalBackdrop.style.display = "flex";
    document.body.style.overflow = "hidden";

    document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
      addToCart(prod.id);
      closeProductModal();
      openCart();
    });

    const watchVideoBtn = document.getElementById("modalWatchVideoBtn");
    if (watchVideoBtn) {
      watchVideoBtn.addEventListener("click", () => {
        closeProductModal();
        openVideoModalByProductId(prod.id);
      });
    }

    document.getElementById("modalWhatsAppBtn").addEventListener("click", () => {
      const msg = encodeURIComponent(`Olá Cris! Gostei do produto "${prod.name}" no site da Boutique e quero fechar o pedido.`);
      window.open(`https://wa.me/5541999999999?text=${msg}`, "_blank");
    });
  }

  function closeProductModal() {
    productModalBackdrop.style.display = "none";
    document.body.style.overflow = "";
  }

  productModalClose.addEventListener("click", closeProductModal);
  productModalBackdrop.addEventListener("click", (e) => {
    if (e.target === productModalBackdrop) closeProductModal();
  });

  // =====================================================================
  // 6. GESTÃO DO CARRINHO DE COMPRAS & CHECKOUT HÍBRIDO
  // =====================================================================
  function addToCart(productId) {
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      if (product) {
        state.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          brand: product.brand,
          quantity: 1
        });
      }
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
  }

  function updateQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
      }
    }
    saveCart();
    renderCart();
  }

  function saveCart() {
    localStorage.setItem("cris_boutique_cart", JSON.stringify(state.cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
  }

  function calculateCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Frete
    let shippingCost = 0;
    if (state.shippingOption === "retirada") {
      shippingCost = 0;
    } else if (state.shippingOption === "motoboy") {
      // Frete grátis em Campo Largo acima de R$ 99
      shippingCost = subtotal >= 99 ? 0 : 10.00;
    } else if (state.shippingOption === "correios") {
      shippingCost = 18.90;
    }

    // Desconto cupom
    const discountAmount = subtotal * state.couponDiscount;
    const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

    return { subtotal, shippingCost, discountAmount, finalTotal };
  }

  function renderCart() {
    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CCC" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <p style="font-weight: 600; color: #FFF; margin-bottom: 0.3rem;">Sua sacola de cosméticos está vazia</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Adicione produtos de higiene, cuidados diários ou perfumes para continuar.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = state.cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <div class="cart-item-price">R$ ${item.price.toFixed(2).replace(".", ",")}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', -1)">-</button>
              <span style="font-size: 0.85rem; font-weight: 600;">${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.removeCartItem('${item.id}')" title="Remover item">✕</button>
        </div>
      `).join("");
    }

    const { subtotal, shippingCost, discountAmount, finalTotal } = calculateCartTotals();

    cartSubtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    
    if (shippingCost === 0) {
      cartShippingEl.innerHTML = `<span style="color: var(--color-badge-pix); font-weight: 700;">GRÁTIS</span>`;
    } else {
      cartShippingEl.textContent = `R$ ${shippingCost.toFixed(2).replace(".", ",")}`;
    }

    if (discountAmount > 0) {
      cartDiscountRow.style.display = "flex";
      cartDiscountEl.textContent = `- R$ ${discountAmount.toFixed(2).replace(".", ",")}`;
    } else {
      cartDiscountRow.style.display = "none";
    }

    cartTotalEl.textContent = `R$ ${finalTotal.toFixed(2).replace(".", ",")}`;
  }

  // Métodos expostos globalmente para botões inline do carrinho
  window.updateCartQty = (id, delta) => updateQuantity(id, delta);
  window.removeCartItem = (id) => removeFromCart(id);

  function openCart() {
    cartDrawerBackdrop.style.display = "block";
    renderCart();
    setTimeout(() => {
      cartDrawer.classList.add("open");
    }, 10);
  }

  function closeCart() {
    cartDrawer.classList.remove("open");
    setTimeout(() => {
      cartDrawerBackdrop.style.display = "none";
    }, 350);
  }

  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartDrawerBackdrop.addEventListener("click", closeCart);

  // Mudança de frete
  shippingSelect.addEventListener("change", (e) => {
    state.shippingOption = e.target.value;
    renderCart();
  });

  // Aplicação de Cupom
  applyCouponBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === "BEMVINDA10") {
      state.couponCode = code;
      state.couponDiscount = 0.10;
      localStorage.setItem("cris_boutique_coupon", code);
      couponMessage.innerHTML = `<span style="color: #2E7D32;">✓ Cupom BEMVINDA10 aplicado com 10% OFF!</span>`;
      renderCart();
    } else if (!code) {
      couponMessage.innerHTML = `<span style="color: #CC4444;">Digite um cupom válido.</span>`;
    } else {
      couponMessage.innerHTML = `<span style="color: #CC4444;">Cupom inválido ou expirado.</span>`;
    }
  });

  // Finalização via WhatsApp
  checkoutWhatsAppBtn.addEventListener("click", () => {
    if (state.cart.length === 0) {
      alert("Sua sacola de compras está vazia!");
      return;
    }

    const { subtotal, shippingCost, discountAmount, finalTotal } = calculateCartTotals();
    const customer = state.vipCustomer;

    let shippingText = "";
    if (state.shippingOption === "retirada") {
      shippingText = "Retirada na Loja Física (Bateias - Campo Largo, anexo ao Material de Construção Rossa)";
    } else if (state.shippingOption === "motoboy") {
      shippingText = "Entrega Expressa via Motoboy (Campo Largo e região)";
    } else {
      shippingText = "Envio Correios (SEDEX / PAC)";
    }

    let itemsText = state.cart.map(i => `• ${i.quantity}x ${i.name} - R$ ${(i.price * i.quantity).toFixed(2).replace(".", ",")}`).join("\n");

    let message = `*NOVO PEDIDO - BOUTIQUE CRIS TRAVENSOLI*\n\n`;
    if (customer && customer.name) {
      message += `*Cliente VIP:* ${customer.name}\n`;
      message += `*WhatsApp:* ${customer.phone}\n`;
    }
    message += `*Entrega:* ${shippingText}\n\n`;
    message += `*Itens do Pedido:*\n${itemsText}\n\n`;
    message += `*Subtotal:* R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;
    if (discountAmount > 0) {
      message += `*Desconto Cupom (${state.couponCode}):* -R$ ${discountAmount.toFixed(2).replace(".", ",")}\n`;
    }
    message += `*Frete:* ${shippingCost === 0 ? "GRÁTIS" : "R$ " + shippingCost.toFixed(2).replace(".", ",")}\n`;
    message += `*TOTAL DO PEDIDO:* R$ ${finalTotal.toFixed(2).replace(".", ",")}\n\n`;
    message += `Gostaria de confirmar a forma de pagamento (PIX com 5% de desconto ou Cartão) e agendar o envio/retirada. Obrigada!`;

    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, "_blank");
  });

  // =====================================================================
  // 7. CADASTRO DE CLIENTES NO CLUBE VIP CRIS TRAVENSOLI
  // =====================================================================
  vipForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("vipName").value.trim();
    const phone = document.getElementById("vipPhone").value.trim();
    const email = document.getElementById("vipEmail").value.trim();
    const birthday = document.getElementById("vipBirthday").value;
    const interest = document.getElementById("vipInterest").value;
    const delivery = document.getElementById("vipDelivery").value;

    if (!name || !phone) {
      alert("Por favor, preencha pelo menos seu nome e WhatsApp!");
      return;
    }

    const vipData = {
      name,
      phone,
      email,
      birthday,
      interest,
      delivery,
      registeredAt: new Date().toISOString()
    };

    localStorage.setItem("cris_boutique_vip_customer", JSON.stringify(vipData));
    state.vipCustomer = vipData;

    // Ativar cupom automaticamente
    state.couponCode = "BEMVINDA10";
    state.couponDiscount = 0.10;
    localStorage.setItem("cris_boutique_coupon", "BEMVINDA10");

    // Exibir tela de sucesso
    vipForm.style.display = "none";
    vipSuccessBox.style.display = "block";
    vipCouponDisplay.textContent = "BEMVINDA10";

    // Notificar na navbar
    document.getElementById("navVipBtnText").textContent = `Olá, ${name.split(" ")[0]}! (VIP)`;
  });

  copyCouponBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("BEMVINDA10").then(() => {
      copyCouponBtn.textContent = "Copiado com Sucesso!";
      setTimeout(() => {
        copyCouponBtn.textContent = "Copiar Cupom";
      }, 2000);
    });
  });

  // Atualizar texto VIP se cliente já estiver cadastrado
  if (state.vipCustomer && state.vipCustomer.name) {
    const firstName = state.vipCustomer.name.split(" ")[0];
    const navText = document.getElementById("navVipBtnText");
    if (navText) navText.textContent = `Olá, ${firstName}! (VIP)`;
  }

  // =====================================================================
  // 8. FILTROS E BUSCA
  // =====================================================================
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentCategory = pill.dataset.category;
      renderVitrine();
    });
  });

  // Filtros rápidos da barra de menu superior
  document.querySelectorAll("[data-nav-category]").forEach(navLink => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = navLink.dataset.navCategory;
      state.currentCategory = cat;
      filterPills.forEach(p => p.classList.toggle("active", p.dataset.category === cat));
      renderVitrine();
      document.getElementById("vitrineSection").scrollIntoView({ behavior: "smooth" });
    });
  });

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderVitrine();
  });

  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderVitrine();
  });

  // Inicialização
  updateCartBadge();
  renderVitrine();
  renderShowcaseVideos();
  renderTestimonials();
});
