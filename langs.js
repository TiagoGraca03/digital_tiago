const translations = {
  // Idioma por default
  defaultLang: 'en',

  // Português
  pt: {
    HEAD_TITLE:"Tiago Graça | Programador de Software",

    NAV_ABOUT: "Sobre",
    NAV_EXPERIENCE: "Experiência",
    NAV_EDUCATION: "Formação",
    NAV_SKILLS: "Skills",
    NAV_CV: "Descarregar CV",
    
    HERO_STATUS: "Disponível para um novo cargo",
    HERO_GREETING: "Olá, sou o Tiago Graça",
    HERO_ROLE: "Programador de Software",
    HERO_DESC: "Programador de Software com experiência prática em desenvolvimento Full-Stack <strong class=\"text-slate-200\">PHP, MySQL, JavaScript, HTML e CSS</strong>, entre outras tecnologias web. Focado na escrita de código limpo, eficiente e de fácil manutenção, procuro um ambiente onde possa aprender com colegas experientes, partilhar ideias e crescer como programador.",
    HERO_BTN_EXP: "Ver Experiência Profissional",

    ABOUT_TITLE: "Paixão por tecnologia, raciocínio lógico e trabalho em equipa.",
    ABOUT_TEXT: "A minha jornada na programação começou com uma curiosidade genuína sobre como os sistemas funcionam por dentro. Hoje, combino a minha formação académica com a experiência prática de desenvolver software em ambiente empresarial. Valorizo o código bem estruturado, a aprendizagem contínua e a entreajuda no dia a dia de uma equipa de desenvolvimento.",
    ABOUT_LOC_LABEL: "Localização:",
    ABOUT_PHONE_LABEL: "Telemóvel:",
    ABOUT_LANGS_LABEL: "Idiomas:",
    ABOUT_LANGS_VALUE: "Português (Nativo), Inglês (Intermédio)",

    EXP_TITLE: "Experiência Profissional & Estágios",
    EXP_SOFTI9_DATE: "Junho/2025 – Atual",
    EXP_SOFTI9_DESC: "Programador Full-Stack na equipa <strong class=\"text-slate-100 font-semibold\">CUCo Security Suite</strong>, aplicação web de gestão e segurança de computadores Windows, em produção e a operar em mais de 1 milhão de dispositivos. Responsável pelo desenvolvimento e manutenção contínua, garantindo elevada usabilidade e desempenho.",
    EXP_RESP_HEADER: "Principais Responsabilidades & Foco",
    EXP_SOFTI9_R1: "Desenvolvimento e evolução de funcionalidades full-stack, desde a modelação de dados até à interface final",
    EXP_SOFTI9_R2: "Conceção de bases de dados MySQL e lógica de negócio focadas em escalabilidade, segurança e consistência",
    EXP_SOFTI9_R3: "Integração entre a plataforma web e os agentes instalados nos dispositivos, através de APIs e troca de dados estruturados em JSON",
    EXP_SOFTI9_R4: "Receção, validação, normalização e agregação de dados enviados pelos dispositivos, apresentados em painéis, tabelas e gráficos",
    EXP_SOFTI9_R5: "Construção de interfaces modernas, claras e responsivas, com foco na experiência do utilizador (UX/UI)",
    EXP_SOFTI9_R6: "Manutenção, resolução de bugs críticos e otimização em produção, seguindo boas práticas de código (Clean Code): soluções pragmáticas, modulares e fáceis de manter",
    EXP_SOFTI9_R7: "Trabalho colaborativo com equipas de design e engenharia na definição e entrega de novos requisitos",
    FEAT_HEADER: "Algumas funcionalidades desenvolvidas",
    FEAT_MON_T: "Monitorização de utilização de aplicações",
    FEAT_MON_D: "Responsável pela funcionalidade de ponta a ponta. Os dispositivos enviam em JSON a utilização de aplicações em primeiro e segundo plano, com os respetivos tempos. O backend em PHP recebe e processa esses dados, persiste-os em MySQL e agrega-os num painel de cliente com padrões de utilização, aplicações e dispositivos mais usados, tabelas e gráficos desenhados em HTML5 Canvas. O filtro por intervalo de datas recalcula médias e padrões de forma dinâmica para o período escolhido.",
    FEAT_HW_T: "Hardware status e histórico",
    FEAT_HW_D: "Reestruturação completa da página de hardware status, que passou a reunir o estado atual da máquina e o respetivo histórico de alterações. Os dispositivos enviam os dados em JSON, com informação WMI/CIM de estruturas pouco uniformes, por isso implementei a sua normalização antes de os apresentar. Nas especificações dos discos, a ocupação de armazenamento é codificada por cores consoante a percentagem, para identificar de imediato os discos mais cheios.",
    FEAT_HIST_T: "Comparação de alterações",
    FEAT_HIST_D: "Cada recolha de hardware é guardada como snapshot do estado da máquina. A partir do histórico, o sistema compara snapshots de datas diferentes e mostra as diferenças num modal (na imagem, a alteração de um CPU). Permite detetar substituição de componentes ou alterações indevidas.",
    FEAT_REM_T: "Configuração e controlo remoto",
    FEAT_REM_D: "Definição, a partir do backoffice, das definições do sistema Windows dos computadores (imagem de fundo, brilho, tema, bloqueio e suspensão por inatividade) e da frequência de verificação da aplicação. Inclui o agendamento remoto de encerramento, reinício e suspensão em três modos: execução única, janela de intervalo (reforçada sempre que o dispositivo se liga dentro da janela) e rotina semanal. Tudo aplicado nos dispositivos sem intervir em cada máquina.",
    FEAT_CMP_T: "Comparador de grupos de clientes",
    FEAT_CMP_D: "Comparação lado a lado de grupos de clientes, com filtragem por tags. O filtro é um helper PHP reutilizável e as seleções são preservadas entre navegações htmx, sem recarregar a página.",
    FEAT_ROT_T: "Calendário configurável da rotina",
    FEAT_ROT_D: "Editor de rotinas semanais num modal UIkit com mapa semanal em CSS Grid, em blocos de 30 minutos que se pintam arrastando o rato (pointer events). O mapa é convertido em JSON (dia da semana ISO com as respetivas janelas de início e fim), validado e guardado em MySQL no backend. Os dispositivos obtêm a rotina completa por pedido GET e aplicam-na por si (modelo pull). Uma regra de negócio garante uma única rotina por dispositivo, reforçada na base de dados com restrição UNIQUE, com verificação de conflitos antes de guardar.",
    FEAT_WEB_T: "Histórico de navegação (Web History)",
    FEAT_WEB_D: "Receção do histórico de navegação enviado em JSON pelos dispositivos e respetiva listagem por dispositivo no backoffice.",

    EXP_REVEX_TITLE: "Estágio Curricular - Desenvolvimento Back-end",
    EXP_REVEX_DATE: "Fevereiro/2024 – Junho/2024",
    EXP_REVEX_DESC: "Participação ativa em projetos de desenvolvimento back-end, colaborando na estruturação de lógica de negócio e integrações.",
    EXP_PRO_TITLE: "Estágio Curricular",
    EXP_PRO_DESC: "Eletrificação e montagem de quadros elétricos de comando, desenvolvendo raciocínio lógico e resolução de problemas técnicos.",

    EDU_TITLE: "Formação Académica",
    EDU_UA_DATE: "Setembro/2021 – Junho/2024",
    EDU_UA_COURSE: "Curso Técnico Superior Profissional de Programação de Sistemas de Informação",
    EDU_EPA_DATE: "Setembro/2018 – Junho/2021",
    EDU_EPA_COURSE: "Curso Profissional Técnico de Eletrónica, Automação e Comando",

    SKILLS_TITLE: "Conhecimentos de Programação",
    SKILLS_C1: "Linguagens de Programação",
    SKILLS_C2: "Frameworks e Ferramentas",
    SKILLS_C3: "Idiomas",
    SKILLS_LANG_PT: "Português (Nativo)",
    SKILLS_LANG_EN: "Inglês (Intermédio)"
  },

  // Inglês
  en: {
    HEAD_TITLE:"Tiago Graça | Software Developer",

    NAV_ABOUT: "About",
    NAV_EXPERIENCE: "Experience",
    NAV_EDUCATION: "Education",
    NAV_SKILLS: "Skills",
    NAV_CV: "Download CV",

    HERO_STATUS: "Available for a new role",
    HERO_GREETING: "Hi, I'm Tiago Graça",
    HERO_ROLE: "Software Developer",
    HERO_DESC: "Software Developer with hands-on experience in Full-Stack development using <strong class=\"text-slate-200\">PHP, MySQL, JavaScript, HTML, and CSS</strong>, among other web technologies. Focused on writing clean, efficient, and maintainable code, I am looking for an environment where I can learn from experienced peers, share ideas, and grow as a developer.",
    HERO_BTN_EXP: "View Work Experience",

    ABOUT_TITLE: "Passion for technology, logical reasoning, and teamwork.",
    ABOUT_TEXT: "My programming journey began with a genuine curiosity about how systems work under the hood. Today, I combine my academic background with practical software development experience in a corporate environment. I value well-structured code, continuous learning, and teamwork in day-to-day software engineering.",
    ABOUT_LOC_LABEL: "Location:",
    ABOUT_PHONE_LABEL: "Phone:",
    ABOUT_LANGS_LABEL: "Languages:",
    ABOUT_LANGS_VALUE: "Portuguese (Native), English (Intermediate)",

    EXP_TITLE: "Work Experience & Internships",
    EXP_SOFTI9_DATE: "June/2025 – Present",
    EXP_SOFTI9_DESC: "Full-Stack Developer in the <strong class=\"text-slate-100 font-semibold\">CUCo Security Suite</strong> team, a web application for managing and securing Windows computers, in production and running on over 1 million devices. Responsible for ongoing development and maintenance, ensuring high usability and performance.",
    EXP_RESP_HEADER: "Key Responsibilities & Focus",
    EXP_SOFTI9_R1: "Development and evolution of full-stack features, from data modeling to the final interface",
    EXP_SOFTI9_R2: "Design of MySQL databases and business logic focused on scalability, security and consistency",
    EXP_SOFTI9_R3: "Integration between the web platform and the agents installed on devices, through APIs and structured JSON data exchange",
    EXP_SOFTI9_R4: "Reception, validation, normalization and aggregation of data sent by devices, presented in dashboards, tables and charts",
    EXP_SOFTI9_R5: "Building modern, clear and responsive interfaces, with a focus on user experience (UX/UI)",
    EXP_SOFTI9_R6: "Maintenance, critical bug fixing and production optimization, following Clean Code practices: pragmatic, modular and easy-to-maintain solutions",
    EXP_SOFTI9_R7: "Collaboration with design and engineering teams on defining and delivering new requirements",
    FEAT_HEADER: "Some of the features I built",
    FEAT_MON_T: "Application usage monitoring",
    FEAT_MON_D: "Owned this feature end to end. Devices send foreground and background application usage, with usage times, as JSON. The PHP backend receives and processes this data, persists it in MySQL and aggregates it into a customer dashboard with usage patterns, most-used applications and devices, tables and charts drawn with HTML5 Canvas. A date range filter dynamically recalculates averages and patterns for the selected period.",
    FEAT_HW_T: "Hardware status and history",
    FEAT_HW_D: "Full restructuring of the hardware status page, which now brings together the machine's current state and its change history. Devices send the data as JSON, carrying WMI/CIM information with inconsistent structures, so I implemented its normalization before display. In the disk specs, storage usage is color-coded by percentage, so the fullest disks stand out immediately.",
    FEAT_HIST_T: "Change comparison",
    FEAT_HIST_D: "Each hardware collection is stored as a snapshot of the machine's state. From the history, the system compares snapshots from different dates and shows the differences in a modal (pictured: a CPU change). It makes it possible to detect component replacements or unwanted changes.",
    FEAT_REM_T: "Remote configuration and control",
    FEAT_REM_D: "Setting, from the backoffice, the computers' Windows settings (wallpaper, brightness, theme, inactivity lock and suspend) and the application's check interval. Includes remote scheduling of shutdown, restart and suspend in three modes: single execution, interval window (re-applied whenever the device connects within the window) and weekly routine. All applied to devices without touching each machine.",
    FEAT_CMP_T: "Client group comparator",
    FEAT_CMP_D: "Side-by-side comparison of client groups with tag-based filtering. The filter is a reusable PHP helper and selections are preserved across htmx navigations, without reloading the page.",
    FEAT_ROT_T: "Configurable routine calendar",
    FEAT_ROT_D: "Weekly routine editor in a UIkit modal, with a CSS Grid weekly map in 30-minute blocks painted by dragging (pointer events). The map is converted to JSON (ISO weekday with its start/end windows), validated and stored in MySQL by the backend. Devices fetch the full routine with a GET request and apply it themselves (pull model). A business rule allows only one routine per device, enforced in the database with a UNIQUE constraint, with conflict checking before saving.",
    FEAT_WEB_T: "Browsing history (Web History)",
    FEAT_WEB_D: "Ingestion of browsing history sent as JSON by the devices and its per-device listing in the backoffice.",

    EXP_REVEX_TITLE: "Curricular Internship - Back-end Development",
    EXP_REVEX_DATE: "February/2024 – June/2024",
    EXP_REVEX_DESC: "Active participation in back-end development projects, collaborating on business logic structuring and integrations.",
    EXP_PRO_TITLE: "Curricular Internship",
    EXP_PRO_DESC: "Wiring and assembly of electrical control panels, developing logical reasoning and technical problem-solving skills.",

    EDU_TITLE: "Education",
    EDU_UA_DATE: "September/2021 – June/2024",
    EDU_UA_COURSE: "Higher Professional Technical Course in Information Systems Programming",
    EDU_EPA_DATE: "September/2018 – June/2021",
    EDU_EPA_COURSE: "Professional Technical Course in Electronics, Automation, and Control",

    SKILLS_TITLE: "Programming Skills",
    SKILLS_C1: "Programming Languages",
    SKILLS_C2: "Frameworks & Tools",
    SKILLS_C3: "Languages",
    SKILLS_LANG_PT: "Portuguese (Native)",
    SKILLS_LANG_EN: "English (Intermediate)"
  }
};

// Função principal que aplica o idioma
function changeLanguage(lang) {
  // Guarda a escolha do utilizador
  localStorage.setItem('user_lang', lang);
  document.documentElement.lang = lang;

  const selectedTranslations = translations[lang] || translations[translations.defaultLang];

  // Procura todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (selectedTranslations[key]) {
      element.innerHTML = selectedTranslations[key];
    }
  });

  // Atualiza o estilo dos botões PT / EN
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');

  if (btnPt && btnEn) {
    const activeClasses = "px-2 py-1 rounded text-emerald-400 font-bold bg-slate-800 transition-all cursor-pointer";
    const inactiveClasses = "px-2 py-1 rounded text-slate-400 hover:text-white transition-all cursor-pointer";

    if (lang === 'pt') {
      btnPt.className = activeClasses;
      btnEn.className = inactiveClasses;
    } else {
      btnPt.className = inactiveClasses;
      btnEn.className = activeClasses;
    }
  }
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('user_lang') || translations.defaultLang;
  changeLanguage(savedLang);
});