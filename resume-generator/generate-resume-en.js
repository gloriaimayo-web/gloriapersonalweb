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
        // NAME
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Gloria Mayo", font: FONT_HEAD, bold: true, size: 44, color: COLOR.wineDeep }),
          ],
        }),
        // ROLE LINE
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "SYSTEMS ENGINEER | APPLICATION SUPPORT | SOFTWARE QA | BUSINESS SYSTEMS",
              font: FONT_BODY,
              bold: true,
              size: 17,
              color: COLOR.wine,
              characterSpacing: 12,
            }),
          ],
        }),
        // CONTACT LINE
        new Paragraph({
          spacing: { after: 180 },
          children: [
            bodyRun("Woodbridge, ON  ·  +1 437-677-9018  ·  givone@hotmail.com  ·  linkedin.com/in/gloriamayo  ·  gloriamayo.com", {
              size: 19, color: COLOR.inkFaint,
            }),
          ],
        }),

        // PROFESSIONAL SUMMARY
        sectionHeading("Professional Summary"),
        summaryParagraph(
          "Systems Engineer with 15+ years of experience across application support, software quality, business requirements, process improvement and enterprise systems. Experienced in translating operational needs into documented requirements, workflows, testing scenarios and technology solutions within ISO 9001 environments. Founder and Product Owner of AppointSuite, where I lead business analysis, functional design, testing, implementation, client onboarding and continuous improvement of a live CRM and service-management platform. Completed a Canadian Diploma in Computer Programming in 2026."
        ),

        // TECHNICAL QUALIFICATIONS
        sectionHeading("Technical Qualifications"),
        qualLine("Software QA & testing", "Manual and functional testing, requirements validation, issue investigation, defect and non-conformity documentation, corrective-action follow-up"),
        qualLine("Application & product support", "Platform administration, end-user support, workflow analysis, issue reproduction, client onboarding, production validation"),
        qualLine("Delivery & quality", "Requirements gathering, acceptance criteria, vendor coordination, ISO 9001:2015, ISO 31000, documentation, software implementation"),
        qualLine("Tools & technology", "SQL fundamentals, HTML, CSS, Git, GitHub, Microsoft 365, CRM and multi-tenant systems; working knowledge of Python and Django"),

        // PROFESSIONAL EXPERIENCE
        sectionHeading("Professional Experience"),

        ...jobBlock(
          "Founder & Product Owner — AppointSuite",
          "July 2025 – Present",
          "Vaughan, ON",
          [
            "Identified recurring operational inefficiencies in appointment-based local businesses, including manual scheduling, fragmented customer information and time spent handling repetitive client interactions. Translated these needs into documented workflows, functional requirements and a technology-supported service model.",
            "Led functional design, acceptance criteria, testing, issue investigation, release validation, client onboarding and production implementation of AppointSuite, the CRM and scheduling platform supporting the service.",
            "Worked directly with pilot businesses to validate workflows, gather user feedback and continuously improve the solution based on real operating scenarios.",
          ]
        ),

        ...jobBlock(
          "Machine Operator — Costco Canada",
          "2022 – Present",
          "Vaughan, Ontario",
          [
            "Perform receiving, inventory control and truck-loading operations in a high-volume distribution environment, following established procedures with strong operational precision and consistency.",
            "Maintain accurate workflow execution and cross-team coordination while operating forklifts and electric pallet jacks; certified in food-handling safety and in Transportation of Dangerous Goods (TDG), Canada (2025).",
          ]
        ),

        ...jobBlock(
          "University Professional — IT Systems & Quality — Government of Antioquia",
          "2008 – 2020",
          "Medellin, Colombia",
          [
            "Administered and supported ISOlucion, the institutional ISO 9001 quality-management platform, including version implementation, end-user support, annual software planning, and vendor coordination.",
            "Performed functional and quality testing on institutional platforms; documented QA activities and non-conformities and followed corrective actions through resolution.",
            "Gathered requirements and supervised third-party development of SIVICO, a mobile revenue-surveillance and control system.",
            "Planned and supervised procurement of Microsoft, Adobe, and network-security software and supported institutional end users.",
          ]
        ),

        ...jobBlock(
          "Data Management Contractor | IDEA (Instituto para el Desarrollo de Antioquia)",
          "2008",
          "Medellin, Colombia",
          ["Maintained and updated records within an institutional quality-management database, supporting data accuracy and traceability for quality processes."]
        ),

        ...jobBlock(
          "Administrative and Technical Support Roles — Early Career",
          "1989 – 2007",
          "Medellin, Colombia",
          ["Progressed through administrative management, software sales, and technical help-desk roles, including user support at Empresas Publicas de Medellin and sales leadership at Standard Systems."]
        ),

        // EDUCATION
        sectionHeading("Education"),
        eduBullet("Diploma in Computer Programming — Stratford Career Institute, Canada — August 2026"),
        eduBullet("Systems Engineering Degree — Universidad Antonio Nariño, Colombia — 2008"),
        eduBullet("Technologist in Data Systematization — Universidad Antonio Nariño, Colombia — 2005"),

        // ADDITIONAL EDUCATION AND TRAINING
        sectionHeading("Additional Education and Training"),
        eduBullet("Specialization in State Contracting — Universidad de Medellín, Colombia — 2017"),
        eduBullet("Microsoft Dynamics 365 Sales Functional Consultant (MB-210) — In Progress"),
        eduBullet("Quality Management Systems and Quality in Software Development | ISO 31000 Risk Management | SQL Fundamentals"),
        eduBullet("English as a Second Language, ongoing"),

        // LANGUAGES
        sectionHeading("Languages"),
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({ text: "Spanish: ", font: FONT_BODY, size: 21, bold: true, color: COLOR.ink }),
            bodyRun("Native   ·   "),
            new TextRun({ text: "English: ", font: FONT_BODY, size: 21, bold: true, color: COLOR.ink }),
            bodyRun("Intermediate working proficiency"),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("resume-gloria-mayo-en.docx", buffer);
  console.log("DOCX written.");
});
