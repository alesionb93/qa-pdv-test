function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === "candidato" && password === "Candidato.22") {
    window.location.href = "carrinho.html";
  } else {
    errorMsg.style.display = "block";
  }
}

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const button = document.getElementById("login-btn");
  const errorMsg = document.getElementById("error-msg");

  // Habilita/desabilita botão
  if (username.trim() !== "" && password.trim() !== "") {
    button.disabled = false;
    button.classList.add("active");
  } else {
    button.disabled = true;
    button.classList.remove("active");
  }

  // Esconde erro ao digitar novamente
  errorMsg.style.display = "none";
}

// 🚀 NOVA FUNÇÃO (ligação com carrinho)
function goToCarrinho() {
  window.location.href = "carrinho.html";
}

let cart = {};

function addProduct(name, price) {
  if (!cart[name]) cart[name] = { qty: 0, price };
  cart[name].qty++;
  updateUI();
}

function updateUI() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');

  cartDiv.innerHTML = '';
  let total = 0;

  Object.keys(cart).forEach(name => {
    const item = cart[name];
    total += item.qty * item.price;

    const badge = document.getElementById('badge-' + name);
    if (badge) {
      badge.style.display = 'flex';
      badge.innerText = item.qty;
    }

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `${name} x${item.qty} <button onclick="removeItem('${name}')">🗑️</button>`;
    cartDiv.appendChild(div);
  });

  totalSpan.innerText = total;
}

function removeItem(name) {
  delete cart[name];
  updateUI();
}

function clearCart() {
  cart = {};
  document.getElementById('cart').innerHTML = '';
  document.getElementById('total').innerText = 0;
  closeCart();
  document.querySelectorAll('.badge').forEach(b => b.style.display = 'none');
}

function toggleCart() {
  const footer = document.getElementById('footer');
  footer.classList.toggle('open');
}

function closeCart() {
  const footer = document.getElementById('footer');
  footer.classList.remove('open');
}

document.getElementById('toggleBtn').addEventListener('click', toggleCart);

function goToPayment() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('payment').classList.add('active');
}
