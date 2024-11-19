const cards = [
  "Digital CSX and virtual solutions",
  "Advanced data analytics",
  "Back-office efficency",
  "Technology services",
  "Remote work models",
  "Online trust and safety",
  "The power of AI",
  "Interpretation and translation services",
  "Recruitment",
  "Data security",
  "Business consulting",
];

const cards2 = [
  "Automotive",
  "Banking and financial services",
  "Energy and utilities",
  "Government",
  "Healthcare",
  "Insurance",
  "Media",
  "Retail and e-commerce",
  "Technology",
  "Telecom",
  "Travel, hospitality and cargo",
  "Video games",
];

const dataCarrusel2 = [
  {
    title: "MIT Technology Review: Data analytics reveal real business value",
    description:
      "Business data provides an often untapped well of organizational value. However, making sense of today’s business data is a daunting process...",
  },
  {
    title: "The profound power of generative AI for business",
    description: `Unlock AI's Potential for Business Growth. Learn from Peter Ryan's White Paper on Ethical AI Adoption.`,
  },
  {
    title:
      "MIT Technology Review Insights: Driving companywide efficiencies with...",
    description: `Download this exclusive white paper to uncover how AI- and ML-powered tools can drive companywide efficiencies with AI.`,
  },
  {
    title:
      "MIT Technology Review Insights: Humans at the heart of generative AI",
    description: `Generative AI is becoming a key component of business operations.`,
  },
  {
    title: "Are Consumers Ready for Generative AI-augmented Interactions?",
    description: `Unraveling the Impact of Generative AI Adoption on Customer Experience Management (CEM) through the Consumer Lens`,
  },
  {
    title:
      "Digital solutions for claims management: Combining high-tech and high...",
    description: `This e-book highlights key results from leading insurers. Explore how digital claims management with AI and automation improves processing,...`,
  },
  {
    title:
      "Everest Group: The role of strategic partnership management and rebad...",
    description: `In this report, Everest Group takes a close look at the strategic management approach and outlines its advantages for enterprises and provi...`,
  },
  {
    title: "2024 Technology Trends: Hyperscaling impactful business outcomes",
    description: `Technology Trends: As digital transformation accelerates, AI-powered systems and human experts together deliver personalized, seamless cust...`,
  },
  {
    title:
      "Elevating the Traveler Experience: A necessity for airlines to gain a...",
    description: `Enhance Traveler Experience with flexible bookings, seamless cancellations & refundable fares in the post-pandemic air travel era.`,
  },
];

const carrusel = document.querySelector(".carrusel");
const carrusel2 = document.querySelector(".carrusel2");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const nextButton2 = document.querySelector(".next2");
const prevButton2 = document.querySelector(".prev2");

let currentIndex = 0;
let currentIndex2 = 0;

document.addEventListener("DOMContentLoaded", () => {
  const containerRow = document.querySelector("#containerCards .row");
  const containerRow2 = document.querySelector("#containerCards2 .row");
  const carrusel = document.querySelector("#carrusel .carrusel");
  const carrusel2 = document.querySelector("#carrusel2 .carrusel2");

  if (containerRow) {
    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = "col";
      cardElement.innerHTML = `
        <div
          class="card border-0 rounded-4 shadow-sm text-white"
          style="
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://picsum.photos/300/200?random=${index}');
            background-size: cover;
            background-position: center;
            height: 300px;
            width: 200px;
          "
        >
          <div
            class="card-body d-flex flex-column justify-content-between w-100 h-100 align-items-center"
          >
            <h5 class="card-title"> <strong> ${card} </strong></h5>
            <button class="w-100 d-flex justify-content-center align-self-center " style="background: transparent; border: none;">
              <span class="btn-index w-100 p-0 m-0">Ver más</span>
            </button>
          </div>
        </div>
      `;
      containerRow.appendChild(cardElement);
    });
  } else {
    console.error("No se encontró el contenedor para las tarjetas.");
  }
  if (containerRow2) {
    cards2.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = "col";
      cardElement.innerHTML = `
        <div
          class="card border-0 rounded-4 shadow-sm text-white"
          style="
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://picsum.photos/300/200?random=${index}');
            background-size: cover;
            background-position: center;
            height: 300px;
            width: 200px;
          "
        >
          <div
            class="card-body d-flex flex-column justify-content-between w-100 h-100 align-items-center"
          >
            <h5 class="card-title"> <strong> ${card} </strong></h5>
            <button class="w-100 d-flex justify-content-center align-self-center " style="background: transparent; border: none;">
              <span class="btn-index w-100 p-0 m-0">Ver más</span>
            </button>
          </div>
        </div>
      `;
      containerRow2.appendChild(cardElement);
    });
  } else {
    console.error("No se encontró el contenedor para las tarjetas 2.");
  }
  if (carrusel) {
    for (let index = 1; index < 31; index++) {
      const cardElement = document.createElement("div");
      cardElement.className = "item";
      cardElement.innerHTML = `
        <img 
          src="assets/img/Medalla${index}.png" 
          alt="Imagen ${index + 1}" 
          style="
            object-fit: cover;
            border-radius: 10px;
          "
        />
      `;
      carrusel.appendChild(cardElement);
    }
  } else {
    console.error("No se encontró el contenedor del carrusel.");
  }
  if (carrusel2) {
    dataCarrusel2.forEach((carrusel, index) => {
      const carruselElement = document.createElement("div");
      carruselElement.className = "col-4 itemSelector"; // Usando 33.33% de ancho
      carruselElement.innerHTML = `
        <div class="card border-0 flex-column" id="cardEmpresa">
          <div class="d-flex justify-content-center align-items-center">
            <img src="https://picsum.photos/400/300?random=${index}" class="card-img-top" alt="Img Carrusel" style="object-fit: cover; width: 100%; height: 100%;">
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center" style="flex-shrink: 0;">${carrusel.title}</h5>
            <p class="card-text text-center" style="flex-grow: 1;">${carrusel.description}</p>
          </div>
        </div>
      `;
      carrusel2.appendChild(carruselElement);
    });
  } else {
    console.error("No se encontró el contenedor del carrusel 2.");
  }
});

// Carrusel

function updateCarrusel() {
  const itemWidth = carrusel.querySelector(".item").clientWidth;
  carrusel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener("click", () => {
  const totalItems = carrusel.children.length;
  if (currentIndex < totalItems - 3) {
    currentIndex++;
    updateCarrusel();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarrusel();
  }
});

function updateCarrusel2() {
  const items = carrusel2.querySelectorAll(".itemSelector");
  const itemWidth = items[0].clientWidth;
  const totalItems = items.length;

  // Asegúrate de que el índice esté dentro de los límites
  if (currentIndex2 >= totalItems) {
    currentIndex2 = totalItems - 1;
  }
  if (currentIndex2 < 0) {
    currentIndex2 = 0;
  }

  carrusel2.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
}

nextButton2.addEventListener("click", () => {
  const totalItems = carrusel2.children.length;
  if (currentIndex2 < totalItems - 3) {
    currentIndex2++;
    updateCarrusel2();
    console.log("CLick en avanzar 2");
  }
});

prevButton2.addEventListener("click", () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
    updateCarrusel2();
    console.log("CLick en retroceder 2");
  }
});
