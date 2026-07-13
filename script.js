const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

const keysCard = document.querySelector(".key-cards");

const navBar = document.getElementsByTagName("nav");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
});

const cardData = [
  {
    icon: "images/images/ai.svg",
    title: "AI Power deduction",
    subTitle:
      "AI models trained on millions of attack patterns identify sophisticated threats that signature-based systems miss. Continuous learning adapts to evolving attack techniques without manual rule updates.",
  },

  {
    icon: "images/images/high.svg",
    title: "High Performance",
    subTitle:
      "Process 10+ Gbps of network traffic per instance with sub-millisecond latency. Distributed architecture scales horizontally to support enterprise-wide deployments without bottlenecks.",
  },

  {
    icon: "images/images/accuracy.svg",
    title: "Precision Accuracy",
    subTitle:
      "Behavioral context engine reduces false positives by 87% compared to traditional IDS. Smart correlation eliminates alert fatigue while ensuring zero tolerance for genuine threats.",
  },

  {
    icon: "images/images/real.svg",
    title: "Real time processing",
    subTitle:
      "Inline deployment blocks threats before they reach critical systems. Stream processing architecture analyzes traffic in real-time without packet loss or degradation.",
  },

  {
    icon: "images/images/multi.svg",
    title: "Multi layer protection",
    subTitle:
      "Combines signature matching, behavioral analysis, protocol validation, and ML-based anomaly detection. Defense-in-depth architecture ensures threats don`t slip through single-layer gaps.",
  },

  {
    icon: "images/images/advance.svg",
    title: "Advance layer protection",
    subTitle:
      "Interactive dashboards surface actionable insights from terabytes of security data. Automated threat hunting identifies attack campaigns across your entire infrastructure.",
  },
];

for (let i = 0; i < cardData.length; i++) {
  keysCard.innerHTML += `
  <div class="card">
            <div class="icon-title">
              <img src="${cardData[i].icon}" alt="" />
              <h4>${cardData[i].title}</h4>
            </div>

            <p>
              ${cardData[i].subTitle}
            </p>
          </div>
  `;
}

const cards = document.querySelectorAll(".card");
const titleSub = document.querySelectorAll(".options-title-subTitle");
const depCard = document.querySelectorAll(".dep-card");
const mainTitle = document.querySelectorAll("#mainTitle");
const trafficBox = document.querySelectorAll(".traffic-box");
const centerCard = document.querySelectorAll(".center-card");
const outputItem = document.querySelectorAll(".output-item");
const compareTitle = document.querySelectorAll(".compareTitle");
const compareSub = document.querySelectorAll(".compareSub");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => {
  observer.observe(card);
});
titleSub.forEach((title) => {
  observer.observe(title);
});
depCard.forEach((card) => {
  observer.observe(card);
});
mainTitle.forEach((el) => {
  observer.observe(el);
});
trafficBox.forEach((el) => {
  observer.observe(el);
});
centerCard.forEach((card) => {
  observer.observe(card);
});
outputItem.forEach((output) => {
  observer.observe(output);
});
compareTitle.forEach((title) => {
  observer.observe(title);
});
compareSub.forEach((el) => {
  observer.observe(el);
});

// ARCHITECTURE DATA -->
const archData = [
  {
    titleValue: "5+",
    subValue: "Gbps Throughput",
  },
  {
    titleValue: "0%",
    subValue: "Packet Drop",
  },
  {
    titleValue: "<1ms",
    subValue: "Latency",
  },
  {
    titleValue: "AI",
    subValue: "Powered",
  },
];

const archContainer = document.querySelector(".arch-containers");
for (let k = 0; k < archData.length; k++) {
  archContainer.innerHTML += `
  <div class="compareContainer">
              <h1>${archData[k].titleValue}</h1>
              <p>${archData[k].subValue}</p>
            </div>
  `;
}

const tableRows = [
  {
    name: "Threat Detection Breadth",
    desc: "Multi-layered detection using AI, behavioral analysis, and signature matching vs basic signature-only detection",
    diraa: 4,
    typical: 2,
  },
  {
    name: "Network Throughput & Scalability",
    desc: "5+ Gbps per instance with horizontal scaling vs limited throughput requiring hardware upgrades",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Zero-day Threat Protection",
    desc: "Generative AI network-based anomaly detection identifies unknown threats vs reliance on signature updates",
    diraa: 4,
    typical: 2,
  },
  {
    name: "False Positive/Negative Reduction",
    desc: "Behavioral context and ML reduce false alarms by 87% vs high false positive rates requiring manual tuning",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Threat Intelligence Integration",
    desc: "Real-time feed correlation with 50+ threat intel sources vs limited or manual threat feed integration",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Reporting & Dashboards",
    desc: "Interactive dashboards with customizable views and automated compliance reporting vs basic logging",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Custom Rule Creation (GUI)",
    desc: "Intuitive graphical interface for creating custom detection rules vs command-line configuration",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Cloud & Hybrid Deployments",
    desc: "Native cloud support with flexible deployment across on-premises, cloud, and hybrid environments vs limited cloud compatibility",
    diraa: 5,
    typical: 2,
  },
  {
    name: "IP-to-Geolocation Mapping",
    desc: "Built-in geolocation intelligence for threat source identification vs manual lookup or third-party integration",
    diraa: 5,
    typical: 1,
  },
];

function renderStars(count, type) {
  let html = `<div class="stars ${type}">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= count ? "filled" : "empty"}">★</span>`;
  }
  return html + "</div>";
}

const tbody = document.getElementById("tableBody");
tableRows.forEach((row) => {
  tbody.innerHTML += `
    <tr>
      <td>
        <div class="feature-name">${row.name}</div>
        <div class="feature-desc">${row.desc}</div>
      </td>
      <td>${renderStars(row.diraa, "diraa")}</td>
      <td>${renderStars(row.typical, "typical")}</td>
    </tr>
  `;
});

// Specifications Data -->
const specificationsData = [
  {
    specTitle: 'THROUGHUT',
    specHead: '10+ Gbps',
    specSmall: 'Per instance'
  },
  {
    specTitle: 'LATENCY',
    specHead: '< 1ms',
    specSmall: 'Inline mode'
  },
  {
    specTitle: 'FALSE POSITIVE RATE',
    specHead: '< 0.1%',
    specSmall: '87% reduction'
  },
  {
    specTitle: 'PROTOCOLS SUPPORTED',
    specHead: '100+',
    specSmall: 'Including custom'
  },
  {
    specTitle: 'CONCURRENT SESSIONS',
    specHead: '10M+',
    specSmall: 'Per instance'
  },
  {
    specTitle: 'DETECTION METHODS',
    specHead: '4-Layer',
    specSmall: 'Signature, ML, Behavioral, Protocol'
  },
  {
    specTitle: 'DEVELOPMENT MODES',
    specHead: 'Inline/TAP',
    specSmall: 'Active & passive'
  },
  {
    specTitle: 'THREAT INTEL FEEDS',
    specHead: '50+',
    specSmall: 'Real-time integration'
  },
  {
    specTitle: 'HIGH AVAILABILITY',
    specHead: '99.99%',
    specSmall: 'Active-active clustering'
  },
];

const specificationCards = document.querySelector('.specification-cards');

for(let j = 0; j < specificationsData.length; j++){
  specificationCards.innerHTML += `
  <div class="specificationCard">
          <p id="mainText">${specificationsData[j].specTitle}</p>
          <h1>${specificationsData[j].specHead}</h1>
          <p id="secText">${specificationsData[j].specSmall}</p>
        </div>
  `
}


// GET STARTED BUTTON POPUP
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
let modalStep = 0;

const modalSteps = [
  { title: "Let's get started",   badge: "STEP 1 OF 3" },
  { title: "Contact information", badge: "STEP 2 OF 3" },
  { title: "Final details",       badge: "STEP 3 OF 3" }
];

function renderModal() {
  document.getElementById('modalTitle').textContent = modalSteps[modalStep].title;
  document.getElementById('modalBadge').textContent = modalSteps[modalStep].badge;

  const progress = document.getElementById('modalProgress');
  progress.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const seg = document.createElement('div');
    seg.className = 'modal-progress-seg' + (i <= modalStep ? ' filled' : '');
    progress.appendChild(seg);
  }

  document.querySelectorAll('.modal-step').forEach((el, i) => {
    if (i === modalStep) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const btns = document.getElementById('modalBtns');
  btns.innerHTML = '';

  if (modalStep > 0) {
    const back = document.createElement('button');
    back.className = 'modal-btn-back';
    back.innerHTML = '<i class="fa-solid fa-chevron-left"></i> Back';
    back.onclick = () => { modalStep--; renderModal(); };
    btns.appendChild(back);
  }

  const next = document.createElement('button');
  next.className = 'modal-btn-next';
  const isLast = modalStep === 2;
  next.innerHTML = isLast
    ? 'Submit request'
    : 'Continue <i class="fa-solid fa-chevron-right"></i>';
  next.onclick = () => {
    if (isLast) {
      alert('Request submitted! We will be in touch.');
      closeModalFn();
    } else {
      modalStep++;
      renderModal();
    }
  };
  btns.appendChild(next);
}

function openModal() {
  modalStep = 0;
  renderModal();
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalFn() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('navBtn').addEventListener('click', openModal);
document.getElementById('heroBtn').addEventListener('click', openModal);
document.getElementById('mobileNavBtn').addEventListener('click', openModal);
modalClose.addEventListener('click', closeModalFn);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModalFn();
});

// SCROLL TO TOP BUTTON

