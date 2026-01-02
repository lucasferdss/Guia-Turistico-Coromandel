(function () {

  const form =
    document.getElementById("contactForm") ||
    document.querySelector("form");

  if (!form) {
    console.warn("[contato] Formulário não encontrado.");
    return;
  }

  const $nome =
    document.getElementById("nome") ||
    form.querySelector('[name="nome"]');
  const $email =
    document.getElementById("email") ||
    form.querySelector('[name="email"]');
  const $mensagem =
    document.getElementById("mensagem") ||
    form.querySelector('[name="mensagem"]');

  const $btn = form.querySelector('button[type="submit"]');

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function enviarContato(e) {
    e.preventDefault();

    const nome = ($nome?.value || "").trim();
    const email = ($email?.value || "").trim();
    const mensagem = ($mensagem?.value || "").trim();

    if (!nome || !email || !mensagem) {
      alert("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("E-mail inválido.");
      $email?.focus();
      return;
    }

    // Desabilita o botão temporariamente
    $btn && ($btn.disabled = true);

    // Simula um pequeno delay de envio
    setTimeout(() => {
      // Exibe mensagem de sucesso
      alert(`✅ Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}\n\n(Simulação - sem backend conectado)`);
      
      // Limpa o formulário
      form.reset();
      
      // Volta ao topo da página
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Reabilita o botão
      $btn && ($btn.disabled = false);
      
      console.log("Contato enviado:", { nome, email, mensagem });
    }, 500);
  }

  form.addEventListener("submit", enviarContato);
})();
