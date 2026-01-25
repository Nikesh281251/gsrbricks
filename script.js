
    function sendOrder(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const product = document.getElementById('product').value;
      const quantity = document.getElementById('quantity').value;
      const message = document.getElementById('message').value;

      const text = 'Name: ${name}%0APhone: ${phone}%0AProduct: ${product}%0AQuantity: ${quantity}%0AMessage: ${message}';
      const whatappURL='https://wa.me/919951152909?text=${text}';
      window.open("https://wa.me/919951152909?text=${text}")
      }