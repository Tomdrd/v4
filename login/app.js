const firebaseConfig = { 
  apiKey: "AIzaSyDoDuXxhXa58BSfBtJUUItbk7s9YmlBOGo",
  authDomain: "meuprojetosaude-54d64.firebaseapp.com",
  projectId: "meuprojetosaude-54d64",
  storageBucket: "meuprojetosaude-54d64.firebasestorage.app",
  messagingSenderId: "105539186714",
  appId: "1:105539186714:web:c5286a9a3f5b4bc8c161a3",
  measurementId: "G-HF1H65STC1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

window.loginComGoogle = function () {
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return auth.signInWithPopup(provider);
    })
    .then((result) => {
      const user = result.user;
      mostrarInfoUsuario(user);
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
}

// Verifica se o usuário já está logado quando a página carrega
auth.onAuthStateChanged((user) => {
  if (user) {
    mostrarInfoUsuario(user);
  }
});

// Função para exibir informações do usuário
function mostrarInfoUsuario(user) {
  document.getElementById('infoUsuario').innerHTML = `
  <img src="${user.photoURL}" alt="Foto de perfil">
    <p><strong>Bem-vindo:</strong> ${user.displayName}</p>
  `;
}

// Função sair
window.logout = function () {
  auth.signOut()
    .then(() => {
      document.getElementById('infoUsuario').innerHTML = '<p>Você saiu com sucesso.</p>';
    })
    .catch((error) => {
      alert("Erro ao sair: " + error.message);
    });
}

function validarEmail(email) {
  // Expressão regular básica para validar e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

window.loginComEmailESenha = function () {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("E-mail inválido.");
    return;
  }

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => auth.signInWithEmailAndPassword(email, senha))
    .then((result) => {
      mostrarInfoUsuario(result.user);
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
}

window.criarConta = function () {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("E-mail inválido.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, senha)
    .then((result) => {
      alert("Conta criada com sucesso!");
      mostrarInfoUsuario(result.user);
    })
    .catch((error) => {
      alert("Erro ao criar conta: " + error.message);
    });
}
window.redefinirSenha = function () {
  const email = document.getElementById('email').value.trim();

  if (!email) {
    alert("Digite o e-mail para redefinir a senha.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("E-mail de redefinição de senha enviado!");
    })
    .catch((error) => {
      alert("Erro ao enviar e-mail: " + error.message);
    });
}
