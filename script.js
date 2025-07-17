const cursos = [
  { codigo: "ARQ-111", nombre: "Matemática aplicada para arquitectura I", requisitos: [] },
  { codigo: "ARQ-112", nombre: "Representación arquitectónica", requisitos: [] },
  { codigo: "AR1-113", nombre: "Historia y Teoría de la Arquitectura I", requisitos: [] },
  { codigo: "AR1-114", nombre: "Comprensión Lectora en Arquitectura", requisitos: [] },
  { codigo: "ARQ-115", nombre: "Taller de Arquitectura I: Introducción al Diseño", requisitos: [] },
  { codigo: "IFG-100", nombre: "Inglés I", requisitos: [] },
  { codigo: "ARQ-121", nombre: "Matemática aplicada para arquitectura II", requisitos: ["ARQ-111"] },
  { codigo: "ARQ-122", nombre: "Geometría y Representación I", requisitos: ["ARQ-112"] },
  { codigo: "ARQ-123", nombre: "Historia y Teoría de la Arquitectura II", requisitos: ["AR1-113"] },
  { codigo: "ARQ-124", nombre: "Taller de Arquitectura II", requisitos: ["ARQ-115"] },
  { codigo: "IFG-200", nombre: "Inglés II", requisitos: ["IFG-100"] },
  { codigo: "ARQ-211", nombre: "Urbanismo I", requisitos: [] },
  { codigo: "ARQ-212", nombre: "Geometría y Representación II", requisitos: ["ARQ-122"] },
  { codigo: "ARQ-213", nombre: "Estructura I", requisitos: ["ARQ-121"] },
  { codigo: "ARQ-214", nombre: "Taller de Arquitectura III", requisitos: ["ARQ-124"] },
  { codigo: "IFG-300", nombre: "Inglés III", requisitos: ["IFG-200"] },
  { codigo: "ARQ-221", nombre: "Urbanismo II", requisitos: ["ARQ-211"] },
  { codigo: "ARQ-222", nombre: "Modelación Digital para Arquitectos", requisitos: ["ARQ-212"] },
  { codigo: "ARQ-223", nombre: "Estructura II", requisitos: ["ARQ-213"] },
  { codigo: "ARQ-224", nombre: "Expresión Oral en Arquitectura", requisitos: ["AR1-114"] },
  { codigo: "ARQ-225", nombre: "Taller de Arquitectura IV: Módulo Integrador Ciencias Básicas", requisitos: ["ARQ-124", "ARQ-213", "ARQ-222"] },
  { codigo: "ARQ-311", nombre: "Urbanismo III", requisitos: ["ARQ-221"] },
  { codigo: "ARQ-312", nombre: "BIM / Modelación", requisitos: ["ARQ-222"] },
  { codigo: "ARQ-313", nombre: "Estructura III", requisitos: ["ARQ-223"] },
  { codigo: "ARQ-314", nombre: "Taller de Arquitectura V", requisitos: ["ARQ-225"] },
  { codigo: "MFG-114", nombre: "Introducción a la Fe", requisitos: [] },
  { codigo: "ARQ-321", nombre: "Sistemas Constructivos I", requisitos: [] },
  { codigo: "ARQ-322", nombre: "BIM / Revisión", requisitos: ["ARQ-312"] },
  { codigo: "ARQ-323", nombre: "Topografía", requisitos: ["ARQ-212"] },
  { codigo: "ARQ-324", nombre: "Tecnología en Diseño y Materialización", requisitos: ["ARQ-313"] },
  { codigo: "ARQ-325", nombre: "Taller de Arquitectura VI", requisitos: ["ARQ-314"] },
  { codigo: "MFG-216", nombre: "Ética Cristiana", requisitos: ["MFG-114"] },
  { codigo: "ARQ-411", nombre: "Sistemas Constructivos II", requisitos: ["ARQ-321"] },
  { codigo: "ARQ-412", nombre: "BIM / Coordinación", requisitos: ["ARQ-322"] },
  { codigo: "ARQ-413", nombre: "Edificio y Entorno I", requisitos: ["ARQ-311"] },
  { codigo: "ARQ-414", nombre: "Metodología de la Investigación", requisitos: ["ARQ-325"] },
  { codigo: "ARQ-415", nombre: "Taller de Arquitectura VII", requisitos: ["ARQ-325"] },
  { codigo: "ARQ-421", nombre: "Sistemas Constructivos III", requisitos: ["ARQ-411"] },
  { codigo: "ARQ-422", nombre: "BIM / Dirección y Gestión", requisitos: ["ARQ-412"] },
  { codigo: "ARQ-423", nombre: "Edificio y Entorno II", requisitos: ["ARQ-413"] },
  { codigo: "ARQ-424", nombre: "Taller de Arquitectura VIII: Módulo Integrador Licenciatura (Práctica 1: Inicial)", requisitos: ["ARQ-415"] },
  { codigo: "CFG", nombre: "Certificación I", requisitos: [] },
  { codigo: "ARQ-511", nombre: "Electivo I", requisitos: ["ARQ-424"] },
  { codigo: "AR1-512", nombre: "Eficiencia Energética", requisitos: ["ARQ-423"] },
  { codigo: "ARQ-513", nombre: "Arquitectura Sustentable I", requisitos: ["ARQ-423"] },
  { codigo: "ARQ-514", nombre: "Gestión de Proyectos", requisitos: [] },
  { codigo: "ARQ-515", nombre: "Taller de Arquitectura IX", requisitos: ["ARQ-424"] },
  { codigo: "CFG2", nombre: "Certificación II", requisitos: ["CFG"] },
  { codigo: "ARQ-521", nombre: "Electivo II", requisitos: ["ARQ-511"] },
  { codigo: "ARQ-522", nombre: "Normativa en Proyectos de Arquitectura", requisitos: [] },
  { codigo: "ARQ-523", nombre: "Arquitectura Sustentable II", requisitos: ["ARQ-513"] },
  { codigo: "ARQ-524", nombre: "Formulación y Evaluación de Proyectos", requisitos: ["ARQ-514"] },
  { codigo: "ARQ-525", nombre: "Taller de Arquitectura X", requisitos: ["ARQ-515"] },
  { codigo: "CFG3", nombre: "Certificación III", requisitos: ["CFG2"] },
  { codigo: "ARQ-611", nombre: "Electivo III", requisitos: ["ARQ-521"] },
  { codigo: "ARQ-612", nombre: "Taller de Titulación - Módulo Integrador Profesional (Práctica 2: Profesional)", requisitos: ["ARQ-525"] },
];

const mallaDiv = document.getElementById("malla");
const aprobados = new Set();

// Agrupar por semestre
const cursosPorSemestre = {};
cursos.forEach(curso => {
  const match = curso.codigo.match(/^[A-Z]+-?(\d)/);
  const semestre = match ? parseInt(match[1]) : 0;
  if (!cursosPorSemestre[semestre]) cursosPorSemestre[semestre] = [];
  cursosPorSemestre[semestre].push(curso);
});

// Mostrar cursos agrupados
Object.keys(cursosPorSemestre).sort((a, b) => a - b).forEach(numSemestre => {
  const titulo = document.createElement("h2");
  titulo.textContent = `Semestre ${numSemestre}`;
  titulo.className = "semestre";
  mallaDiv.appendChild(titulo);

  const contenedor = document.createElement("div");
  contenedor.className = "fila-semestre";
  mallaDiv.appendChild(contenedor);

  cursosPorSemestre[numSemestre].forEach(curso => {
    const div = document.createElement("div");
    div.className = "curso";
    div.textContent = `${curso.nombre}`;

    div.onclick = () => {
      const requisitosCumplidos = curso.requisitos.every(req => aprobados.has(req));
      if (requisitosCumplidos) {
        if (aprobados.has(curso.codigo)) {
          aprobados.delete(curso.codigo);
          div.classList.remove("activo");
        } else {
          aprobados.add(curso.codigo);
          div.classList.add("activo");
        }
      } else {
        alert(`Para cursar "${curso.nombre}", debes aprobar: ${curso.requisitos.join(", ")}`);
      }
    };

    contenedor.appendChild(div);
  });
});
