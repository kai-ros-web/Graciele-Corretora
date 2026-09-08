(function () {
  "use strict";

  const BUCKET = "imoveis-fotos";

  // ---------- Elementos ----------
  const loginScreen = document.getElementById("adminLogin");
  const appScreen = document.getElementById("adminApp");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

  const adminUserEmail = document.getElementById("adminUserEmail");
  const logoutBtn = document.getElementById("logoutBtn");
  const changePasswordBtn = document.getElementById("changePasswordBtn");

  const listView = document.getElementById("adminListView");
  const formView = document.getElementById("adminFormView");
  const adminList = document.getElementById("adminList");
  const adminEmpty = document.getElementById("adminEmpty");
  const adminCount = document.getElementById("adminCount");
  const listMessage = document.getElementById("listMessage");
  const newPropertyBtn = document.getElementById("newPropertyBtn");
  const cancelFormBtn = document.getElementById("cancelFormBtn");

  const propertyForm = document.getElementById("propertyForm");
  const formTitle = document.getElementById("formTitle");
  const formMessage = document.getElementById("formMessage");
  const fTitulo = document.getElementById("fTitulo");
  const fBairro = document.getElementById("fBairro");
  const fTag = document.getElementById("fTag");
  const fPreco = document.getElementById("fPreco");
  const fQuartos = document.getElementById("fQuartos");
  const fBanheiros = document.getElementById("fBanheiros");
  const fArea = document.getElementById("fArea");
  const fDescricao = document.getElementById("fDescricao");
  const fFotos = document.getElementById("fFotos");
  const adminPhotos = document.getElementById("adminPhotos");
  const savePropertyBtn = document.getElementById("savePropertyBtn");
  const deletePropertyBtn = document.getElementById("deletePropertyBtn");

  const passwordModal = document.getElementById("passwordModal");
  const passwordForm = document.getElementById("passwordForm");
  const passwordMessage = document.getElementById("passwordMessage");
  const passwordModalClose = document.getElementById("passwordModalClose");
  const passwordModalTitle = document.getElementById("passwordModalTitle");
  const passwordModalSubtitle = document.getElementById(
    "passwordModalSubtitle",
  );
  const passwordModalCancel = document.getElementById("passwordModalCancel");

  // ---------- Estado ----------
  let properties = [];
  let editingId = null;
  let photoItems = []; // { type: 'existing'|'new', url?, file?, previewUrl? }
  let removedExistingUrls = [];
  let emRecuperacaoSenha = false; // true quando o acesso veio de um link "esqueci minha senha"

  // ---------- Utilidades ----------
  function traduzErro(msg) {
    const mapa = {
      "Invalid login credentials": "E-mail ou senha incorretos.",
      "Email not confirmed": "Este e-mail ainda não foi confirmado.",
      "Email link is invalid or has expired":
        "Este link de redefinição de senha expirou ou já foi usado. Clique em \"Esqueci minha senha\" para receber um novo.",
      "Token has expired or is invalid":
        "Este link de redefinição de senha expirou ou já foi usado. Clique em \"Esqueci minha senha\" para receber um novo.",
    };
    return mapa[msg] || msg;
  }

  function mostrarMensagem(el, texto, tipo) {
    el.textContent = texto || "";
    el.classList.remove("is-error", "is-success");
    if (tipo) el.classList.add(tipo === "erro" ? "is-error" : "is-success");
  }

  function slugifyFileName(name) {
    return name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9.\-]+/g, "-")
      .toLowerCase();
  }

  function extrairCaminhoStorage(url) {
    const marcador = "/" + BUCKET + "/";
    const i = url.indexOf(marcador);
    if (i === -1) return null;
    return url.slice(i + marcador.length);
  }

  // ---------- Sessão / autenticação ----------

  // Se o Supabase redirecionou de volta com um erro (link de recuperação
  // expirado ou já utilizado), ele coloca isso no hash da URL, ex.:
  // #error=access_denied&error_code=otp_expired&error_description=...
  (function verificarErroNaUrl() {
    const hash = window.location.hash ? window.location.hash.slice(1) : "";
    const params = new URLSearchParams(hash || window.location.search);
    const errorDescription = params.get("error_description");
    if (errorDescription) {
      mostrarMensagem(
        loginMessage,
        'Este link de redefinição de senha expirou ou já foi usado. Clique em "Esqueci minha senha" para receber um novo.',
        "erro",
      );
      // limpa a URL para não repetir o erro se a página for recarregada
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname,
      );
    }
  })();

  supabaseClient.auth.onAuthStateChange(function (event, session) {
    if (event === "PASSWORD_RECOVERY" && session && session.user) {
      emRecuperacaoSenha = true;
      mostrarApp(session.user);
      abrirModalDefinirNovaSenha();
      // Remove o código de recuperação da barra de endereço: sem isso,
      // ao recarregar a página o Supabase lê o mesmo código de novo e
      // pede para redefinir a senha outra vez, mesmo depois de já ter
      // sido definida.
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    if (session && session.user) {
      mostrarApp(session.user);
    } else {
      mostrarLogin();
    }
  });

  function mostrarLogin() {
    appScreen.hidden = true;
    loginScreen.hidden = false;
  }

  function mostrarApp(user) {
    loginScreen.hidden = true;
    appScreen.hidden = false;
    adminUserEmail.textContent = user.email || "";
    carregarImoveis();
  }

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    mostrarMensagem(loginMessage, "", null);
    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginSenha").value;

    const submitBtn = loginForm.querySelector("button[type=submit]");
    submitBtn.disabled = true;

    const { error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    submitBtn.disabled = false;

    if (error) {
      mostrarMensagem(loginMessage, traduzErro(error.message), "erro");
    }
  });

  logoutBtn.addEventListener("click", async function () {
    await supabaseClient.auth.signOut();
  });

  forgotPasswordBtn.addEventListener("click", async function () {
    const email = document.getElementById("loginEmail").value.trim();
    if (!email) {
      mostrarMensagem(
        loginMessage,
        "Digite seu e-mail no campo acima e clique novamente.",
        "erro",
      );
      return;
    }
    const urlLimpa = window.location.origin + window.location.pathname;
    const { error } = await supabaseClient.auth.resetPasswordForEmail(
      email,
      { redirectTo: urlLimpa },
    );
    if (error) {
      mostrarMensagem(loginMessage, traduzErro(error.message), "erro");
    } else {
      mostrarMensagem(
        loginMessage,
        "Enviamos um link para redefinir sua senha por e-mail.",
        "sucesso",
      );
    }
  });

  changePasswordBtn.addEventListener("click", function () {
    document.getElementById("newPassword").value = "";
    mostrarMensagem(passwordMessage, "", null);
    passwordModal.hidden = false;
  });

  // Abre o modal em modo obrigatório, usado quando o acesso veio de um
  // link de "esqueci minha senha" — a cliente precisa definir a nova
  // senha antes de mexer em qualquer imóvel.
  function abrirModalDefinirNovaSenha() {
    document.getElementById("newPassword").value = "";
    mostrarMensagem(
      passwordMessage,
      "",
      null,
    );
    passwordModalTitle.textContent = "Defina sua nova senha";
    passwordModalSubtitle.hidden = false;
    passwordModalClose.hidden = true;
    passwordModalCancel.hidden = false;
    passwordModal.hidden = false;
  }

  // Sai do fluxo de recuperação (por cancelamento manual ou por falha) e
  // volta para a tela de login limpa — nunca deixa a pessoa presa no modal.
  async function sairDaRecuperacaoDeSenha(mensagem) {
    emRecuperacaoSenha = false;
    passwordModal.hidden = true;
    passwordModalTitle.textContent = "Trocar senha";
    passwordModalSubtitle.hidden = true;
    passwordModalClose.hidden = false;
    passwordModalCancel.hidden = true;
    await supabaseClient.auth.signOut();
    if (mensagem) mostrarMensagem(loginMessage, mensagem, "erro");
  }

  passwordModalCancel.addEventListener("click", function () {
    sairDaRecuperacaoDeSenha(null);
  });

  passwordForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const novaSenha = document.getElementById("newPassword").value;
    const { error } = await supabaseClient.auth.updateUser({
      password: novaSenha,
    });
    if (error) {
      const semSessao =
        /session/i.test(error.message) || /jwt/i.test(error.message);
      if (semSessao && emRecuperacaoSenha) {
        await sairDaRecuperacaoDeSenha(
          'Este link de redefinição de senha expirou. Clique em "Esqueci minha senha" para receber um novo.',
        );
        return;
      }
      mostrarMensagem(passwordMessage, traduzErro(error.message), "erro");
    } else {
      mostrarMensagem(passwordMessage, "Senha atualizada!", "sucesso");
      emRecuperacaoSenha = false;
      passwordModalTitle.textContent = "Trocar senha";
      passwordModalSubtitle.hidden = true;
      passwordModalClose.hidden = false;
      window.setTimeout(function () {
        passwordModal.hidden = true;
      }, 1200);
    }
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () {
      // Durante a recuperação de senha, obriga a definir a nova senha
      // antes de fechar o modal (sem isso, ela ficava presa sem saber
      // que precisava clicar em "Trocar senha").
      if (emRecuperacaoSenha) return;
      passwordModal.hidden = true;
    });
  });

  // ---------- Carregar / listar imóveis ----------
  async function carregarImoveis() {
    mostrarMensagem(listMessage, "Carregando imóveis...", null);
    const { data, error } = await supabaseClient
      .from("imoveis")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      mostrarMensagem(listMessage, traduzErro(error.message), "erro");
      return;
    }

    properties = data || [];
    mostrarMensagem(listMessage, "", null);
    renderLista();
  }

  function renderLista() {
    adminList.innerHTML = "";
    adminEmpty.hidden = properties.length !== 0;
    adminCount.textContent =
      properties.length === 1
        ? "1 imóvel cadastrado"
        : properties.length + " imóveis cadastrados";

    const fragment = document.createDocumentFragment();

    properties.forEach(function (imovel) {
      const item = document.createElement("article");
      item.className = "admin-list-item";

      const capa = imovel.foto || (imovel.fotos && imovel.fotos[0]);

      item.innerHTML =
        '<div class="admin-list-item__photo">' +
        (capa
          ? '<img src="' +
            capa +
            '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
          : '<i class="fa-solid fa-image" aria-hidden="true"></i>') +
        "</div>" +
        '<div class="admin-list-item__body">' +
        '<span class="admin-badge admin-badge--' +
        (imovel.tag === "Locação" ? "locacao" : "venda") +
        '">' +
        imovel.tag +
        "</span>" +
        '<h3 class="admin-list-item__title">' +
        (imovel.titulo || "") +
        "</h3>" +
        '<p class="admin-list-item__meta">' +
        (imovel.bairro || "") +
        "</p>" +
        '<p class="admin-list-item__preco">' +
        (imovel.preco || "") +
        "</p>" +
        "</div>" +
        '<div class="admin-list-item__actions">' +
        '<button type="button" class="btn btn--outline btn--sm" data-edit="' +
        imovel.id +
        '"><i class="fa-solid fa-pen" aria-hidden="true"></i><span>Editar</span></button>' +
        '<button type="button" class="admin-link admin-link--danger" data-delete="' +
        imovel.id +
        '">Excluir</button>' +
        "</div>";

      fragment.appendChild(item);
    });

    adminList.appendChild(fragment);
  }

  adminList.addEventListener("click", function (e) {
    const editBtn = e.target.closest("[data-edit]");
    if (editBtn) {
      abrirEdicao(editBtn.dataset.edit);
      return;
    }
    const delBtn = e.target.closest("[data-delete]");
    if (delBtn) {
      excluirImovel(delBtn.dataset.delete);
    }
  });

  // ---------- Formulário: abrir / cancelar ----------
  function mostrarListView() {
    formView.hidden = true;
    listView.hidden = false;
  }

  function mostrarFormView() {
    listView.hidden = true;
    formView.hidden = false;
  }

  function limparForm() {
    propertyForm.reset();
    fTag.value = "Venda";
    photoItems = [];
    removedExistingUrls = [];
    renderPhotos();
    mostrarMensagem(formMessage, "", null);
  }

  newPropertyBtn.addEventListener("click", function () {
    editingId = null;
    limparForm();
    formTitle.textContent = "Novo imóvel";
    deletePropertyBtn.hidden = true;
    mostrarFormView();
  });

  cancelFormBtn.addEventListener("click", function () {
    mostrarListView();
  });

  function abrirEdicao(id) {
    const imovel = properties.find(function (p) {
      return p.id === id;
    });
    if (!imovel) return;

    editingId = id;
    limparForm();

    fTitulo.value = imovel.titulo || "";
    fBairro.value = imovel.bairro || "";
    fTag.value = imovel.tag || "Venda";
    fPreco.value = imovel.preco || "";
    fQuartos.value = imovel.quartos != null ? imovel.quartos : "";
    fBanheiros.value = imovel.banheiros != null ? imovel.banheiros : "";
    fArea.value = imovel.area || "";
    fDescricao.value = imovel.descricao || "";

    photoItems = (imovel.fotos || []).map(function (url) {
      return { type: "existing", url: url };
    });
    renderPhotos();

    formTitle.textContent = "Editar imóvel";
    deletePropertyBtn.hidden = false;
    mostrarFormView();
  }

  // ---------- Fotos ----------
  function renderPhotos() {
    adminPhotos.innerHTML = "";
    photoItems.forEach(function (item, index) {
      const src = item.type === "existing" ? item.url : item.previewUrl;
      const fig = document.createElement("figure");
      fig.className = "admin-photo";
      fig.innerHTML =
        '<img src="' +
        src +
        '" alt="" />' +
        (index === 0 ? '<span class="admin-photo__badge">Capa</span>' : "") +
        '<button type="button" class="admin-photo__remove" data-remove-photo="' +
        index +
        '" aria-label="Remover foto"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>';
      adminPhotos.appendChild(fig);
    });
  }

  adminPhotos.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-remove-photo]");
    if (!btn) return;
    const index = Number(btn.dataset.removePhoto);
    const item = photoItems[index];
    if (item.type === "existing") {
      removedExistingUrls.push(item.url);
    } else if (item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
    photoItems.splice(index, 1);
    renderPhotos();
  });

  fFotos.addEventListener("change", function () {
    Array.prototype.forEach.call(fFotos.files, function (file) {
      photoItems.push({
        type: "new",
        file: file,
        previewUrl: URL.createObjectURL(file),
      });
    });
    fFotos.value = "";
    renderPhotos();
  });

  // ---------- Salvar (criar/editar) ----------
  propertyForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    mostrarMensagem(formMessage, "", null);

    const titulo = fTitulo.value.trim();
    const preco = fPreco.value.trim();
    const area = fArea.value.trim();

    if (!titulo || !preco || !area) {
      mostrarMensagem(
        formMessage,
        "Preencha ao menos título, preço e área.",
        "erro",
      );
      return;
    }

    savePropertyBtn.disabled = true;
    savePropertyBtn.querySelector("span").textContent = "Salvando...";

    try {
      const propertyId = editingId || crypto.randomUUID();

      // 1) Envia as fotos novas para o Storage, mantendo a ordem
      const fotosFinal = [];
      for (let i = 0; i < photoItems.length; i++) {
        const item = photoItems[i];
        if (item.type === "existing") {
          fotosFinal.push(item.url);
        } else {
          const caminho =
            propertyId +
            "/" +
            Date.now() +
            "-" +
            slugifyFileName(item.file.name);
          const { error: uploadError } = await supabaseClient.storage
            .from(BUCKET)
            .upload(caminho, item.file, { upsert: false });
          if (uploadError) throw uploadError;
          const { data: publicData } = supabaseClient.storage
            .from(BUCKET)
            .getPublicUrl(caminho);
          fotosFinal.push(publicData.publicUrl);
        }
      }

      const linha = {
        id: propertyId,
        titulo: titulo,
        bairro: fBairro.value.trim() || null,
        tag: fTag.value,
        preco: preco,
        quartos: fQuartos.value === "" ? null : Number(fQuartos.value),
        banheiros: fBanheiros.value === "" ? null : Number(fBanheiros.value),
        area: area,
        foto: fotosFinal[0] || null,
        fotos: fotosFinal,
        descricao: fDescricao.value.trim() || null,
      };

      let saveError;
      if (editingId) {
        const { error } = await supabaseClient
          .from("imoveis")
          .update(linha)
          .eq("id", editingId);
        saveError = error;
      } else {
        const { error } = await supabaseClient.from("imoveis").insert(linha);
        saveError = error;
      }
      if (saveError) throw saveError;

      // 2) Remove do Storage as fotos que foram excluídas na edição
      if (removedExistingUrls.length) {
        const caminhos = removedExistingUrls
          .map(extrairCaminhoStorage)
          .filter(Boolean);
        if (caminhos.length) {
          await supabaseClient.storage.from(BUCKET).remove(caminhos);
        }
      }

      await carregarImoveis();
      mostrarListView();
    } catch (err) {
      mostrarMensagem(
        formMessage,
        traduzErro(err.message || "Não foi possível salvar o imóvel."),
        "erro",
      );
    } finally {
      savePropertyBtn.disabled = false;
      savePropertyBtn.querySelector("span").textContent = "Salvar imóvel";
    }
  });

  // ---------- Excluir ----------
  async function excluirImovel(id) {
    const imovel = properties.find(function (p) {
      return p.id === id;
    });
    const confirmado = window.confirm(
      'Excluir o imóvel "' +
        (imovel ? imovel.titulo : "") +
        '"? Essa ação não pode ser desfeita.',
    );
    if (!confirmado) return;

    mostrarMensagem(listMessage, "Excluindo...", null);

    try {
      const { data: arquivos } = await supabaseClient.storage
        .from(BUCKET)
        .list(id);
      if (arquivos && arquivos.length) {
        const caminhos = arquivos.map(function (f) {
          return id + "/" + f.name;
        });
        await supabaseClient.storage.from(BUCKET).remove(caminhos);
      }

      const { error } = await supabaseClient
        .from("imoveis")
        .delete()
        .eq("id", id);
      if (error) throw error;

      await carregarImoveis();
    } catch (err) {
      mostrarMensagem(
        listMessage,
        traduzErro(err.message || "Não foi possível excluir o imóvel."),
        "erro",
      );
    }
  }

  deletePropertyBtn.addEventListener("click", function () {
    if (editingId) excluirImovel(editingId);
  });
})();