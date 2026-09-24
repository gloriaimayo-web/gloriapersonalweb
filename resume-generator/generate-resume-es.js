const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, TabStopType, TabStopPosition, LevelFormat, convertInchesToTwip
} = require("docx");
const fs = require("fs");

const COLOR = {
  wineDeep: "6F2136",
  wine: "8B3148",
  brass: "A9752F",
  ink: "241318",
  inkSoft: "5B4048",
  inkFaint: "8A6F74",
  line: "E3D3CE",
};

const FONT_HEAD = "Georgia";
const FONT_BODY = "Calibri";

const RIGHT_TAB = TabStopPosition.MAX;

function sectionHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 120 },
    border: {
      bottom: { color: COLOR.line, space: 4, style: BorderStyle.SINGLE, size: 6 },
    },
    keepNext: true,
    children: [
      new TextRun({
        text,
        font: FONT_HEAD,
        bold: true,
        color: COLOR.wineDeep,
        size: 26,
      }),
    ],
  });
}

function fixHyphens(text) {
  return text.replace(/([a-zA-Z])-([a-zA-Z])/g, "$1‑$2");
}

function bodyRun(text, opts = {}) {
  return new TextRun({ text: fixHyphens(text), font: FONT_BODY, size: 21, color: COLOR.inkSoft, ...opts });
}

function summaryParagraph(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 200, line: 300 },
    children: [bodyRun(text, { color: COLOR.inkSoft })],
  });
}

function qualLine(label, text) {
  return new Paragraph({
    spacing: { after: 120, line: 290 },
    children: [
      new TextRun({ text: label + ": ", font: FONT_BODY, size: 21, bold: true, color: COLOR.ink }),
      bodyRun(text),
    ],
  });
}

function jobHeader(title, dateRange) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    spacing: { before: 200, after: 20 },
    keepNext: true,
    keepLines: true,
    children: [
      new TextRun({ text: title, font: FONT_BODY, size: 22, bold: true, color: COLOR.ink }),
      new TextRun({ text: `\t${dateRange}`, font: FONT_BODY, size: 18, bold: true, color: COLOR.inkFaint }),
    ],
  });
}

function jobSubtitle(text) {
  return new Paragraph({
    spacing: { after: 100 },
    keepNext: true,
    keepLines: true,
    children: [new TextRun({ text, font: FONT_BODY, size: 20, italics: true, color: COLOR.wine })],
  });
}

function bullet(text, { last = false } = {}) {
  return new Paragraph({
    numbering: { reference: "default-bullets", level: 0 },
    spacing: { after: 90, line: 280 },
    keepNext: !last,
    keepLines: true,
    children: [bodyRun(text)],
  });
}

function jobBlock(title, dateRange, subtitle, bullets) {
  const paras = [jobHeader(title, dateRange), jobSubtitle(subtitle)];
  bullets.forEach((b, i) => paras.push(bullet(b, { last: i === bullets.length - 1 })));
  return paras;
}

function eduBullet(text) {
  return new Paragraph({
    numbering: { reference: "default-bullets", level: 0 },
    spacing: { after: 90, line: 280 },
    keepLines: true,
    children: [bodyRun(text, { color: COLOR.ink })],
  });
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: FONT_BODY, size: 21, color: COLOR.inkSoft } },
    },
  },
  numbering: {
    config: [
      {
        reference: "default-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: convertInchesToTwip(0.22), hanging: convertInchesToTwip(0.18) } },
              run: { color: COLOR.wine, font: FONT_BODY },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          margin: { top: 720, bottom: 720, left: 720, right: 720 },
        },
      },
      children: [
        // NOMBRE
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Gloria Mayo", font: FONT_HEAD, bold: true, size: 44, color: COLOR.wineDeep }),
          ],
        }),
        // LINEA DE ROL
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "INGENIERA DE SISTEMAS | SOPORTE DE APLICACIONES | QA DE SOFTWARE | SISTEMAS EMPRESARIALES",
              font: FONT_BODY,
              bold: true,
              size: 17,
              color: COLOR.wine,
              characterSpacing: 12,
            }),
          ],
        }),
        // CONTACTO
        new Paragraph({
          spacing: { after: 180 },
          children: [
            bodyRun("Woodbridge, ON  ·  +1 437-677-9018  ·  givone@hotmail.com  ·  linkedin.com/in/gloriamayo  ·  gloriamayo.com", {
              size: 19, color: COLOR.inkFaint,
            }),
          ],
        }),

        // PERFIL PROFESIONAL
        sectionHeading("Perfil Profesional"),
        summaryParagraph(
          "Ingeniera de Sistemas con más de 15 años de experiencia en soporte de aplicaciones, calidad de software, requisitos de negocio, mejora de procesos y sistemas empresariales. Experta en traducir necesidades operativas en requisitos documentados, flujos de trabajo, escenarios de prueba y soluciones tecnológicas dentro de entornos ISO 9001. Fundadora y Product Owner de AppointSuite, donde lidera el análisis de negocio, el diseño funcional, las pruebas, la implementación, el onboarding de clientes y la mejora continua de una plataforma de CRM y gestión de servicios en producción. Completó un Diploma en Programación de Computadores en Canadá en 2026."
        ),

        // CUALIFICACIONES TECNICAS
        sectionHeading("Cualificaciones Técnicas"),
        qualLine("Pruebas y QA de software", "Pruebas manuales y funcionales, validación de requisitos, investigación de incidencias, documentación de defectos y no conformidades, seguimiento de acciones correctivas"),
        qualLine("Soporte de aplicaciones y producto", "Administración de plataformas, soporte a usuarios finales, análisis de flujos de trabajo, reproducción de incidencias, onboarding de clientes, validación en producción"),
        qualLine("Entrega y calidad", "Levantamiento de requisitos, criterios de aceptación, coordinación de proveedores, ISO 9001:2015, ISO 31000, documentación, implementación de software"),
        qualLine("Herramientas y tecnología", "Fundamentos de SQL, HTML, CSS, Git, GitHub, Microsoft 365, sistemas CRM y multi-tenant; conocimientos básicos de Python y Django"),

        // EXPERIENCIA PROFESIONAL
        sectionHeading("Experiencia Profesional"),

        ...jobBlock(
          "Fundadora y Product Owner — AppointSuite",
          "Julio 2025 – Presente",
          "Vaughan, ON",
          [
            "Identifiqué ineficiencias operativas recurrentes en negocios locales basados en citas, incluyendo agendamiento manual, información de clientes fragmentada y tiempo dedicado a interacciones repetitivas con clientes. Traduje estas necesidades en flujos de trabajo documentados, requisitos funcionales y un modelo de servicio apoyado en tecnología.",
            "Lideré el diseño funcional, los criterios de aceptación, las pruebas, la investigación de incidencias, la validación de versiones, el onboarding de clientes y la implementación en producción de AppointSuite, la plataforma de CRM y agendamiento que soporta el servicio.",
            "Trabajé directamente con negocios piloto para validar flujos de trabajo, recopilar retroalimentación de usuarios y mejorar continuamente la solución con base en escenarios operativos reales.",
          ]
        ),

        ...jobBlock(
          "Operaria de Máquina — Costco Canadá",
          "2022 – Presente",
          "Vaughan, Ontario",
          [
            "Ejecuto operaciones de recepción, control de inventario y cargue de camiones en un entorno de distribución de alto volumen, siguiendo procedimientos establecidos con alta precisión operativa y consistencia.",
            "Mantengo la ejecución precisa de los flujos de trabajo y la coordinación entre equipos mientras opero montacargas y transpaletas eléctricas; certificada en manipulación segura de alimentos y en Transporte de Mercancías Peligrosas (TDG), Canadá (2025).",
          ]
        ),

        ...jobBlock(
          "Profesional Universitario — Sistemas y Calidad — Gobernación de Antioquia",
          "2008 – 2020",
          "Medellín, Colombia",
          [
            "Administré y di soporte a ISOlución, la plataforma institucional de gestión de calidad ISO 9001, incluyendo implementación de versiones, soporte a usuarios finales, planeación anual de software y coordinación de proveedores.",
            "Realicé pruebas funcionales y de calidad en plataformas institucionales; documenté actividades de QA y no conformidades y di seguimiento a las acciones correctivas hasta su resolución.",
            "Levanté requisitos y supervisé el desarrollo por terceros de SIVICO, un sistema móvil de vigilancia y control de rentas.",
            "Planeé y supervisé la adquisición de software de Microsoft, Adobe y seguridad de redes, y di soporte a los usuarios finales institucionales.",
          ]
        ),

        ...jobBlock(
          "Contratista de Gestión de Datos | IDEA (Instituto para el Desarrollo de Antioquia)",
          "2008",
          "Medellín, Colombia",
          ["Mantuve y actualicé registros dentro de una base de datos institucional de gestión de calidad, apoyando la exactitud de los datos y la trazabilidad de los procesos de calidad."]
        ),

        ...jobBlock(
          "Roles Administrativos y de Soporte Técnico — Inicios de Carrera",
          "1989 – 2007",
          "Medellín, Colombia",
          ["Avancé por roles de gestión administrativa, ventas de software y soporte técnico (help desk), incluyendo soporte a usuarios en Empresas Públicas de Medellín y liderazgo de ventas en Standard Systems."]
        ),

        // EDUCACION
        sectionHeading("Educación"),
        eduBullet("Diploma en Programación de Computadores — Stratford Career Institute, Canadá — Agosto 2026"),
        eduBullet("Ingeniería de Sistemas — Universidad Antonio Nariño, Colombia — 2008"),
        eduBullet("Tecnóloga en Sistematización de Datos — Universidad Antonio Nariño, Colombia — 2005"),

        // FORMACION ADICIONAL
        sectionHeading("Formación Adicional"),
        eduBullet("Especialización en Contratación Estatal — Universidad de Medellín, Colombia — 2017"),
        eduBullet("Microsoft Dynamics 365 Sales Functional Consultant (MB-210) — En curso"),
        eduBullet("Sistemas de Gestión de Calidad y Calidad en el Desarrollo de Software | Gestión de Riesgos ISO 31000 | Fundamentos de SQL"),
        eduBullet("Inglés como Segunda Lengua, en curso"),

        // IDIOMAS
        sectionHeading("Idiomas"),
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({ text: "Español: ", font: FONT_BODY, size: 21, bold: true, color: COLOR.ink }),
            bodyRun("Nativo   ·   "),
            new TextRun({ text: "Inglés: ", font: FONT_BODY, size: 21, bold: true, color: COLOR.ink }),
            bodyRun("Competencia intermedia de trabajo"),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("resume-gloria-mayo-es.docx", buffer);
  console.log("DOCX ES written.");
});
