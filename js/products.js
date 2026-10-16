// =====================================================================
// CATÁLOGO EXCLUSIVO: COSMÉTICOS & PRODUTOS DE HIGIENE PESSOAL
// Boutique Cris Travensoli - Beleza, Cuidados Corporais, Cabelos e Perfumes
// =====================================================================

const PRODUCTS_DATA = [
  // --- HIGIENE PESSOAL & BANHO ---
  {
    id: "higiene-sabonetes-tododia",
    name: "Caixa de Sabonetes em Barra Tododia Algodão (5 x 90g)",
    brand: "Natura Tododia",
    category: "higiene",
    categoryLabel: "Higiene Pessoal & Banho",
    price: 32.90,
    originalPrice: 38.90,
    installments: "ou R$ 31,25 no PIX",
    rating: 5.0,
    reviewsCount: 74,
    badge: "Essencial do Banho",
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1607006314644-42f384a601aa?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Espuma Cremosa & Fragrância dos Sabonetes Tododia",
      duration: "0:24",
      thumbnail: "https://images.unsplash.com/photo-1607006314644-42f384a601aa?auto=format&fit=crop&w=600&q=80",
      description: "Cris Travensoli mostra a embalagem lacrada, o perfume suave que preenche o ambiente e a fórmula 100% vegetal que limpa sem ressecar a pele.",
      highlights: ["Fórmula 100% vegetal", "Espuma abundante e cremosa", "Fragrância delicada que dura o dia todo"]
    },
    shortDesc: "Sabonetes vegetais puros com fórmula cremosa que limpam suavemente mantendo a hidratação natural da pele.",
    specs: {
      "Conteúdo": "5 unidades de 90g cada (450g no total)",
      "Fragrância": "Algodão & Flor de Lis",
      "Fórmula": "100% vegetal, livre de gordura animal",
      "Benefício": "Não resseca a pele, toque aveludado pós-banho",
      "Origem": "Original Natura Lacrado"
    }
  },
  {
    id: "higiene-oleo-seve",
    name: "Óleo Corporal Desodorante Sève Amêndoas Doces 200ml",
    brand: "Natura Sève",
    category: "higiene",
    categoryLabel: "Higiene Pessoal & Banho",
    price: 89.90,
    originalPrice: 104.90,
    installments: "2x de R$ 44,95 sem juros",
    rating: 4.9,
    reviewsCount: 92,
    badge: "Campeão de Vendas",
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1608248597359-335e23652611?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Aplicação e Efeito Hidratante do Óleo Sève no Banho",
      duration: "0:28",
      thumbnail: "https://images.unsplash.com/photo-1608248597359-335e23652611?auto=format&fit=crop&w=600&q=80",
      description: "Veja o poder de hidratação imediata durante o enxágue, sem deixar sensação pegajosa, deixando a pele acetinada e perfumada.",
      highlights: ["Enriquecido com óleo de amêndoas", "Textura leve que emulsiona com a água", "Fragrância envolvente e sensual"]
    },
    shortDesc: "O clássico óleo de banho que forma um filme protetor na pele, restaurando o brilho e a maciez com o doce aroma de amêndoas.",
    specs: {
      "Volume": "200 ml",
      "Modo de Usar": "Aplicar no corpo úmido durante o banho e enxaguar",
      "Ação": "Hidratação profunda por até 24 horas",
      "Garantia": "Produto 100% Original Natura"
    }
  },
  {
    id: "higiene-hidratante-cuidese",
    name: "Loção Hidratante Desodorante Corporal Cuide-se Bem 400ml",
    brand: "O Boticário",
    category: "higiene",
    categoryLabel: "Higiene Pessoal & Banho",
    price: 64.90,
    originalPrice: 74.90,
    installments: "ou R$ 61,65 no PIX",
    rating: 4.9,
    reviewsCount: 63,
    badge: "Hidratação 48h",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Textura em Vídeo: Absorção Rápida Cuide-se Bem",
      duration: "0:22",
      thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description: "Demonstração na pele: veja como a textura cremosa é absorvida em segundos sem grudar na roupa.",
      highlights: ["Absorção instantânea", "Cheirinho aconchegante", "Embalagem pump econômica"]
    },
    shortDesc: "Hidratação potente de até 48 horas com extrato natural e manteiga de karité para um toque sedoso o dia inteiro.",
    specs: {
      "Volume": "400 ml",
      "Fórmula": "Vegana com 96% de ingredientes naturais",
      "Fragrância": "Nuvem / Lavanda Relaxante",
      "Origem": "O Boticário Oficial"
    }
  },

  // --- CABELOS & TRATAMENTO CAPILAR ---
  {
    id: "cabelo-siage-nutricao",
    name: "Combo Siàge Nutrição Profunda (Shampoo + Máscara + Condicionador)",
    brand: "Eudora Siàge",
    category: "cabelos",
    categoryLabel: "Cuidados com Cabelos",
    price: 189.90,
    originalPrice: 224.90,
    installments: "3x de R$ 63,30 sem juros",
    rating: 5.0,
    reviewsCount: 88,
    badge: "Mais Vendido Cabelos",
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Desmaia Fios: O Efeito Imediato do Kit Siàge",
      duration: "0:36",
      thumbnail: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      description: "Cris mostra a consistência concentrada da máscara de nutrição com óleo de baobá e o resultado de salão em casa.",
      highlights: ["Óleo de Baobá e Manteiga de Karité", "Biotecnologia Affinité 4D", "Fios alinhados e sem frizz"]
    },
    shortDesc: "Tratamento profundo que devolve os lipídios essenciais aos cabelos ressecados, proporcionando brilho espelhado.",
    specs: {
      "Contém": "Shampoo 250ml + Máscara Capilar 250g + Condicionador 200ml",
      "Indicação": "Cabelos ressecados, opacos ou pós-química",
      "Resultado": "Brilho imediato, selagem de pontas e toque sedoso"
    }
  },
  {
    id: "cabelo-natura-lumina",
    name: "Shampoo Estimulante Antiqueda Lumina 300ml",
    brand: "Natura Lumina",
    category: "cabelos",
    categoryLabel: "Cuidados com Cabelos",
    price: 49.90,
    originalPrice: 58.90,
    installments: "ou R$ 47,40 no PIX",
    rating: 4.8,
    reviewsCount: 45,
    badge: "Tratamento Capilar",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Linha Antiqueda Natura Lumina: Como Funciona",
      duration: "0:25",
      thumbnail: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
      description: "Conheça a tecnologia de Pró-Teia que atua diretamente no bulbo capilar reduzindo a quebra e estimulando o crescimento saudável.",
      highlights: ["Ação antiqueda comprovada", "Fortalece desde a raiz", "Limpeza equilibrada do couro cabeludo"]
    },
    shortDesc: "Estimula o couro cabeludo, reduz a queda por quebra e deixa os fios até 3 vezes mais resistentes.",
    specs: {
      "Volume": "300 ml",
      "Tecnologia": "Biotecnologia Pró-Teia + Ativo Hialurônico",
      "Frequência": "Uso diário ou em dias alternados"
    }
  },

  // --- PERFUMARIA FINA & DESODORANTES ---
  {
    id: "perfume-lily-edp",
    name: "Lily Eau de Parfum 75ml com Bombinha Vintage",
    brand: "O Boticário",
    category: "perfumaria",
    categoryLabel: "Perfumaria Fina",
    price: 319.90,
    originalPrice: 349.90,
    installments: "5x de R$ 63,98 sem juros",
    rating: 5.0,
    reviewsCount: 110,
    badge: "Ícone da Beleza",
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Demonstração Real: Borrifada Aveludada do Lily",
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
      description: "Vídeo detalhado do frasco artesanal de cristal, a vaporização perfeita e as notas elegantes dos lírios de Stargazer.",
      highlights: ["Enfleurage tradicional de lírios", "Fixação de 10 a 14 horas", "Acompanha bomba clássica de luxo"]
    },
    shortDesc: "A mais sofisticada fragrância floral do Boticário, extraída artesanalmente através do clássico enfleurage.",
    specs: {
      "Volume": "75 ml",
      "Família Olfativa": "Floral Bouquet",
      "Notas Olfativas": "Lírio, Gardênia, Pêssego, Pimenta Rosa e Sândalo",
      "Concentração": "Eau de Parfum (Alta durabilidade)",
      "Origem": "Original lacrado com selo holográfico"
    }
  },
  {
    id: "perfume-essencial-supreme",
    name: "Essencial Supreme Deo Parfum Feminino 100ml",
    brand: "Natura",
    category: "perfumaria",
    categoryLabel: "Perfumaria Fina",
    price: 249.90,
    originalPrice: 279.00,
    installments: "4x de R$ 62,47 sem juros",
    rating: 4.9,
    reviewsCount: 58,
    badge: "Intenso & Marcante",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Apresentação: Essencial Supreme e Notas Quentes",
      duration: "0:28",
      thumbnail: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
      description: "Cris Travensoli apresenta as notas exóticas do Ishpink (a canela da Amazônia) combinadas à riqueza do Ylang-Ylang.",
      highlights: ["Perfume marcante para ocasiões especiais", "Embalagem esculpida premium", "Fragrância quente e sensual"]
    },
    shortDesc: "Uma combinação floral intensa que equilibra a elegância do ylang à sensualidade especiada do ishpink.",
    specs: {
      "Volume": "100 ml",
      "Família Olfativa": "Floral Intenso Especiado",
      "Garantia": "100% Original Natura Lacrado"
    }
  },
  {
    id: "perfume-scapin-oui",
    name: "Scapin 245 Eau de Parfum 75ml Paris",
    brand: "O.U.i Paris",
    category: "perfumaria",
    categoryLabel: "Perfumaria Fina",
    price: 339.00,
    originalPrice: 389.00,
    installments: "6x de R$ 56,50 sem juros",
    rating: 5.0,
    reviewsCount: 42,
    badge: "Alta Perfumaria",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Scapin 245 O.U.i: O Luxo da Alta Perfumaria Francesa",
      duration: "0:32",
      thumbnail: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
      description: "Conheça o frasco recarregável desenhado por mestres franceses e as notas viciantes de café tostado e baunilha.",
      highlights: ["Fragrância oriental gourmand", "Frasco com design parisiense", "L'Essence de Grasse exclusiva"]
    },
    shortDesc: "Fragrância oriental refinada que exala a sofisticação e o mistério das noites parisienses.",
    specs: {
      "Volume": "75 ml",
      "Família Olfativa": "Oriental Gourmand",
      "Notas Principais": "Bergamota, Gardênia, Café Tostado e Fava Tonka",
      "Origem": "O.U.i Paris / Grupo Boticário"
    }
  },

  // --- SKINCARE & MAQUIAGEM ---
  {
    id: "skincare-makeb-hyaluronic",
    name: "Base Líquida Make B. Hyaluronic com FPS 70 (30ml)",
    brand: "O Boticário",
    category: "skincare",
    categoryLabel: "Skincare & Maquiagem",
    price: 109.90,
    originalPrice: 129.90,
    installments: "2x de R$ 54,95 sem juros",
    rating: 4.9,
    reviewsCount: 67,
    badge: "Com Ácido Hialurônico",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Cobertura & Textura: Base Make B. Hyaluronic",
      duration: "0:26",
      thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      description: "Veja o efeito semi-mate luminoso na pele, a cobertura de manchas e a ação preenchedora anti-idade.",
      highlights: ["FPS 70 e proteção contra luz azul", "Ácido Hialurônico vetorizado", "Não craquela nem transfere"]
    },
    shortDesc: "Tratamento e maquiagem em um só produto: preenche linhas finas enquanto uniformiza o tom da pele.",
    specs: {
      "Volume": "30 ml",
      "Proteção Solar": "FPS 70 e UVA+++",
      "Tons": "Disponível em diversas tonalidades (consulte a Cris no WhatsApp)",
      "Acabamento": "Semimate com viço saudável"
    }
  },
  {
    id: "skincare-eudora-serum",
    name: "Sérum Facial Preenchedor com Ácido Hialurônico Puro 30ml",
    brand: "Eudora Neo Dermo",
    category: "skincare",
    categoryLabel: "Skincare & Maquiagem",
    price: 114.90,
    originalPrice: 134.90,
    installments: "2x de R$ 57,45 sem juros",
    rating: 5.0,
    reviewsCount: 51,
    badge: "Dermatologicamente Testado",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    video: {
      title: "Gotas de Firmeza: Textura do Sérum Eudora Neo",
      duration: "0:25",
      thumbnail: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      description: "Cris demonstra a textura fluida ultraleve que penetra nas camadas mais profundas sem deixar resíduo oleoso.",
      highlights: ["Duplo ácido hialurônico", "Aumenta a firmeza da pele", "Secagem ultrarrápida"]
    },
    shortDesc: "Sérum intensivo de skincare para combater rugas, linhas finas e o ressecamento da pele do rosto e pescoço.",
    specs: {
      "Volume": "30 ml com conta-gotas de precisão",
      "Textura": "Gel aqua ultraleve não comedogênico",
      "Uso": "Dia e noite após a higienização facial"
    }
  }
];

// Dados dos Vídeos dos Produtos (Reels com visualizações e foco em Cosméticos e Higiene)
const SHOWCASE_VIDEOS = [
  {
    id: "video-lily",
    productId: "perfume-lily-edp",
    title: "O Perfume Lily de pertinho",
    subtitle: "O Boticário • Borrifada Aveludada",
    author: "Cris Travensoli",
    views: "3.2k visualizações",
    likes: 240,
    aspect: "vertical",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    tag: "Perfumaria",
    productName: "Lily Eau de Parfum 75ml",
    productPrice: "R$ 319,90"
  },
  {
    id: "video-seve",
    productId: "higiene-oleo-seve",
    title: "Toque Macio do Óleo Sève",
    subtitle: "Natura • Hidratação no Banho",
    author: "Cris Travensoli",
    views: "4.5k visualizações",
    likes: 388,
    aspect: "vertical",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1608248597359-335e23652611?auto=format&fit=crop&w=600&q=80",
    tag: "Higiene & Banho",
    productName: "Óleo Desodorante Sève Amêndoas",
    productPrice: "R$ 89,90"
  },
  {
    id: "video-siage",
    productId: "cabelo-siage-nutricao",
    title: "Desmaia Fios com Siàge Eudora",
    subtitle: "Eudora • Tratamento de Salão",
    author: "Cris Travensoli",
    views: "5.1k visualizações",
    likes: 470,
    aspect: "vertical",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    tag: "Cabelos",
    productName: "Combo Siàge Nutrição Profunda",
    productPrice: "R$ 189,90"
  },
  {
    id: "video-sabonetes",
    productId: "higiene-sabonetes-tododia",
    title: "Espuma & Perfume dos Sabonetes",
    subtitle: "Natura Tododia • Banho Cremoso",
    author: "Cris Travensoli",
    views: "2.8k visualizações",
    likes: 195,
    aspect: "vertical",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1607006314644-42f384a601aa?auto=format&fit=crop&w=600&q=80",
    tag: "Higiene Pessoal",
    productName: "Sabonetes Tododia Algodão (5 un)",
    productPrice: "R$ 32,90"
  },
  {
    id: "video-oui",
    productId: "perfume-scapin-oui",
    title: "França na Pele: Scapin 245 O.U.i",
    subtitle: "O.U.i Paris • Alta Perfumaria",
    author: "Cris Travensoli",
    views: "3.7k visualizações",
    likes: 290,
    aspect: "vertical",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    poster: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    tag: "Perfumaria Fina",
    productName: "Scapin 245 Eau de Parfum",
    productPrice: "R$ 339,00"
  }
];

// Depoimentos Reais de Clientes de Cosméticos e Higiene
const TESTIMONIALS_DATA = [
  {
    name: "Aline Cristina",
    city: "Campo Largo - PR",
    rating: 5,
    date: "Ontem",
    comment: "Sempre compro meus sabonetes e o óleo Sève com a Cris. Os produtos chegam 100% lacrados e muito cheirosos. Retirei direto na loja física em Bateias, super prático!",
    product: "Óleo Sève Amêndoas + Sabonetes Tododia"
  },
  {
    name: "Rosana Ferraz",
    city: "Bateias, Campo Largo - PR",
    rating: 5,
    date: "Há 4 dias",
    comment: "O site novo no tema escuro ficou maravilhoso e luxuoso! Os vídeos mostrando a textura dos cremes e dos perfumes ajudam demais na escolha. O Lily é original e perfeito.",
    product: "Lily Eau de Parfum O Boticário"
  },
  {
    name: "Patrícia Becker",
    city: "Curitiba e Região - PR",
    rating: 5,
    date: "Há 1 semana",
    comment: "O kit Siàge da Eudora salvou meu cabelo descolorido! O cupom de 10% funcionou perfeitamente e o atendimento da Cris no WhatsApp é rápido e muito atencioso.",
    product: "Kit Siàge Nutrição Profunda"
  }
];
