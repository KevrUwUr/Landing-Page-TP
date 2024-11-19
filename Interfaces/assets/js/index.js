const cards = [
  'Digital CSX and virtual solutions',
  'Advanced data analytics',
  'Back-office efficency',
  'Technology services',
  'Remote work models',
  'Online trust and safety',
  'The power of AI',
  'Interpretation and translation services',
  'Recruitment',
  'Data security',
  'Business consulting'
]

const cards2 = [
  'Automotive',
  'Banking and financial services',
  'Energy and utilities',
  'Government',
  'Healthcare',
  'Insurance',
  'Media',
  'Retail and e-commerce',
  'Technology',
  'Telecom',
  'Travel, hospitality and cargo',
  'Video games'
]

document.addEventListener('DOMContentLoaded', () => {
  const containerRow = document.querySelector('#containerCards .row');

  if (containerRow) {
    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'col';
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
    console.error('No se encontró el contenedor para las tarjetas.');
  }
});

