import TODOmachine from "../assets/img/TODOmachine.png";
import Inkscape1 from "../assets/img/Inkscape1.png";
import CV1 from "../assets/img/CV1.png";
import CV1Archivo from "../assets/archivos/CV1.pdf";
import SimonDice from "../assets/img/SimonDice.png";
import AMALAYA from "../assets/img/AMALAYA.png";
import CV from "../assets/img/CV.png";
import manual from "../assets/archivos/Manual.pdf";
import portfolioAnterior from "../assets/img/portfolioAnterior.png";
import KeePass1 from "../assets/img/KeePass1.png";
import KeePass2 from "../assets/img/KeePass2.png";
import KeePass3 from "../assets/img/KeePass3.png";
import Oslo from "../assets/img/Oslo.png";

const trabajos = [
  { titulo:"TODOmachine",
    categorias:"React | Desarrollo Web, PWA, deploy",
    fondo:{ background: `url(${TODOmachine}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://cledesma92.github.io/todomachine/"
  },
  { titulo:"Diseño currículum vitae",
    categorias:"Inkscape | Diseño gráfico, currículum vitae.",
    fondo:{ background: `url(${CV1}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:CV1Archivo
  },
  { titulo:"Instalación y configuración de Inkscape 1.0.2",
    categorias:"Inkscape | Video educativo, youTuBe, aporte, Inkscape, diseño.",
    fondo:{ background: `url(${Inkscape1}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://www.youtube.com/watch?v=CvzEohEXabE&t=133s"
  },
  { titulo:"SimonDice",
    categorias:"JavaScript | Desarrollo web, videojuego, deploy.",
    fondo:{ background: `url(${SimonDice}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://juegodesimondice.netlify.app/"
  },
  { titulo:"Propuesta de branding AMALAYA",
    categorias:"Inkscape | Diseño gráfico, branding, logo.",
    fondo:{ background: `url(${AMALAYA}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:manual
  },
  { titulo:"CV con estilo",
    categorias:"Inkscape | Diseño gráfico, currículum vitae.",
    fondo:{ background: `url(${CV}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://cvconestilo.netlify.app/"
  },
  { titulo:"Portfolio anterior",
    categorias:"HTML + CSS | Desarrollo Web, deploy.",
    fondo:{ background: `url(${portfolioAnterior}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://cledesma92.netlify.app/"
  },
  { titulo:"Como guardar archivos de forma segura con KeePass",
    categorias:"KeePass | Video educativo, youTuBe, aporte, seguridad.",
    fondo:{ background: `url(${KeePass3}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://www.youtube.com/watch?v=eYLgJAIPuCw"
  },
  { titulo:"KeePass: funcionamiento, configuración y complementos",
    categorias:"KeePass | Video educativo, youTuBe, aporte, seguridad.",
    fondo:{ background: `url(${KeePass2}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://www.youtube.com/watch?v=cFUlJe4VXpg"
  },
  { titulo:"Como guardar contraseñas de forma segura con KeePass",
    categorias:"KeePass | Video educativo, youTuBe, aporte, seguridad.",
    fondo:{ background: `url(${KeePass1}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://www.youtube.com/watch?v=XpkTNfQoVRE"
  },
  { titulo:"Café Oslo",
    categorias:"HTML + CSS | Desarrollo Web, deploy.",
    fondo:{ background: `url(${Oslo}) no-repeat center`,
            backgroundSize: 'cover',
          },
    ruta:"https://cafeoslo.netlify.app/"
  },
];

export { trabajos };