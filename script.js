"use strict";

/* =========================================================
🍓 MEVA MIX — SCRIPT.JS
========================================================= */

const LANGUAGE_KEY = "mevaMixLanguage";
const THEME_KEY = "mevaMixTheme";
const CART_KEY = "mevaMixCart";

/* =========================================================
🌐 TILLAR
========================================================= */

const translations = {

    uz: {
        home: "Bosh sahifa",
        fruits: "Mevalar",
        about: "Biz haqimizda",
        cart: "Savatcha",

        heroSmall: "TABIIY • YANGI • MAZALI",
        heroTitle1: "Har kuni",
        heroTitle2: "yangi meva.",
        heroText:
            "Meva Mix — eng sara va yangi mevalarni bir joyga jamlagan zamonaviy meva do‘koni. Mazali, tabiiy va sifatli mevalar siz uchun.",

        viewFruits: "Mevalarni ko‘rish",
        natural: "Tabiiy mahsulot",
        types: "Meva turi",
        clients: "Mamnun mijoz",
        service: "Xizmat",

        ourFruits: "BIZNING MEVALAR",
        freshTitle: "Eng yangi",
        fruitsTitle: "mevalar.",
        allFruits: "Barchasini ko‘rish →",

        search: "🔍 Meva qidiring...",
        all: "Barchasi",
        tropical: "Tropik",
        berry: "Rezavor",
        classic: "Klassik",

        aboutSmall: "MEVA MIX HAQIDA",
        aboutTitle1: "Meva tanlash",
        aboutTitle2: "endi oson.",
        aboutText:
            "Biz har kuni eng sifatli va yangi mevalarni tanlab, sizga yetkazishga harakat qilamiz.",

        fresh: "Yangi mevalar",
        naturalProduct: "Tabiiy mahsulot",
        fast: "Tez xizmat",
        quality: "Sifat kafolati",

        emptyCart: "Savatcha bo‘sh",
        chooseFruit: "Sevimli mevalaringizni tanlang 🍓",
        total: "Jami:",
        order: "Buyurtma berish",

        add: "Savatchaga",
        themeTitle: "Rejimni tanlang",
        themeDescription: "Sayt ko‘rinishini tanlang",
        light: "Oq rejim",
        dark: "Qorong‘i rejim"
    },

    ru: {
        home: "Главная",
        fruits: "Фрукты",
        about: "О нас",
        cart: "Корзина",

        heroSmall: "НАТУРАЛЬНЫЕ • СВЕЖИЕ • ВКУСНЫЕ",
        heroTitle1: "Каждый день",
        heroTitle2: "свежие фрукты.",
        heroText:
            "Meva Mix — современный фруктовый магазин со свежими и качественными фруктами.",

        viewFruits: "Посмотреть фрукты",
        natural: "Натуральный продукт",
        types: "Видов фруктов",
        clients: "Довольных клиентов",
        service: "Сервис",

        ourFruits: "НАШИ ФРУКТЫ",
        freshTitle: "Самые свежие",
        fruitsTitle: "фрукты.",
        allFruits: "Посмотреть все →",

        search: "🔍 Найти фрукт...",
        all: "Все",
        tropical: "Тропические",
        berry: "Ягодные",
        classic: "Классические",

        aboutSmall: "О MEVA MIX",
        aboutTitle1: "Выбирать фрукты",
        aboutTitle2: "теперь легко.",
        aboutText:
            "Каждый день мы выбираем самые качественные и свежие фрукты для вас.",

        fresh: "Свежие фрукты",
        naturalProduct: "Натуральные продукты",
        fast: "Быстрый сервис",
        quality: "Гарантия качества",

        emptyCart: "Корзина пуста",
        chooseFruit: "Выберите любимые фрукты 🍓",
        total: "Итого:",
        order: "Оформить заказ",

        add: "В корзину",
        themeTitle: "Выберите режим",
        themeDescription: "Выберите внешний вид сайта",
        light: "Светлый режим",
        dark: "Тёмный режим"
    },

    en: {
        home: "Home",
        fruits: "Fruits",
        about: "About us",
        cart: "Cart",

        heroSmall: "NATURAL • FRESH • DELICIOUS",
        heroTitle1: "Fresh",
        heroTitle2: "every day.",
        heroText:
            "Meva Mix is a modern fruit store with fresh, delicious and high-quality fruits.",

        viewFruits: "View fruits",
        natural: "Natural product",
        types: "Fruit types",
        clients: "Happy clients",
        service: "Service",

        ourFruits: "OUR FRUITS",
        freshTitle: "The freshest",
        fruitsTitle: "fruits.",
        allFruits: "View all →",

        search: "🔍 Search fruit...",
        all: "All",
        tropical: "Tropical",
        berry: "Berries",
        classic: "Classic",

        aboutSmall: "ABOUT MEVA MIX",
        aboutTitle1: "Choosing fruit",
        aboutTitle2: "is now easy.",
        aboutText:
            "Every day we choose fresh and high-quality fruits for you.",

        fresh: "Fresh fruits",
        naturalProduct: "Natural products",
        fast: "Fast service",
        quality: "Quality guarantee",

        emptyCart: "Your cart is empty",
        chooseFruit: "Choose your favorite fruits 🍓",
        total: "Total:",
        order: "Place order",

        add: "Add to cart",
        themeTitle: "Choose a mode",
        themeDescription: "Choose the website appearance",
        light: "Light mode",
        dark: "Dark mode"
    }
};


/* =========================================================
🍎 MEVALAR
⚠️ RASM LINKLARI SEN TASHLAGAN JS'DAN OLINDI
========================================================= */

const fruits = {

    "Tarvuz": {
        price: 5000,
        category: "klassik",
        emoji: "🍉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRMWXWApMZsUKyXRouCHBDaEeL-0 ndziBktOrifCL4Q&s=10"
    },

    "Qovun": {
        price: 8000,
        category: "klassik",
        emoji: "🍈",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7iA8wpKFdV_QnszJMcnXCzTtl30_lHP7JfFnlk0zBw&s=10"
    },

    "Mango": {
        price: 20000,
        category: "tropik",
        emoji: "🥭",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT2qz47DyLPskoSqjP4e25XaTOFrR0T_2arr0RGE6EA&s=10"
    },

    "Dragon Fruit": {
        price: 25000,
        category: "tropik",
        emoji: "🐉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYz0JuWmpTrCb5LJp-ulVr31CFn54fgg7hPDYyS0cPw&s=10"
    },

    "Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-VJcD3chazgyn7NApZGdFdk8sOqrYPMQ0duWALqTcg&s=10"
    },

    "Junli Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeUHOZ9Z_YNFTc7CyNjpcHcba-tfMgUYKX2eSiHjITw&s=10"
    },

    "Oq Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpAeg6r5co7Jc1SXfcfBffdLzQhTBBas5lGXtinAlMQ&s=10"
    },

    "Anjir Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDl9toWP_njEz2POLSjr_D_-nDxID5H5paOVgAt571A&s=10"
    },

    "Uzum": {
        price: 30000,
        category: "rezavor",
        emoji: "🍇",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWNKYijTYRxxCK421l1QE6xsoXEgTwd9SszRLMqP5HA&s=10"
    },

    "Apelsin": {
        price: 30000,
        category: "klassik",
        emoji: "🍊",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8PQI3eO88oJ2tnXRlejfErlfM9ID-u4TTj0eQj4wWQ&s=10"
    },

    "Yashil olma": {
        price: 25000,
        category: "klassik",
        emoji: "🍏",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJOyD_k-I3WS4ofSU22VvnHlxya1xK_S_dRcS7H6bFQ&s=10"
    },

    "Banan": {
        price: 20000,
        category: "tropik",
        emoji: "🍌",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEU6-yDO5bpkMXwBttnGBdcSlvMlcVzzJf4emP2xfZw&s=10"
    },

    "Anjir": {
        price: 25000,
        category: "klassik",
        emoji: "🫒",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm54Msm8hHbJXvg2YmK_l6xtfOgF0oanc96Izb3O28fw&s=10"
    },

    "Nok": {
        price: 40000,
        category: "klassik",
        emoji: "🍐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZSuAyqeB8hE6cTdW-XX_mI6eDeOSDrUpuvTLK316UA&s=10"
    },

    "Qulupnay": {
        price: 100000,
        category: "rezavor",
        emoji: "🍓",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxsVa8KMfARxzv8qqHpjHqq9dlsNH0HT6Q89wygSbQg&s=10"
    },

    "Ananas": {
        price: 50000,
        category: "tropik",
        emoji: "🍍",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhRM2lYGQDQvaGK_sWcTWcti_xhVagAbVpXb76qVJig&s=10"
    },

    "Laym": {
        price: 100000,
        category: "tropik",
        emoji: "🍋",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysSQz8kOMviK-TWQOVnsYvFr1aCamfzVTnldI8J7Uhv0LA4wEqHnZFJWZ&s=10"
    },

    "Limon": {
        price: 50000,
        category: "klassik",
        emoji: "🍋",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgtHP6nLidikj3DAFL2YXWAdphpsGA02gdXA3U5_fHg&s=10"
    },

    "Golubika": {
        price: 40000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0k0gBaom4UfNF2aujKMl7P2CD37c9qZgHp09CN4Ydw&s=10"
    },

    "Kiwi": {
        price: 70000,
        category: "tropik",
        emoji: "🥝",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGcJ39EHXdiOhd0HhA8DYn1OTCKo3T2vYApxb-Tv4Lw&s=10"
    },

    "Ejevika": {
        price: 70000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSZVyW2akikaVUKK58JUtJuJDlWMbzpvvep-q588UtxWL-ZH4oDbfBIU&s=10"
    },

    "Malina": {
        price: 100000,
        category: "rezavor",
        emoji: "🍓",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/5/51/756590951624515.jpeg"
    },

    "Mandarin": {
        price: 40000,
        category: "klassik",
        emoji: "🍊",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScigdaR_6LTGi0cmBFBtviUgxrbLxFPnnjSpUuw8k6UQ&s=10"
    },

    "Kokos": {
        price: 50000,
        category: "tropik",
        emoji: "🥥",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpzdbVzEUXtIQCrcNLvetAO4lww8V9dP_L-NGrl4emQ&s=10"
    },

    "Avokado": {
        price: 30000,
        category: "tropik",
        emoji: "🥑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIb2Wt6jhFCASPdiAqjpdRxuxf4w09QVKuNes_PVLNA&s"
    },

    "Olxo‘ri": {
        price: 10000,
        category: "klassik",
        emoji: "🟣",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHcv7ESh2ODUzpUx_rrGMd6iGxFwvmqVjagQmXdu_Ag&s=10"
    }
};


/* =========================================================
🛒 SAVAT
========================================================= */

let cart = [];

try {
    cart =
        JSON.parse(
            localStorage.getItem(CART_KEY)
        ) || [];
} catch {
    cart = [];
}


/* =========================================================
🌐 TIL TANLASH
========================================================= */

function chooseLanguage(lang) {

    if (!translations[lang]) return;

    localStorage.setItem(
        LANGUAGE_KEY,
        lang
    );

    const languageStep =
        document.getElementById(
            "languageStep"
        );

    const themeStep =
        document.getElementById(
            "themeStep"
        );

    if (languageStep) {
        languageStep.classList.add(
            "hidden"
        );
    }

    if (themeStep) {
        themeStep.classList.remove(
            "hidden"
        );
    }

    updateThemeTexts();
}


/* =========================================================
☀️🌙 REJIM TANLASH
========================================================= */

function chooseTheme(theme) {

    if (
        theme !== "light" &&
        theme !== "dark"
    ) return;

    localStorage.setItem(
        THEME_KEY,
        theme
    );

    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );

    applyLanguage();

    const overlay =
        document.getElementById(
            "setupOverlay"
        );

    if (overlay) {
        overlay.style.display = "none";
    }

    renderFruits();
    updateCart();
}


/* =========================================================
🎨 TEMA
========================================================= */

function applyTheme() {

    const theme =
        localStorage.getItem(
            THEME_KEY
        );

    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );

}


/* =========================================================
📝 TEMA MATNLARI
========================================================= */

function updateThemeTexts() {

    const lang =
        localStorage.getItem(
            LANGUAGE_KEY
        ) || "uz";

    const text =
        translations[lang];

    const title =
        document.getElementById(
            "themeTitle"
        );

    const description =
        document.getElementById(
            "themeDescription"
        );

    const lightText =
        document.getElementById(
            "lightText"
        );

    const darkText =
        document.getElementById(
            "darkText"
        );

    if (title) {
        title.textContent =
            text.themeTitle;
    }

    if (description) {
        description.textContent =
            text.themeDescription;
    }

    if (lightText) {
        lightText.textContent =
            text.light;
    }

    if (darkText) {
        darkText.textContent =
            text.dark;
    }

}


/* =========================================================
🌐 SAYT TILI
========================================================= */

function applyLanguage() {

    const lang =
        localStorage.getItem(
            LANGUAGE_KEY
        ) || "uz";

    const text =
        translations[lang];

    document.documentElement.lang =
        lang;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (text[key]) {

                element.textContent =
                    text[key];

            }

        });

    const search =
        document.getElementById(
            "searchInput"
        );

    if (search) {

        search.placeholder =
            text.search;

    }

    updateThemeTexts();

}


/* =========================================================
⚙️ SOZLAMALARNI QAYTA TANLASH
========================================================= */

function resetSetup() {

    localStorage.removeItem(
        LANGUAGE_KEY
    );

    localStorage.removeItem(
        THEME_KEY
    );

    const overlay =
        document.getElementById(
            "setupOverlay"
        );

    const languageStep =
        document.getElementById(
            "languageStep"
        );

    const themeStep =
        document.getElementById(
            "themeStep"
        );

    document.body.classList.remove(
        "dark"
    );

    if (overlay) {

        overlay.style.display =
            "flex";

    }

    if (languageStep) {

        languageStep.classList.remove(
            "hidden"
        );

    }

    if (themeStep) {

        themeStep.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
🍓 MEVALARNI CHIQARISH
========================================================= */

function renderFruits() {

    const grid =
        document.getElementById(
            "fruitGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(fruits).forEach(
        function ([name, fruit]) {

            let categoryName =
                "KLASSIK";

            if (
                fruit.category ===
                "tropik"
            ) {

                categoryName =
                    "TROPIK";

            }

            if (
                fruit.category ===
                "rezavor"
            ) {

                categoryName =
                    "REZAVOR";

            }

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "fruit-item";

            card.dataset.name =
                name;

            card.dataset.category =
                fruit.category;

            card.innerHTML = `

                <div class="fruit-image">

                    <img
                        src="${fruit.image}"
                        alt="${name}"
                        loading="lazy"
                    >

                    <div class="fruit-image-badge">
                        ${fruit.emoji}
                    </div>

                </div>

                <div class="fruit-info">

                    <span class="fruit-tag">
                        ${categoryName}
                    </span>

                    <h3>
                        ${name}
                        <span>
                            ${fruit.emoji}
                        </span>
                    </h3>

                    <p>
                        Yangi, sifatli va mazali
                        ${name.toLowerCase()}.
                    </p>

                    <div class="fruit-bottom">

                        <strong>
                            ${formatPrice(
                                fruit.price
                            )} so'm
                        </strong>

                        <button
                            type="button"
                            class="add-fruit-button"
                            data-fruit="${name}"
                        >
                            🛒
                            <span>
                                Savatchaga
                            </span>
                        </button>

                    </div>

                </div>
            `;

            const image =
                card.querySelector(
                    "img"
                );

            image.addEventListener(
                "error",
                function () {

                    this.style.display =
                        "none";

                    const fallback =
                        document.createElement(
                            "div"
                        );

                    fallback.className =
                        "fruit-image-fallback";

                    fallback.textContent =
                        fruit.emoji;

                    this.parentElement
                        .appendChild(
                            fallback
                        );

                }
            );

            grid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
🛒 MEVA QO‘SHISH
========================================================= */

function addToCart(name) {

    if (!fruits[name]) return;

    const existing =
        cart.find(
            function (item) {
                return item.name === name;
            }
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price:
                fruits[name].price,

            emoji:
                fruits[name].emoji,

            image:
                fruits[name].image,

            quantity: 1

        });

    }

    saveCart();
    updateCart();

    showMessage(
        "🛒",
        name,
        "Savatchaga qo‘shildi!"
    );

}


/* =========================================================
💾 SAVATNI SAQLASH
========================================================= */

function saveCart() {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


/* =========================================================
➕ MIQDOR
========================================================= */

function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    saveCart();
    updateCart();

}


/* =========================================================
➖ MIQDOR
========================================================= */

function decreaseQuantity(index) {

    if (!cart[index]) return;

    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(
            index,
            1
        );

    }

    saveCart();
    updateCart();

}


/* =========================================================
🗑️ O‘CHIRISH
========================================================= */

function removeFromCart(index) {

    if (!cart[index]) return;

    const name =
        cart[index].name;

    cart.splice(
        index,
        1
    );

    saveCart();
    updateCart();

    showMessage(
        "🗑️",
        name,
        "Savatchadan olib tashlandi"
    );

}


/* =========================================================
🔄 SAVATNI YANGILASH
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );

    if (!cartItems) return;

    let count = 0;
    let total = 0;

    cart.forEach(
        function (item) {

            count +=
                item.quantity;

            total +=
                item.price *
                item.quantity;

        }
    );

    if (cartCount) {

        cartCount.textContent =
            count;

    }

    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total) +
            " so'm";

    }

    if (cart.length === 0) {

        const lang =
            localStorage.getItem(
                LANGUAGE_KEY
            ) || "uz";

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    ${translations[lang].emptyCart}
                </h3>

                <p>
                    ${translations[lang].chooseFruit}
                </p>

            </div>

        `;

        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(
        function (item, index) {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "cart-item";

            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${
                            item.image ||
                            fruits[item.name].image
                        }"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(
                            item.price
                        )} so'm
                    </p>

                    <div class="quantity-controls">

                        <button
                            type="button"
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>

                </div>

                <strong class="cart-item-price">

                    ${formatPrice(
                        item.price *
                        item.quantity
                    )} so'm

                </strong>

                <button
                    type="button"
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    ×
                </button>

            `;

            const image =
                element.querySelector(
                    "img"
                );

            image.addEventListener(
                "error",
                function () {

                    this.outerHTML =
                        `<span class="cart-fallback">
                            ${item.emoji}
                        </span>`;

                }
            );

            cartItems.appendChild(
                element
            );

        }
    );

}


/* =========================================================
🔢 SAVAT SONI
========================================================= */

function getCartCount() {

    let count = 0;

    cart.forEach(
        function (item) {

            count +=
                item.quantity;

        }
    );

    return count;

}


/* =========================================================
💰 JAMI
========================================================= */

function getCartTotalNumber() {

    let total = 0;

    cart.forEach(
        function (item) {

            total +=
                item.price *
                item.quantity;

        }
    );

    return total;

}


/* =========================================================
💰 NARX FORMAT
========================================================= */

function formatPrice(number) {

    return Math.round(
        Number(number)
    ).toLocaleString(
        "uz-UZ"
    );

}


/* =========================================================
🛒 CART PANEL
========================================================= */

function toggleCart() {

    const panel =
        document.getElementById(
            "cartPanel"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (!panel) return;

    panel.classList.toggle(
        "active"
    );

    if (overlay) {

        overlay.classList.toggle(
            "active"
        );

    }

}


/* =========================================================
🔍 QIDIRUV
========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;

    input.addEventListener(
        "input",
        searchFruits
    );

}


function searchFruits() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;

    const search =
        input.value
            .toLowerCase()
            .trim();

    document
        .querySelectorAll(
            ".fruit-item"
        )
        .forEach(
            function (card) {

                const name =
                    card.dataset.name
                        .toLowerCase();

                if (
                    name.includes(
                        search
                    )
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            }
        );

}


/* =========================================================
🏷️ KATEGORIYA
========================================================= */

function setupCategoryButtons() {

    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const category =
                            button.dataset.category;

                        filterFruits(
                            category,
                            button
                        );

                    }
                );

            }
        );

}


function filterFruits(
    category,
    button
) {

    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            function (btn) {

                btn.classList.remove(
                    "active"
                );

            }
        );

    if (button) {

        button.classList.add(
            "active"
        );

    }

    document
        .querySelectorAll(
            ".fruit-item"
        )
        .forEach(
            function (card) {

                if (
                    category === "all" ||
                    card.dataset.category ===
                    category
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            }
        );

}


/* =========================================================
🍓 MEVALARGA O‘TISH
========================================================= */

function showFruits() {

    const section =
        document.getElementById(
            "mevalar"
        );

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
🔔 XABAR
========================================================= */

function showMessage(
    icon,
    title,
    text
) {

    const old =
        document.querySelector(
            ".fruit-message"
        );

    if (old) {
        old.remove();
    }

    const message =
        document.createElement(
            "div"
        );

    message.className =
        "fruit-message";

    message.innerHTML = `

        <div class="message-icon">
            ${icon}
        </div>

        <div>

            <strong>
                ${title}
            </strong>

            <p>
                ${text}
            </p>

        </div>

    `;

    document.body.appendChild(
        message
    );

    setTimeout(
        function () {

            message.classList.add(
                "message-show"
            );

        },
        50
    );

    setTimeout(
        function () {

            message.classList.remove(
                "message-show"
            );

            setTimeout(
                function () {

                    message.remove();

                },
                400
            );

        },
        2200
    );

}


/* =========================================================
📦 BUYURTMA
========================================================= */

function checkout() {

    if (cart.length === 0) {

        showMessage(
            "🛒",
            "Savatcha bo‘sh",
            "Avval meva tanlang!"
        );

        return;

    }

    if (
        document.getElementById(
            "orderModal"
        )
    ) return;

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "orderModal";

    modal.innerHTML = `

        <div
            class="order-modal-overlay"
            onclick="closeOrderModal()"
        ></div>

        <div class="order-modal">

            <button
                type="button"
                class="order-close"
                onclick="closeOrderModal()"
            >
                ✕
            </button>

            <div class="order-icon">
                🍓
            </div>

            <h2>
                Buyurtma berish
            </h2>

            <p class="order-subtitle">
                Yetkazib berish ma'lumotlarini kiriting
            </p>

            <form id="orderForm">

                <label>
                    👤 Ism-familiya
                </label>

                <input
                    type="text"
                    id="customerName"
                    placeholder="Ism va familiyangiz"
                    required
                >

                <label>
                    📞 Telefon raqami
                </label>

                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="+998 90 123 45 67"
                    required
                >

                <label>
                    📍 Yetkazib berish manzili
                </label>

                <textarea
                    id="customerAddress"
                    placeholder="Viloyat, shahar/tuman, ko‘cha, uy..."
                    rows="3"
                    required
                ></textarea>

                <label>
                    📝 Qo‘shimcha izoh
                    <span>(ixtiyoriy)</span>
                </label>

                <textarea
                    id="customerComment"
                    placeholder="Masalan: eshik oldiga qoldiring..."
                    rows="2"
                ></textarea>

                <label>
                    🕐 Yetkazib berish vaqti
                </label>

                <input
                    type="time"
                    id="deliveryTime"
                    required
                >

                <div class="order-summary">

                    <div>
                        <span>
                            Mahsulotlar:
                        </span>

                        <strong>
                            ${getCartCount()} ta
                        </strong>
                    </div>

                    <div>
                        <span>
                            Jami:
                        </span>

                        <strong>
                            ${formatPrice(
                                getCartTotalNumber()
                            )} so'm
                        </strong>
                    </div>

                </div>

                <button
                    type="submit"
                    class="confirm-order-button"
                >
                    ✅ Buyurtmani tasdiqlash
                </button>

            </form>

        </div>
    `;

    document.body.appendChild(
        modal
    );

    setTimeout(
        function () {
            modal.classList.add(
                "show"
            );
        },
        20
    );

    const form =
        document.getElementById(
            "orderForm"
        );

    if (form) {

        form.addEventListener(
            "submit",
            submitOrder
        );

    }

}


/* =========================================================
❌ BUYURTMA OYNASINI YOPISH
========================================================= */

function closeOrderModal() {

    const modal =
        document.getElementById(
            "orderModal"
        );

    if (!modal) return;

    modal.classList.remove(
        "show"
    );

    setTimeout(
        function () {

            modal.remove();

        },
        300
    );

}


/* =========================================================
📦 GOOGLE APPS SCRIPT
========================================================= */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvCPFc5pY5aFtROnmN0tCEmhnOzSHvNQwrosTUZd4MeHxJakcFSfZ/exec";


async function submitOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert(
            "🛒 Savatcha bo‘sh!"
        );

        return;

    }

    const name =
        document.getElementById(
            "customerName"
        ).value.trim();

    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();

    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();

    const comment =
        document.getElementById(
            "customerComment"
        ).value.trim();

    const deliveryTime =
        document.getElementById(
            "deliveryTime"
        ).value;

    if (
        !name ||
        !phone ||
        !address ||
        !deliveryTime
    ) {

        alert(
            "⚠️ Kerakli ma'lumotlarni kiriting!"
        );

        return;

    }

    const products =
        cart.map(
            function (item) {

                return {

                    name:
                        item.name,

                    quantity:
                        item.quantity,

                    price:
                        item.price,

                    total:
                        item.price *
                        item.quantity

                };

            }
        );

    const total =
        getCartTotalNumber();

    const orderData = {

        name:
            name,

        phone:
            phone,

        address:
            address,

        comment:
            comment,

        deliveryTime:
            deliveryTime,

        products:
            products,

        productsText:
            products
                .map(
                    function (item) {

                        return (
                            item.name +
                            " × " +
                            item.quantity +
                            " = " +
                            formatPrice(
                                item.total
                            ) +
                            " so'm"
                        );

                    }
                )
                .join("\n"),

        productCount:
            getCartCount(),

        subtotal:
            total,

        discount:
            0,

        total:
            total,

        promo:
            "",

        date:
            new Date().toLocaleString(
                "uz-UZ"
            )

    };

    const button =
        event.target.querySelector(
            ".confirm-order-button"
        );

    if (button) {

        button.disabled =
            true;

        button.textContent =
            "⏳ Yuborilmoqda...";

    }

    try {

        await fetch(
            GOOGLE_SCRIPT_URL,
            {

                method: "POST",

                mode: "no-cors",

                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },

                body:
                    JSON.stringify(
                        orderData
                    )

            }
        );

        alert(
            "✅ Buyurtmangiz qabul qilindi!\n\n" +
            "👤 " + name + "\n" +
            "📞 " + phone + "\n" +
            "📍 " + address + "\n" +
            "🕐 " + deliveryTime + "\n\n" +
            "🛒 Mahsulotlar: " +
            getCartCount() +
            " ta\n" +
            "💰 Jami: " +
            formatPrice(total) +
            " so'm"
        );

        cart = [];

        saveCart();

        updateCart();

        closeOrderModal();

    } catch (error) {

        console.error(
            "BUYURTMA XATOSI:",
            error
        );

        alert(
            "❌ Buyurtma yuborishda xatolik yuz berdi."
        );

        if (button) {

            button.disabled =
                false;

            button.textContent =
                "✅ Buyurtmani tasdiqlash";

        }

    }

}


/* =========================================================
🚀 SAYT ISHGA TUSHISHI
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyTheme();

        const language =
            localStorage.getItem(
                LANGUAGE_KEY
            );

        const theme =
            localStorage.getItem(
                THEME_KEY
            );

        const overlay =
            document.getElementById(
                "setupOverlay"
            );

        const languageStep =
            document.getElementById(
                "languageStep"
            );

        const themeStep =
            document.getElementById(
                "themeStep"
            );

        /* TIL TANLANMAGAN */

        if (!language) {

            if (overlay) {
                overlay.style.display =
                    "flex";
            }

            if (languageStep) {
                languageStep.classList.remove(
                    "hidden"
                );
            }

            if (themeStep) {
                themeStep.classList.add(
                    "hidden"
                );
            }

        }

        /* TIL BOR, REJIM YO‘Q */

        else if (!theme) {

            if (overlay) {
                overlay.style.display =
                    "flex";
            }

            if (languageStep) {
                languageStep.classList.add(
                    "hidden"
                );
            }

            if (themeStep) {
                themeStep.classList.remove(
                    "hidden"
                );
            }

            updateThemeTexts();

        }

        /* TIL VA REJIM BOR */

        else {

            if (overlay) {
                overlay.style.display =
                    "none";
            }

            applyLanguage();

        }

        renderFruits();

        updateCart();

        setupSearch();

        setupNavbar();

        startScrollAnimation();

    }
);


/* =========================================================
🧭 NAVBAR
========================================================= */

function setupNavbar() {

    window.addEventListener(
        "scroll",
        function () {

            const navbar =
                document.querySelector(
                    ".navbar"
                );

            if (!navbar) return;

            if (
                window.scrollY > 50
            ) {

                navbar.classList.add(
                    "navbar-scrolled"
                );

            } else {

                navbar.classList.remove(
                    "navbar-scrolled"
                );

            }

        }
    );

}


/* =========================================================
✨ SCROLL ANIMATION
========================================================= */

function startScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".fruit-item, .about-visual, .about-text, .stats"
        );

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            function (element) {

                element.classList.add(
                    "show-animation"
                );

            }
        );

        return;

    }

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show-animation"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );

    elements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
⌨️ ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeOrderModal();

        }

    }
);


/* =========================================================
🖱️ BUTTON ANIMATION
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );

        if (!button) return;

        button.classList.add(
            "button-click"
        );

        setTimeout(
            function () {

                button.classList.remove(
                    "button-click"
                );

            },
            250
        );

    }
);


/* =========================================================
🍓 MEVA MIX
========================================================= */

console.log(
    "%c🍓 MEVA MIX — READY!",
    "font-size:22px;font-weight:bold;"
);
