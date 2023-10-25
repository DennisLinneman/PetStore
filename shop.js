// Cart
let cartCount = 0;

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
}
function checkAndDisplayGiftCardMessage() {
  let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
  visitCount++;
  localStorage.setItem('visitCount', visitCount.toString());

  if (visitCount >= 3) {

    alert('Congratulations! You\'ve won a $50 gift card!');
    localStorage.setItem('visitCount', '0');
  }
}

checkAndDisplayGiftCardMessage();

// Displays Cards on Home page
document.addEventListener('DOMContentLoaded', function () {
  var shop = [
    {
      title: "Shell",
      image: "./imgs/artistic-frames-hy1FyigzJ8Y-unsplash.jpg",
      price: "$500-1,000",
      description: "Shell is a beautiful and energetic one-year-old Siberian Husky. She's a friendly and outgoing dog who loves to play and explore."
    },
    {
      title: "Bear",
      image: "./imgs/dagmar-klauzova-GYPGWXYDIrE-unsplash.jpg",
      price: "$700-1,300",
      description: "Say hello to this gentle and growing Bernese Mountain Dog pup. At just a few months old, Bear already embodies the breed's loyal nature and loving disposition."
    },
    {
      title: "Sunny",
      image: "./imgs/photo-1604430352727-c0555f882e01.avif",
      price: "$200-800",
      description: "Meet this sweet and energetic baby orange kitten named Sunny. With its vibrant ginger fur and boundless curiosity, Sunny brings warmth and joy to any home."
    },
    {
      title: "Finn",
      image: "./imgs/dominik-kempf-qrQZLUOvEOA-unsplash.jpg",
      price: "$600-1,000",
      description: "Meet Finn. With a unique charm and playful spirit, Finn is a delightful companion. Whether running in the park or lounging at home, Finn's cheerful personality will brighten your days."
    },
    {
      title: "Rae",
      image: "./imgs/finge-holden-TDOM2os-JYs-unsplash.jpg",
      price: "$500-1,000",
      description: "Rae is an Australian Shepherd: A dynamic and intelligent companion with striking merle patterns, Rae's boundless energy and loyalty make him the perfect adventure buddy and a loving addition to any family."
    },
    {
      title: "Bandit",
      image: "./imgs/toan-chu-VEzDhGMlyb8-unsplash.jpg",
      price: "$1,000-2,000",
      description: "This adorable pet raccoon, named Bandit, has a mischievous twinkle in its eyes. With its distinctive black mask and bushy tail, Bandit is both a charming and curious companion."
    },
  ];

  var postHTML = "";

  for (var i = 0; i < shop.length; i++) {
    var card = '<div class="col-md-4 mb-4"><div class="card"><img src="' + shop[i].image + '" class="card-img-top" alt="' + shop[i].title + '"><div class="card-body"><h5 class="card-title">' + shop[i].title + '</h5><p class="card-text">Price: ' + shop[i].price + '</p><p class="card-text">' + shop[i].description + '</p><button class="btn btn-primary">Add to Cart</button></div></div></div>';
    postHTML += card;
  }

  document.getElementById('market').innerHTML = postHTML;
   // Update the cart count display
  const addToCartButtons = document.querySelectorAll('.btn-primary');
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      cartCount++;
      updateCartCount();
    });
  });
});