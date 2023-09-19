const database = [
  //red futbolka
  {
    narx: "8$",
    size: 40,
    img: "img\\red.jpg",
    color: "red",
  },

  {
    narx: "12$",
    size: 41,
    img: "img\\red1.jpg",
    color: "red",
  },

  {
    narx: "9$",
    size: 42,
    img: "img\\red2.jpeg",
    color: "red",
  },

  {
    narx: "10$",
    size: 43,
    img: "img\\red3.jpeg",
    color: "red",
  },

  {
    narx: "10$",
    size: 44,
    img: "img\\redd.jpeg",
    color: "red",
  },

  // blue futbolka
  {
    narx: "14$",
    size: 40,
    img: "img\\blue3.jpg",
    color: "blue",
  },

  {
    narx: "10$",
    size: 42,
    img: "img\\blue4.webp",
    color: "blue",
  },

  {
    narx: "9$",
    size: 43,
    img: "img\\blue2.jpg",
    color: "blue",
  },

  //black futbolka
  {
    narx: "13$",
    size: 40,
    img: "img\\black.jpg",
    color: "black",
  },

  {
    narx: "11$",
    size: 41,
    img: "img\\black1.jpg",
    color: "black",
  },

  {
    narx: "10$",
    size: 42,
    img: "img\\black2.jpg",
    color: "black",
  },

  {
    narx: "11$",
    size: 43,
    img: "img\\black5.jpg",
    color: "black",
  },

  {
    narx: "9$",
    size: 44,
    img: "img\\black6.jpg",
    color: "black",
  },

  //green futbolka
  {
    narx: "12$",
    size: 41,
    img: "img\\green.jpg",
    color: "green",
  },

  {
    narx: "11$",
    size: 42,
    img: "img\\green1.jpg",
    color: "green",
  },

  {
    narx: "10$",
    size: 44,
    img: "img\\green2.png",
    color: "green",
  },

  //yellow futbolka
  {
    narx: "13$",
    size: 40,
    img: "img\\yellow.jpg",
    color: "yellow",
  },

  {
    narx: "13$",
    size: 41,
    img: "img\\yellow1.jpg",
    color: "yellow",
  },

  {
    narx: "10$",
    size: 42,
    img: "img\\yellow2.jpg",
    color: "yellow",
  },

  {
    narx: "9$",
    size: 43,
    img: "img\\yellow3.jpg",
    color: "yellow",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector(".shopJson_qiymat");
  const colorCheckboxes = document.querySelectorAll(".color input");
  const sizeCheckboxes = document.querySelectorAll(".size input");
  const cartItemsList = document.querySelector(".cart-items");
  const clearCartButton = document.querySelector(".clear-cart");
  const totalCartPrice = document.querySelector(".total-price");

  const tanlanganMaxsulotlar = []; // Tanlangan maxsulotlarni saqlash uchun bo'sh massiv
  const sepet = []; // Savatni saqlash uchun massiv

  function filterProducts() {
    const tanlanganRanglar = Array.from(colorCheckboxes)
      .filter((input) => input.checked)
      .map((input) => input.name);
    const tanlanganOlchamlar = Array.from(sizeCheckboxes)
      .filter((input) => input.checked)
      .map((input) => input.name);

    const filtrlanganMaxsulotlar = database.filter((product) => {
      const colorMatch = tanlanganRanglar.length === 0;
      tanlanganRanglar.includes(product.color);
      const sizeMatch = tanlanganOlchamlar.length === 0;
      tanlanganOlchamlar.includes(product.size.toString());
      return colorMatch && sizeMatch;
    });

    // Filtrlangan maxsulotlarni tanlanganMaxsulotlar massiviga saqlash
    tanlanganMaxsulotlar.length = 0; // Massivni tozalash
    tanlanganMaxsulotlar.push(...filtrlanganMaxsulotlar);

    tableBody.innerHTML = "";

    tanlanganMaxsulotlar.forEach((product) => {
      tableBody.innerHTML += `
            <tr>
              <td class="katta">
                <img src="${product.img}" alt="${product.color}" />
                <div class="middle">
                  <div class="text">
                  </div>
                </div>
              </td>
    
              <td class="narx">
                <p class="style">O'lcham: ${product.size}</p>
                <h3>${product.narx}</h3>
              </td>
    
              <td class="icons-flex">
                <i class="fa-solid fa-cart-shopping add-to-cart" data-product='${JSON.stringify(
                  product
                )}'></i>
                <i class="fa-solid fa-trash remove-from-cart" data-product='${JSON.stringify(
                  product
                )}'></i>
              </td>
            </tr>`;
    });

    // "Qo'shish" tugmasi bosilganda funksiya qo'shish
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });

    // "Olib tashlash" tugmasi bosilganda funksiya olib tashlash
    const removeFromCartButtons =
      document.querySelectorAll(".remove-from-cart");
    removeFromCartButtons.forEach((button) => {
      button.addEventListener("click", removeCartItem);
    });
  }

  function addToCart(event) {
    const button = event.target;
    const productData = JSON.parse(button.getAttribute("data-product"));

    // Maxsulotni savatga qo'shish
    sepet.push(productData);

    // Savat elementini yaratib ro'yxatga qo'shing
    const cartItem = document.createElement("li");
    cartItem.textContent = `O'lcham: ${productData.size}, Rang: ${productData.color}, Narxi: ${productData.narx}`;
    cartItemsList.appendChild(cartItem);

    // "Remove" tugmasini yaratib ro'yxatga qo'shish
    const removeButton = document.createElement("button");
    removeButton.textContent = "Olib tashlash";
    removeButton.classList.add("remove-cart");
    removeButton.addEventListener("click", () =>
      removeCartItemByProduct(productData)
    );
    cartItem.appendChild(removeButton);

    // Umumiy narxni yangilash
    updateTotalPrice();
  }

  function removeCartItem(event) {
    const button = event.target;
    const productData = JSON.parse(button.getAttribute("data-product"));

    // Maxsulotni savatdan olib tashlash
    const productIndex = sepet.findIndex(
      (item) =>
        item.size === productData.size && item.color === productData.color
    );
    if (productIndex !== -1) {
      sepet.splice(productIndex, 1);

      // Savat ro'yxatini yangilang
      updateCartItemsList();

      // Umumiy narxni yangilash
      updateTotalPrice();
    }
  }

  function removeCartItemByProduct(productData) {
    // Maxsulotni savatdan olib tashlash
    const productIndex = sepet.findIndex(
      (item) =>
        item.size === productData.size && item.color === productData.color
    );
    if (productIndex !== -1) {
      sepet.splice(productIndex, 1);

      // Savat ro'yxatini yangilang
      updateCartItemsList();

      // Umumiy narxni yangilash
      updateTotalPrice();
    }
  }

  function updateCartItemsList() {
    // Savat ro'yxatini yangilang
    cartItemsList.innerHTML = "";
    sepet.forEach((product) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `O'lcham: ${product.size}, Rang: ${product.color}, Narxi: ${product.narx}`;
      cartItemsList.appendChild(cartItem);

      // "Remove" tugmasini yaratib ro'yxatga qo'shish
      const removeButton = document.createElement("button");
      removeButton.textContent = "Olib tashlash";
      removeButton.classList.add("remove-cart");
      removeButton.addEventListener("click", () =>
        removeCartItemByProduct(product)
      );
      cartItem.appendChild(removeButton);
    });
  }

  function updateTotalPrice() {
    let totalPrice = 0;
    for (const product of sepet) {
      const price = parseFloat(product.narx.replace("$", ""));
      totalPrice += price;
    }
    totalCartPrice.textContent = `Umumiy narx: $${totalPrice.toFixed(2)}`;
  }

  function clearCart() {
    // Savatni tozalash
    sepet.length = 0;

    // Savat ro'yxatini yangilang
    updateCartItemsList();

    // Umumiy narxni nol qiling
    updateTotalPrice();
  }

  // "Savatni tozalash" tugmasi bosilganda funksiya "clearCart" ni chaqirish
  clearCartButton.addEventListener("click", clearCart);

  // Ranglar uchun checkboxlar uchun hodisalar
  colorCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });

  // O'lchamlar uchun checkboxlar uchun hodisalar
  sizeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });

  // Sahifani yuklashda birinchi filtrni bajarish
  filterProducts();
});
