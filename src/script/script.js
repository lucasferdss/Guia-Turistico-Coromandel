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

    $btn && ($btn.disabled = true);

    setTimeout(() => { 

      alert(`✅ Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}\n\n(Simulação - sem backend conectado)`);

      form.reset();
      
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      $btn && ($btn.disabled = false);
      
      console.log("Contato enviado:", { nome, email, mensagem });
    }, 500);
  }

  form.addEventListener("submit", enviarContato);
})();
