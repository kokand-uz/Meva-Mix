"use strict";

/* =========================
   MEVA MIX
========================= */

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvCPFc5pY5aFtROnmN0tCEmhnOzSHvNQwrosTUZd4MeHxJakcFSfZ/exec";


/* =========================
   TILLAR
========================= */

const translations = {

    uz: {
        home: "Bosh sahifa",
        fruits: "Mevalar",
        about: "Biz haqimizda",
        cart: "Savatcha",

        heroSmall: "TABIIY • YANGI • MAZALI",
        heroTitle1: "Har kuni",
        heroTitle2: "yangi meva.",
        heroText: "Meva Mix — eng sara va yangi mevalarni bir joyga jamlagan zamonaviy meva do‘koni.",
        viewFruits: "Mevalarni ko‘rish",

        natural: "Tabiiy mahsulot",
        types: "Meva turi",
        clients: "Mamnun mijoz",
        service: "Xizmat",

        ourFruits: "BIZNING MEVALAR",
        freshTitle: "Eng yangi",
        fruitsTitle: "mevalar.",
        allFruits: "Barchasini ko‘rish →",

        all: "Barchasi",
        tropical: "Tropik",
        berry: "Rezavor",
        classic: "Klassik",

        aboutSmall: "MEVA MIX HAQIDA",
        aboutTitle1: "Meva tanlash",
        aboutTitle2: "endi oson.",
        aboutText: "Biz har kuni eng sifatli va yangi mevalarni tanlab, sizga yetkazishga harakat qilamiz.",

        fresh: "Yangi mevalar",
        naturalProduct: "Tabiiy mahsulot",
        fast: "Tez xizmat",
        quality: "Sifat kafolati",

        emptyCart: "Savatcha bo‘sh",
        chooseFruit: "Mevalardan birortasini tanlang 🍎",
        total: "Jami:",
        order: "Buyurtma berish",

        footerText: "Har kuni yangi meva, har kuni yaxshi kayfiyat! ❤️",
        rights: "Barcha huquqlar himoyalangan."
    },

    ru: {
        home: "Главная",
        fruits: "Фрукты",
        about: "О нас",
        cart: "Корзина",

        heroSmall: "НАТУРАЛЬНО • СВЕЖО • ВКУСНО",
        heroTitle1: "Каждый день",
        heroTitle2: "свежие фрукты.",
        heroText: "Meva Mix — современный магазин, где собраны самые свежие и качественные фрукты.",
        viewFruits: "Посмотреть фрукты",

        natural: "Натуральные продукты",
        types: "Видов фруктов",
        clients: "Довольных клиентов",
        service: "Сервис",

        ourFruits: "НАШИ ФРУКТЫ",
        freshTitle: "Самые свежие",
        fruitsTitle: "фрукты.",
        allFruits: "Посмотреть все →",

        all: "Все",
        tropical: "Тропические",
        berry: "Ягодные",
        classic: "Классические",

        aboutSmall: "О MEVA MIX",
        aboutTitle1: "Выбирать фрукты",
        aboutTitle2: "теперь легко.",
        aboutText: "Каждый день мы выбираем качественные и свежие фрукты для вас.",

        fresh: "Свежие фрукты",
        naturalProduct: "Натуральные продукты",
        fast: "Быстрый сервис",
        quality: "Гарантия качества",

        emptyCart: "Корзина пуста",
        chooseFruit: "Выберите любой фрукт 🍎",
        total: "Итого:",
        order: "Оформить заказ",

        footerText: "Свежие фрукты каждый день! ❤️",
        rights: "Все права защищены."
    },

    en: {
        home: "Home",
        fruits: "Fruits",
        about: "About us",
        cart: "Cart",

        heroSmall: "NATURAL • FRESH • TASTY",
        heroTitle1: "Every day",
        heroTitle2: "fresh fruit.",
        heroText: "Meva Mix is a modern fruit shop with the freshest and highest-quality fruits.",
        viewFruits: "View fruits",

        natural: "Natural products",
        types: "Fruit types",
        clients: "Happy customers",
        service: "Service",

        ourFruits: "OUR FRUITS",
        freshTitle: "The freshest",
        fruitsTitle: "fruits.",
        allFruits: "View all →",

        all: "All",
        tropical: "Tropical",
        berry: "Berries",
        classic: "Classic",

        aboutSmall: "ABOUT MEVA MIX",
        aboutTitle1: "Choosing fruit",
        aboutTitle2: "is now easy.",
        aboutText: "Every day we select high-quality and fresh fruits for you.",

        fresh: "Fresh fruits",
        naturalProduct: "Natural products",
        fast: "Fast service",
        quality: "Quality guarantee",

        emptyCart: "Cart is empty",
        chooseFruit: "Choose a fruit 🍎",
        total: "Total:",
        order: "Place order",

        footerText: "Fresh fruit every day! ❤️",
        rights: "All rights reserved."
    }
};


let currentLanguage =
    localStorage.getItem("mevaMixLanguage") || null;

let currentTheme =
    localStorage.getItem("mevaMixTheme") || null;


/* =========================
   MEVALAR
========================= */

const fruits = {

    "Tarvuz": {
        price: 5000,
        category: "klassik",
        emoji: "🍉",
        image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=700&q=80"
    },

    "Qovun": {
        price: 8000,
        category: "klassik",
        emoji: "🍈",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80"
    },

    "Mango": {
        price: 20000,
        category: "tropik",
        emoji: "🥭",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80"
    },

    "Dragon Fruit": {
        price: 25000,
        category: "tropik",
        emoji: "🐉",
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=700&q=80"
    },

    "Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1629828874514-2d4e8e4e8c0b?auto=format&fit=crop&w=700&q=80"
    },

    "Junli Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1609825480373-1c9c2b0a0b6b?auto=format&fit=crop&w=700&q=80"
    },

    "Oq Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1629828874514-2d4e8e4e8c0b?auto=format&fit=crop&w=700&q=80"
    },

    "Anjir Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1609825480373-1c9c2b0a0b6b?auto=format&fit=crop&w=700&q=80"
    },

    "Uzum": {
        price: 30000,
        category: "rezavor",
        emoji: "🍇",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=700&q=80"
    },

    "Apelsin": {
        price: 30000,
        category: "klassik",
        emoji: "🍊",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=700&q=80"
    },

    "Yashil olma": {
        price: 25000,
        category: "klassik",
        emoji: "🍏",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80"
    },

    "Banan": {
        price: 20000,
        category: "tropik",
        emoji: "🍌",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80"
    },

    "Anjir": {
        price: 25000,
        category: "klassik",
        emoji: "🫐",
        image: "https://images.unsplash.com/photo-1601379760883-1bb497c558b0?auto=format&fit=crop&w=700&q=80"
    },

    "Nok": {
        price: 40000,
        category: "klassik",
        emoji: "🍐",
        image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=700&q=80"
    },

    "Qulupnay": {
        price: 100000,
        category: "rezavor",
        emoji: "🍓",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80"
    },

    "Ananas": {
        price: 50000,
        category: "tropik",
        emoji: "🍍",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80"
    },

    "Laym": {
        price: 100000,
        category: "tropik",
        emoji: "🍋",
        image: "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=700&q=80"
    },

    "Limon": {
        price: 50000,
        category: "klassik",
        emoji: "🍋",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=700&q=80"
    },

    "Golubika": {
        price: 40000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=700&q=80"
    },

    "Kiwi": {
        price: 70000,
        category: "tropik",
        emoji: "🥝",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=700&q=80"
    },

    "Ejevika": {
        price: 70000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://images.unsplash.com/photo-1522109691629-7d6d9d4f8b98?auto=format&fit=crop&w=700&q=80"
    },

    "Malina": {
        price: 100000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://images.unsplash.com/photo-1577069861033-55d7da4dcfa2?auto=format&fit=crop&w=700&q=80"
    },

    "Mandarin": {
        price: 40000,
        category: "klassik",
        emoji: "🍊",
        image: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?auto=format&fit=crop&w=700&q=80"
    },

    "Kokos": {
        price: 50000,
        category: "tropik",
        emoji: "🥥",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"
    },

    "Avokado": {
        price: 30000,
        category: "tropik",
        emoji: "🥑",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=80"
    },

    "Olxo‘ri": {
        price: 10000,
        category: "klassik",
        emoji: "🟣",
        image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=700&q=80"
    }
};


/* =========================
   SAVATCHA
========================= */

let cart =
    JSON.parse(localStorage.getItem("mevaMixCart")) || [];


/* =========================
   TIL
========================= */

function chooseLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "mevaMixLanguage",
        language
    );

    document
        .getElementById("languageStep")
        .classList.add("hidden");

    document
        .getElementById("themeStep")
        .classList.remove("hidden");

    updateThemeTexts();
}


function updateThemeTexts() {

    if (!currentLanguage) return;

    const text = translations[currentLanguage];

    const title = {
        uz: "Rejimni tanlang",
        ru: "Выберите режим",
        en: "Choose a theme"
    };

    const desc = {
        uz: "Sayt ko‘rinishini tanlang",
        ru: "Выберите внешний вид сайта",
        en: "Choose how the website looks"
    };

    document.getElementById("themeTitle").textContent =
        title[currentLanguage];

    document.getElementById("themeDescription").textContent =
        desc[currentLanguage];

    document.getElementById("lightText").textContent =
        currentLanguage === "uz"
            ? "Oq rejim"
            : currentLanguage === "ru"
                ? "Светлая тема"
                : "Light mode";

    document.getElementById("darkText").textContent =
        currentLanguage === "uz"
            ? "Qorong‘i rejim"
            : currentLanguage === "ru"
                ? "Тёмная тема"
                : "Dark mode";
}


/* =========================
   REJIM
========================= */

function chooseTheme(theme) {

    currentTheme = theme;

    localStorage.setItem(
        "mevaMixTheme",
        theme
    );

    applyTheme();
    applyLanguage();

    document
        .getElementById("setupOverlay")
        .style.display = "none";

    renderFruits();
    updateCart();
}


function applyTheme() {

    document.body.classList.toggle(
        "dark",
        currentTheme === "dark"
    );
}


/* =========================
   TARJIMA
========================= */

function applyLanguage() {

    const language =
        translations[currentLanguage] || translations.uz;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (language[key]) {
            element.textContent = language[key];
        }

    });

    const search =
        document.getElementById("searchInput");

    if (search) {

        search.placeholder =
            currentLanguage === "ru"
                ? "🔍 Найти фрукт..."
                : currentLanguage === "en"
                    ? "🔍 Search fruit..."
                    : "🔍 Meva qidiring...";
    }
}


/* =========================
   SOZLAMALARNI QAYTA OCHISH
========================= */

function resetSetup() {

    localStorage.removeItem("mevaMixLanguage");
    localStorage.removeItem("mevaMixTheme");

    currentLanguage = null;
    currentTheme = null;

    document.body.classList.remove("dark");

    document
        .getElementById("setupOverlay")
        .style.display = "flex";

    document
        .getElementById("languageStep")
        .classList.remove("hidden");

    document
        .getElementById("themeStep")
        .classList.add("hidden");
}


/* =========================
   MEVALARNI CHIQARISH
========================= */

let currentCategory = "all";

function renderFruits(list = Object.keys(fruits)) {

    const grid =
        document.getElementById("fruitGrid");

    if (!grid) return;

    grid.innerHTML = "";

    list.forEach(name => {

        const fruit = fruits[name];

        const card =
            document.createElement("div");

        card.className = "fruit-card";

        card.innerHTML = `
            <img
                class="fruit-image"
                src="${fruit.image}"
                alt="${name}"
                onerror="this.style.display='none';"
            >

            <div class="fruit-info">

                <h3>
                    ${fruit.emoji} ${name}
                </h3>

                <div class="fruit-price">
                    ${formatMoney(fruit.price)} so‘m
                </div>

                <button
                    class="add-button"
                    onclick="addToCart('${name}')">
                    + ${currentLanguage === "ru"
                        ? "Добавить"
                        : currentLanguage === "en"
                            ? "Add to cart"
                            : "Savatchaga qo‘shish"}
                </button>

            </div>
        `;

        grid.appendChild(card);
    });
}


/* =========================
   PUL FORMAT
========================= */

function formatMoney(number) {

    return new Intl.NumberFormat("uz-UZ")
        .format(number);
}


/* =========================
   SAVATCHAGA QO‘SHISH
========================= */

function addToCart(name) {

    const existing =
        cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {

        cart.push({
            name,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    toggleCart(true);
}


/* =========================
   SAVATCHA
========================= */

function saveCart() {

    localStorage.setItem(
        "mevaMixCart",
        JSON.stringify(cart)
    );
}


function updateCart() {

    const container =
        document.getElementById("cartItems");

    const count =
        document.getElementById("cartCount");

    const total =
        document.getElementById("cartTotal");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <h3>
                    ${translations[currentLanguage]?.emptyCart || "Savatcha bo‘sh"}
                </h3>
                <p>
                    ${translations[currentLanguage]?.chooseFruit || "Mevalardan birortasini tanlang 🍎"}
                </p>
            </div>
        `;

        count.textContent = "0";
        total.textContent = "0 so‘m";

        return;
    }


    let totalPrice = 0;
    let totalCount = 0;

    container.innerHTML = "";


    cart.forEach(item => {

        const fruit =
            fruits[item.name];

        if (!fruit) return;

        const itemTotal =
            fruit.price * item.quantity;

        totalPrice += itemTotal;
        totalCount += item.quantity;


        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <img src="${fruit.image}" alt="${item.name}">

            <div>

                <h4>
                    ${fruit.emoji} ${item.name}
                </h4>

                <div class="cart-item-price">
                    ${formatMoney(itemTotal)} so‘m
                </div>

                <div class="qty">

                    <button onclick="changeQuantity('${item.name}', -1)">
                        −
                    </button>

                    <strong>${item.quantity}</strong>

                    <button onclick="changeQuantity('${item.name}', 1)">
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove"
                onclick="removeFromCart('${item.name}')">
                ✕
            </button>

        `;

        container.appendChild(div);

    });


    count.textContent = totalCount;

    total.textContent =
        `${formatMoney(totalPrice)} so‘m`;
}


function changeQuantity(name, change) {

    const item =
        cart.find(item => item.name === name);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.name !== name);

    }

    saveCart();
    updateCart();
}


function removeFromCart(name) {

    cart =
        cart.filter(item => item.name !== name);

    saveCart();
    updateCart();
}


/* =========================
   CART OCHISH
========================= */

function toggleCart(force) {

    const panel =
        document.getElementById("cartPanel");

    const isOpen =
        panel.classList.contains("open");

    if (force === true || !isOpen) {

        panel.classList.add("open");
        document.body.classList.add("cart-open");

    } else {

        panel.classList.remove("open");
        document.body.classList.remove("cart-open");

    }
}


/* =========================
   QIDIRUV
========================= */

function searchFruits() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.toLowerCase().trim();

    const result =
        Object.keys(fruits).filter(name => {

            const matchesName =
                name.toLowerCase().includes(query);

            const matchesCategory =
                currentCategory === "all" ||
                fruits[name].category === currentCategory;

            return matchesName && matchesCategory;

        });

    renderFruits(result);
}


/* =========================
   CATEGORY
========================= */

function filterFruits(category, button) {

    currentCategory = category;

    document
        .querySelectorAll(".category")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    searchFruits();
}


/* =========================
   SHOW FRUITS
========================= */

function showFruits() {

    document
        .getElementById("mevalar")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   BUYURTMA
========================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            currentLanguage === "ru"
                ? "Корзина пуста!"
                : currentLanguage === "en"
                    ? "Your cart is empty!"
                    : "Savatcha bo‘sh!"
        );

        return;
    }


    let products = [];

    let total = 0;


    cart.forEach(item => {

        const fruit =
            fruits[item.name];

        const itemTotal =
            fruit.price * item.quantity;

        total += itemTotal;

        products.push({
            name: item.name,
            quantity: item.quantity,
            price: fruit.price,
            total: itemTotal
        });

    });


    const name =
        prompt(
            currentLanguage === "ru"
                ? "Ваше имя:"
                : currentLanguage === "en"
                    ? "Your name:"
                    : "Ismingiz:"
        );

    if (!name) return;


    const phone =
        prompt(
            currentLanguage === "ru"
                ? "Номер телефона:"
                : currentLanguage === "en"
                    ? "Phone number:"
                    : "Telefon raqamingiz:"
        );

    if (!phone) return;


    const address =
        prompt(
            currentLanguage === "ru"
                ? "Адрес доставки:"
                : currentLanguage === "en"
                    ? "Delivery address:"
                    : "Yetkazib berish manzili:"
        );

    if (!address) return;


    const orderData = {

        name,
        phone,
        address,

        products,

        subtotal: total,
        discount: 0,
        total,

        promoCode: ""
    };


    fetch(GOOGLE_SCRIPT_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(orderData)

    })
    .then(() => {

        alert(
            currentLanguage === "ru"
                ? "Заказ отправлен! 🎉"
                : currentLanguage === "en"
                    ? "Order sent! 🎉"
                    : "Buyurtma yuborildi! 🎉"
        );

        cart = [];

        saveCart();
        updateCart();

        toggleCart();

    })
    .catch(() => {

        alert(
            currentLanguage === "ru"
                ? "Ошибка при отправке заказа."
                : currentLanguage === "en"
                    ? "Error sending order."
                    : "Buyurtmani yuborishda xatolik."
        );

    });
}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    currentLanguage =
        localStorage.getItem("mevaMixLanguage");

    currentTheme =
        localStorage.getItem("mevaMixTheme");


    /*
       AGAR TIL VA REJIM OLDINDAN TANLANGAN BO‘LSA
       SAYT TO‘G‘RIDAN-TO‘G‘RI OCHILADI
    */

    if (currentLanguage && currentTheme) {

        applyTheme();
        applyLanguage();

        document
            .getElementById("setupOverlay")
            .style.display = "none";

    }

    /*
       FAQAT TIL TANLANGAN BO‘LSA
       REJIM OYNASI OCHILADI
    */

    else if (currentLanguage && !currentTheme) {

        document
            .getElementById("languageStep")
            .classList.add("hidden");

        document
            .getElementById("themeStep")
            .classList.remove("hidden");

        updateThemeTexts();

    }

    /*
       HECH NARSA TANLANMAGAN BO‘LSA
       TIL OYNASI OCHILADI
    */

    else {

        document
            .getElementById("setupOverlay")
            .style.display = "flex";

    }


    renderFruits();
    updateCart();

});
