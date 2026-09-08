(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5515997238982";

  const COOKIE_CONSENT_KEY = "gm_cookie_consent";

  const COOKIE_POLICY_URL = "politica-de-privacidade.html#cookies";

  const WHATSAPP_PROPERTY_MESSAGE =
    'Olá, Graciele! Vi o imóvel "{titulo}" no site e gostaria de mais informações.';

  let PROPERTIES = [];

  const TESTIMONIALS = [
    {
      texto:
        "A Graciele acompanhou cada visita com muita paciência e conhecimento técnico. Fechamos a compra em menos de um mês, sem surpresas.",
      nome: "Fernanda R.",
      cidade: "Itapeva - SP",
      estrelas: 5,
    },
    {
      texto:
        "Vendemos nosso terreno pelo valor justo graças à avaliação bem feita. Atendimento próximo do início ao fim do processo.",
      nome: "Marcelo e Ana P.",
      cidade: "Itapeva - SP",
      estrelas: 5,
    },
    {
      texto:
        "Procurava um apartamento para alugar e fui muito bem orientada sobre documentação e contrato. Recomendo de olhos fechados.",
      nome: "Juliana T.",
      cidade: "Região de Itapeva",
      estrelas: 5,
    },
  ];

  const FAQS = [
    {
      pergunta: "Como funciona a avaliação do meu imóvel?",
      resposta:
        "Faço uma visita técnica para analisar estrutura, acabamento e localização, além de comparar com imóveis semelhantes já negociados na região. Você recebe uma faixa de valor realista para vender com segurança.",
    },
    {
      pergunta: "Quais documentos preciso para vender meu imóvel?",
      resposta:
        "Em geral: matrícula atualizada, escritura, certidões negativas e documentos pessoais dos proprietários. Eu envio uma lista completa e ajudo a organizar tudo antes de anunciar.",
    },
    {
      pergunta: "Você atende só Itapeva ou também região?",
      resposta:
        "Atendo Itapeva e as cidades vizinhas. Se o seu caso for fora dessa região, me chame no WhatsApp que te oriento ou indico alguém de confiança.",
    },
    {
      pergunta: "Quanto tempo leva para vender um imóvel?",
      resposta:
        "Depende do tipo de imóvel, localização e preço, mas com anúncio bem feito e preço alinhado ao mercado, a média costuma ficar entre 60 e 120 dias.",
    },
    {
      pergunta: "Você ajuda com financiamento?",
      resposta:
        "Sim. Oriento sobre as opções disponíveis e o passo a passo junto ao banco, para que o financiamento não seja um obstáculo na hora de fechar negócio.",
    },
  ];

  function buildWhatsappUrl(message) {
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  function renderPropertyCards(container, lista) {
    if (!container) return;

    container.innerHTML = "";
    const fragment = document.createDocumentFragment();

    lista.forEach(function (imovel) {
      const card = document.createElement("article");
      card.className = "property-card";
      card.dataset.tag = imovel.tag;

      const featuresParts = [];
      if (imovel.quartos > 0) {
        featuresParts.push(
          '<span><i class="fa-solid fa-bed" aria-hidden="true"></i>' +
            imovel.quartos +
            " quartos</span>",
        );
      }
      if (imovel.banheiros > 0) {
        featuresParts.push(
          '<span><i class="fa-solid fa-bath" aria-hidden="true"></i>' +
            imovel.banheiros +
            " banheiros</span>",
        );
      }
      featuresParts.push(
        '<span><i class="fa-solid fa-ruler-combined" aria-hidden="true"></i>' +
          imovel.area +
          "</span>",
      );

      const whatsappMsg = WHATSAPP_PROPERTY_MESSAGE.replace(
        "{titulo}",
        imovel.titulo,
      );

      card.innerHTML =
        '<div class="property-photo">' +
        '<img src="' +
        imovel.foto +
        '" alt="' +
        imovel.titulo +
        '" loading="lazy" onerror="this.closest(&quot;.property-photo&quot;).classList.add(&quot;is-placeholder&quot;)">' +
        '<div class="property-photo__placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Foto do imóvel</span></div>' +
        '<span class="property-photo__tag">' +
        imovel.tag +
        "</span>" +
        "</div>" +
        '<div class="property-body">' +
        '<p class="property-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>' +
        imovel.bairro +
        "</p>" +
        '<h3 class="property-title">' +
        imovel.titulo +
        "</h3>" +
        '<p class="property-price">' +
        imovel.preco +
        "</p>" +
        '<div class="property-features">' +
        featuresParts.join("") +
        "</div>" +
        '<div class="property-actions">' +
        '<a class="property-cta" target="_blank" rel="noopener" href="' +
        buildWhatsappUrl(whatsappMsg) +
        '">' +
        '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>Tenho interesse</span>' +
        "</a>" +
        '<button type="button" class="property-cta property-cta--outline" data-property-id="' +
        imovel.id +
        '">' +
        '<i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>Descrição</span>' +
        "</button>" +
        "</div>" +
        "</div>";

      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  function renderProperties() {
    const grid = document.getElementById("propertiesGrid");
    if (!grid) return;
    renderPropertyCards(grid, PROPERTIES.slice(0, 6));
  }

  function renderAllProperties() {
    const grid = document.getElementById("allPropertiesGrid");
    if (!grid) return;
    renderPropertyCards(grid, PROPERTIES);
    setupPropertyFilter(grid);
  }

  function setPropertiesStatus(message) {
    const grids = [
      document.getElementById("propertiesGrid"),
      document.getElementById("allPropertiesGrid"),
    ];
    grids.forEach(function (grid) {
      if (!grid) return;
      grid.innerHTML = '<p class="properties__status">' + message + "</p>";
    });
  }

  async function carregarImoveis() {
    const temGrid =
      document.getElementById("propertiesGrid") ||
      document.getElementById("allPropertiesGrid");
    if (!temGrid) return;

    if (typeof supabaseClient === "undefined") {
      setPropertiesStatus(
        "Não foi possível carregar os imóveis no momento.",
      );
      return;
    }

    setPropertiesStatus("Carregando imóveis...");

    const { data, error } = await supabaseClient
      .from("imoveis")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      setPropertiesStatus(
        "Não foi possível carregar os imóveis no momento.",
      );
      return;
    }

    PROPERTIES = data;

    if (!PROPERTIES.length) {
      setPropertiesStatus("Nenhum imóvel disponível no momento.");
      return;
    }

    renderProperties();
    renderAllProperties();
  }

  function setupPropertyFilter(grid) {
    const filterBar = document.getElementById("propertyFilter");
    if (!filterBar) return;

    const buttons = Array.prototype.slice.call(
      filterBar.querySelectorAll("button"),
    );
    const cards = Array.prototype.slice.call(
      grid.querySelectorAll(".property-card"),
    );

    filterBar.addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;

      buttons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      const filtro = btn.dataset.filter;
      cards.forEach(function (card) {
        const mostrar = filtro === "Todos" || card.dataset.tag === filtro;
        card.hidden = !mostrar;
      });
    });
  }

  function renderTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dotsWrap = document.getElementById("testimonialDots");
    if (!track || !dotsWrap) return { slides: [], dots: [] };

    const trackFragment = document.createDocumentFragment();
    const dotsFragment = document.createDocumentFragment();

    TESTIMONIALS.forEach(function (item, index) {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide" + (index === 0 ? " is-active" : "");
      slide.setAttribute("role", "tabpanel");

      const stars =
        '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(
          item.estrelas,
        );

      slide.innerHTML =
        '<div class="stars" aria-hidden="true">' +
        stars +
        "</div>" +
        "<blockquote>\u201C" +
        item.texto +
        "\u201D</blockquote>" +
        '<p class="author">' +
        item.nome +
        "<span>" +
        item.cidade +
        "</span></p>";

      trackFragment.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "is-dot" + (index === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Ver depoimento " + (index + 1));
      dot.dataset.index = String(index);

      dotsFragment.appendChild(dot);
    });

    track.appendChild(trackFragment);
    dotsWrap.appendChild(dotsFragment);

    return {
      slides: Array.prototype.slice.call(
        track.querySelectorAll(".testimonial-slide"),
      ),
      dots: Array.prototype.slice.call(dotsWrap.querySelectorAll("button")),
    };
  }

  function renderFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;

    const fragment = document.createDocumentFragment();

    FAQS.forEach(function (item, index) {
      const wrapper = document.createElement("div");
      wrapper.className = "faq-item";

      const answerId = "faq-answer-" + index;

      wrapper.innerHTML =
        '<button class="faq-item__question" aria-expanded="false" aria-controls="' +
        answerId +
        '">' +
        "<span>" +
        item.pergunta +
        "</span>" +
        '<i class="fa-solid fa-plus" aria-hidden="true"></i>' +
        "</button>" +
        '<div class="faq-item__answer" id="' +
        answerId +
        '">' +
        '<div class="faq-item__answer-inner">' +
        item.resposta +
        "</div>" +
        "</div>";

      fragment.appendChild(wrapper);
    });

    list.appendChild(fragment);
  }

  function setupHeader() {
    const header = document.getElementById("header");
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        const isOpen = !menu.hidden;
        menu.hidden = isOpen;
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-bars" aria-hidden="true"></i>'
          : '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        document.body.style.overflow = isOpen ? "" : "hidden";
      });

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.hidden = true;
          toggle.setAttribute("aria-expanded", "false");
          toggle.innerHTML =
            '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
          document.body.style.overflow = "";
        });
      });
    }
  }

  function setupCounters() {
    const items = document.querySelectorAll(".trust__number");
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function animateCount(el) {
      const target = parseInt(el.dataset.count, 10) || 0;
      if (prefersReducedMotion) {
        el.textContent = String(target);
        return;
      }
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupTestimonials(refs) {
    const slides = refs.slides;
    const dots = refs.dots;
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");
    const track = document.getElementById("testimonialTrack");
    if (!slides.length) return;

    let current = 0;

    function goTo(index) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
    }

    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        goTo(current - 1);
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        goTo(current + 1);
      });
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        goTo(index);
      });
    });

    if (track) {
      let touchStartX = 0;
      track.addEventListener(
        "touchstart",
        function (e) {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );

      track.addEventListener(
        "touchend",
        function (e) {
          const touchEndX = e.changedTouches[0].screenX;
          const delta = touchEndX - touchStartX;
          if (Math.abs(delta) > 40) {
            goTo(delta > 0 ? current - 1 : current + 1);
          }
        },
        { passive: true },
      );
    }
  }

  function setupFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;

    list.addEventListener("click", function (e) {
      const button = e.target.closest(".faq-item__question");
      if (!button) return;

      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-item__answer");
      const isOpen = item.classList.contains("is-open");

      list.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem
            .querySelector(".faq-item__question")
            .setAttribute("aria-expanded", "false");
          openItem.querySelector(".faq-item__answer").style.maxHeight = null;
        }
      });

      item.classList.toggle("is-open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
    });
  }

  function setupLeadForm() {
    const form = document.getElementById("leadForm");
    if (!form) return;

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const interesse = document.getElementById("interesse");
    const mensagem = document.getElementById("mensagem");
    const note = document.getElementById("leadFormNote");

    function setError(fieldRow, errorEl, message) {
      fieldRow
        .closest(".form-row")
        .classList.toggle("has-error", Boolean(message));
      errorEl.textContent = message || "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      if (!nome.value.trim()) {
        setError(nome, document.getElementById("erroNome"), "Digite seu nome.");
        isValid = false;
      } else {
        setError(nome, document.getElementById("erroNome"), "");
      }

      const digits = telefone.value.replace(/\D/g, "");
      if (digits.length < 10) {
        setError(
          telefone,
          document.getElementById("erroTelefone"),
          "Digite um WhatsApp válido com DDD.",
        );
        isValid = false;
      } else {
        setError(telefone, document.getElementById("erroTelefone"), "");
      }

      if (!isValid) {
        note.textContent = "Confira os campos destacados antes de enviar.";
        return;
      }

      const partes = [
        "Olá, Graciele! Meu nome é " + nome.value.trim() + ".",
        interesse.value ? "Tenho interesse em: " + interesse.value + "." : "",
        mensagem.value.trim() ? "Mensagem: " + mensagem.value.trim() : "",
        "Meu WhatsApp para contato: " + telefone.value.trim(),
      ]
        .filter(Boolean)
        .join(" ");

      window.open(buildWhatsappUrl(partes), "_blank", "noopener");

      note.textContent =
        "Abrindo o WhatsApp em uma nova aba. Se não abrir, toque no botão flutuante no canto da tela.";
      form.reset();
    });
  }

  function setupBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      function () {
        const shouldShow = window.scrollY > 700;
        btn.hidden = false;
        btn.classList.toggle("is-visible", shouldShow);
        if (!shouldShow) {
          window.setTimeout(function () {
            if (!btn.classList.contains("is-visible")) btn.hidden = true;
          }, 250);
        }
      },
      { passive: true },
    );

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  }

  function setupPropertyModal() {
    const modal = document.getElementById("propertyModal");
    if (!modal) return;

    const gallery = document.getElementById("propertyModalGallery");
    const track = document.getElementById("propertyModalTrack");
    const dotsWrap = document.getElementById("propertyModalDots");
    const prevBtn = document.getElementById("propertyModalPrev");
    const nextBtn = document.getElementById("propertyModalNext");
    const closeBtn = document.getElementById("propertyModalClose");
    const overlay = modal.querySelector(".property-modal__overlay");

    const locationEl = document.getElementById("propertyModalLocation");
    const titleEl = document.getElementById("propertyModalTitle");
    const priceEl = document.getElementById("propertyModalPrice");
    const featuresEl = document.getElementById("propertyModalFeatures");
    const descriptionEl = document.getElementById("propertyModalDescription");
    const ctaEl = document.getElementById("propertyModalCta");

    let slideIndex = 0;

    function goToSlide(index) {
      const slideCount = track.children.length;
      if (!slideCount) return;
      slideIndex = (index + slideCount) % slideCount;
      track.style.transform = "translateX(-" + slideIndex * 100 + "%)";
      dotsWrap.querySelectorAll("button").forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === slideIndex);
      });
    }

    function buildGallery(fotos, titulo) {
      track.innerHTML = "";
      dotsWrap.innerHTML = "";
      slideIndex = 0;

      if (!fotos || !fotos.length) {
        track.innerHTML =
          '<div class="property-modal__slide is-placeholder"><div class="property-modal__slide-placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Sem fotos</span></div></div>';
        gallery.setAttribute("data-count", "1");
        return;
      }

      fotos.forEach(function (src, i) {
        const slide = document.createElement("div");
        slide.className = "property-modal__slide";
        slide.innerHTML =
          '<img src="' +
          src +
          '" alt="' +
          titulo +
          " - foto " +
          (i + 1) +
          '" loading="lazy" onerror="this.closest(&quot;.property-modal__slide&quot;).classList.add(&quot;is-placeholder&quot;)">' +
          '<div class="property-modal__slide-placeholder"><i class="fa-solid fa-image" aria-hidden="true"></i><span>Foto indisponível</span></div>';
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Ver foto " + (i + 1));
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", function () {
          goToSlide(i);
        });
        dotsWrap.appendChild(dot);
      });

      gallery.setAttribute("data-count", String(fotos.length));
      track.style.transform = "translateX(0%)";
    }

    function openModal(imovel) {
      const fotos =
        imovel.fotos && imovel.fotos.length ? imovel.fotos : [imovel.foto];
      buildGallery(fotos, imovel.titulo);

      locationEl.innerHTML =
        '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>' +
        imovel.bairro;
      titleEl.textContent = imovel.titulo;
      priceEl.textContent = imovel.preco;

      const featuresParts = [];
      if (imovel.quartos > 0)
        featuresParts.push(
          '<span><i class="fa-solid fa-bed" aria-hidden="true"></i>' +
            imovel.quartos +
            " quartos</span>",
        );
      if (imovel.banheiros > 0)
        featuresParts.push(
          '<span><i class="fa-solid fa-bath" aria-hidden="true"></i>' +
            imovel.banheiros +
            " banheiros</span>",
        );
      featuresParts.push(
        '<span><i class="fa-solid fa-ruler-combined" aria-hidden="true"></i>' +
          imovel.area +
          "</span>",
      );
      featuresEl.innerHTML = featuresParts.join("");

      descriptionEl.textContent = imovel.descricao || "";

      const whatsappMsg = WHATSAPP_PROPERTY_MESSAGE.replace(
        "{titulo}",
        imovel.titulo,
      );
      ctaEl.href = buildWhatsappUrl(whatsappMsg);

      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    function closeModal() {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-property-id]");
      if (!btn) return;
      const imovel = PROPERTIES.find(function (p) {
        return String(p.id) === btn.dataset.propertyId;
      });
      if (imovel) openModal(imovel);
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        goToSlide(slideIndex - 1);
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        goToSlide(slideIndex + 1);
      });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    let touchStartX = 0;
    track.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 40) {
          goToSlide(delta > 0 ? slideIndex - 1 : slideIndex + 1);
        }
      },
      { passive: true },
    );
  }

  function setupFooterYear() {
    const el = document.getElementById("anoAtual");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function syncWhatsappLinks() {
    document
      .querySelectorAll('a[href^="https://wa.me/"]')
      .forEach(function (link) {
        const url = new URL(link.href);
        url.pathname = "/" + WHATSAPP_NUMBER;
        link.href = url.toString();
      });
  }

  function setupCookieConsent() {
    let choice = null;
    try {
      choice = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch (e) {
      choice = null;
    }

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.id = "cookieBanner";
    banner.hidden = true;
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__text">' +
      "Usamos cookies essenciais para o site funcionar e, somente com o seu consentimento, cookies para entender melhor a navegação. Saiba mais na nossa " +
      '<a href="' +
      COOKIE_POLICY_URL +
      '">Política de Privacidade</a>.' +
      "</p>" +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="btn btn--outline btn--sm" id="cookieRejectBtn">Só os essenciais</button>' +
      '<button type="button" class="btn btn--primary btn--sm" id="cookieAcceptBtn">Aceitar todos</button>' +
      "</div>" +
      "</div>";
    document.body.appendChild(banner);

    function showBanner() {
      banner.hidden = false;
      document.body.classList.add("has-cookie-banner");
      window.requestAnimationFrame(function () {
        banner.classList.add("is-visible");
      });
    }

    function hideBanner() {
      banner.classList.remove("is-visible");
      document.body.classList.remove("has-cookie-banner");
      window.setTimeout(function () {
        banner.hidden = true;
      }, 300);
    }

    function saveChoice(value) {
      try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
      } catch (e) {}
      hideBanner();
    }

    if (!choice) showBanner();

    banner
      .querySelector("#cookieAcceptBtn")
      .addEventListener("click", function () {
        saveChoice("aceitos");
      });
    banner
      .querySelector("#cookieRejectBtn")
      .addEventListener("click", function () {
        saveChoice("essenciais");
      });

    document.querySelectorAll("[data-cookie-settings]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        showBanner();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    carregarImoveis();
    const testimonialRefs = renderTestimonials();
    renderFaq();

    setupHeader();
    setupCounters();
    setupTestimonials(testimonialRefs);
    setupFaq();
    setupPropertyModal();
    setupLeadForm();
    setupBackToTop();
    setupFooterYear();
    syncWhatsappLinks();
    setupCookieConsent();
  });
})();
