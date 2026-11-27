/* =====================================================================
   EDITE ESTE ARQUIVO para mudar o conteúdo do site.
   Não precisa mexer no index.html.
   Salve, envie para o GitHub e o site atualiza sozinho.
   ===================================================================== */

/* ---------- Dados gerais ---------- */
window.SITE = {
  email: "seuemail@exemplo.com",            // e-mail do botão "Contato"
  foto: "imagens/foto.jpg",                                  // ex.: "imagens/foto.jpg" (deixe "" para mostrar o espaço vazio)
  sobre: [                                   // cada linha vira um parágrafo em "Sobre mim"
    "Sou designer e editor de vídeo de Brasília, graduando em Design – Programação Visual na UnB. Há mais de 4 anos crio cartazes, peças para redes sociais, impressos e vídeos para eventos e campanhas, sempre do conceito à finalização.",
    "Hoje trabalho na Astrofonia, onde desenvolvi a identidade visual do curta Emparelhamento, com cartaz e capa, e cuido das capas e da coerência visual dos projetos. Antes disso, passei pelo CONFEA e por projetos voluntários, onde aprendi a unir rigor de produção e linguagem visual.",
    "Ferramentas: Photoshop · Illustrator · Premiere · After Effects · DaVinci Resolve · Canva"
  ]
};

/* ---------- Categorias (a ordem aqui é a ordem no site) ---------- */
window.CATEGORIAS = ["Audiovisual", "Publicidade"];

/* ---------- Projetos ----------
   Para ADICIONAR um projeto: copie um bloco { ... }, cole abaixo e edite.
   Para REMOVER: apague o bloco inteiro (não esqueça de manter as vírgulas).

   categoria : precisa ser igual a um nome da lista CATEGORIAS acima
   titulo    : título que aparece no quadrado e no retângulo grande
   descricao : texto do lado esquerdo (fundo preto)
   capa      : imagem do quadrado, ex.: "imagens/capa-fit.jpg" (ou "" para usar cores)
   cores     : duas cores usadas quando não há capa e nos espaços de exemplo
   midias    : lista do que aparece à direita, na ordem. Pode misturar:
               - vídeo do repositório:  "videos/meu-video.mp4"
               - imagem do repositório: "imagens/foto1.jpg"
               - link do YouTube:       "https://www.youtube.com/watch?v=XXXXXXXXXXX"
               - link do Vimeo:         "https://vimeo.com/123456789"
               (deixe [] para mostrar espaços de exemplo)
   Os vídeos se ajustam sozinhos à largura do retângulo e têm play/pausa,
   volume e barra de duração.
*/
window.PROJETOS = [
  {
    categoria: "Audiovisual",
    titulo: "No Progress",
    descricao: "Curso • 2026",
    capa: "imagens/capa-1.jpg",
    cores: ["#6c3cff", "#1b1b3a"],
    midias: ["videos/video-1.mp4"]
  },
  {
    categoria: "Audiovisual",
    titulo: "To Find Peace",
    descricao: "Curso • 2026",
    capa: "imagens/capa-2.jpg",
    cores: ["#00b4a6", "#12263a"],
    midias: ["videos/video-2.mp4"]
  },
  {
    categoria: "Audiovisual",
    titulo: "The Great Artist",
    descricao: "Instagram • 2026",
    capa: "imagens/capa-3.jpg",
    cores: ["#ff4d8d", "#2a1230"],
    midias: ["videos/video-3.mp4"]
  },
  {
    categoria: "Audiovisual",
    titulo: "Sun Twist",
    descricao: "Produto (NDA) • 2025",
    capa: "imagens/capa-4.jpg",
    cores: ["#ffb020", "#7a2e0e"],
    midias: ["videos/video-4.mp4"]
  },
  {
    categoria: "Audiovisual",
    titulo: "Aroma Coffe",
    descricao: "Material de Ensino • 2025",
    capa: "imagens/capa-5.jpg",
    cores: ["#c2410c", "#2b1a12"],
    midias: ["videos/video-5.mp4"]
  },
  {
    categoria: "Publicidade",
    titulo: "Emparelhamento",
    descricao: "Curta • 2025 - 2026",
    capa: "imagens/publi-capa-b.jpg",
    cores: ["#00b4a6", "#1b4dff"],
    midias: ["imagens/publi-b.jpg"]
  },
  {
    categoria: "Publicidade",
    titulo: "The Sun Won’t Set",
    descricao: "Produto (NDA) • 2025",
    capa: "imagens/publi-capa-c.jpg",
    cores: ["#ffb020", "#7a2e0e"],
    midias: ["imagens/publi-c.jpg"]
  },
  {
    categoria: "Publicidade",
    titulo: "Evento de RPG",
    descricao: "Site • 2024",
    capa: "imagens/publi-capa-d.jpg",
    cores: ["#2b2b3a", "#6c3cff"],
    midias: ["imagens/publi-d.jpg"]
  },
  {
    categoria: "Publicidade",
    titulo: "Evento de Música",
    descricao: "Curta • 2023",
    capa: "imagens/publi-capa-e.jpg",
    cores: ["#ff4d8d", "#ffb020"],
    midias: ["imagens/publi-e.jpg"]
  },
  {
    categoria: "Publicidade",
    titulo: "Festival",
    descricao: "Instagram • 2022",
    capa: "imagens/publi-capa-a.jpg",
    cores: ["#6c3cff", "#ff4d8d"],
    midias: ["imagens/publi-a.jpg"]
  }
];
