/* =====================================================
    MEVA MIX 🍓
    Yangi sayt — Turquoise + Gold
===================================================== */


/* ================= GOOGLE APPS SCRIPT ================= */

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvCPFc5pY5aFtROnmN0tCEmhnOzSHvNQwrosTUZd4MeHxJakcFSfZ/exec";


/* ================= FRUITS ================= */

const fruits = {

    "Tarvuz": {
        price: 5000,
        category: "klassik",
        emoji: "🍉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRMWXWApMZsUKyXRouCHBDaEeL-0ndziBktOrifCL4Q&s=10"
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


/* ================= STATE ================= */

let currentLanguage =
    localStorage.getItem("mevaMixLanguage") || null;

let currentTheme =
    localStorage.getItem("mevaMixTheme") || null;

let cart =
    JSON.parse(localStorage.getItem("mevaMixCart") || "{}");

let activeCategory = "all";
let searchText = "";


/* ================= TRANSLATIONS ================= */

const translations = {

    uz: {
        home: "Bosh sahifa",
        fruits: "Mevalar",
        about: "Biz haqimizda",
        cart: "Savatcha",

        heroText:
            "Eng sara, yangi va mazali mevalarni bir joydan toping.",

        viewFruits:
            "Mevalarni ko‘rish",

        types:
            "Meva turi",

        natural:
            "Tabiiy",

        service:
            "Xizmat",

        fresh:
            "Yangi mevalar",

        naturalProduct:
            "Tabiiy mahsulot",

        fast:
            "Tez xizmat",

        quality:
            "Sifat kafolati",

        allFruits:
            "Barchasini ko‘rish",

        aboutText:
            "Meva Mix — yangi, sifatli va mazali mevalarni tanlashni osonlashtiradigan zamonaviy meva do‘koni.",

        emptyCart:
            "Savatcha bo‘sh",

        chooseFruit:
            "Mevalardan birortasini tanlang 🍎",

        total:
            "Jami",

        order:
            "Buyurtma berish",

        footerText:
            "Har kuni yangi meva, har kuni yaxshi kayfiyat! ❤️",

        rights:
            "Barcha huquqlar himoyalangan."
    },

    ru: {
        home: "Главная",
        fruits: "Фрукты",
        about: "О нас",
        cart: "Корзина",

        heroText:
            "Выбирайте лучшие, свежие и вкусные фрукты в одном месте.",

        viewFruits:
            "Посмотреть фрукты",

        types:
            "Видов фруктов",

        natural:
            "Натуральные",

        service:
            "Сервис",

        fresh:
            "Свежие фрукты",

        naturalProduct:
            "Натуральный продукт",

        fast:
            "Быстрый сервис",

        quality:
            "Гарантия качества",

        allFruits:
            "Посмотреть все",

        aboutText:
            "Meva Mix — современный магазин, где легко выбрать свежие, качественные и вкусные фрукты.",

        emptyCart:
            "Корзина пуста",

        chooseFruit:
            "Выберите один из фруктов 🍎",

        total:
            "Итого",

        order:
            "Оформить заказ",

        footerText:
            "Свежие фрукты каждый день, хорошее настроение каждый день! ❤️",

        rights:
            "Все права защищены."
    },

    en: {
        home: "Home",
        fruits: "Fruits",
        about: "About us",
        cart: "Cart",

        heroText:
            "Find the best, fresh and delicious fruits in one place.",

        viewFruits:
            "View fruits",

        types:
            "Fruit types",

        natural:
            "Natural",

        service:
            "Service",

        fresh:
            "Fresh fruits",

        naturalProduct:
            "Natural product",

        fast:
            "Fast service",

        quality:
            "Quality guarantee",

        allFruits:
            "View all",

        aboutText:
            "Meva Mix is a modern fruit shop where you can easily choose fresh, high-quality and delicious fruits.",

        emptyCart:
            "Your cart is empty",

        chooseFruit:
            "Choose some fruits 🍎",

        total:
            "Total",

        order:
            "Place order",

        footerText:
            "Fresh fruit every day, good mood every day! ❤️",

        rights:
            "All rights reserved."
    }
};


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {

    if (!currentLanguage) {

        showLanguageStep();

    } else if (!currentTheme) {

        showThemeStep();

    } else {

        enterSite();

    }

});


/* ================= LANGUAGE ================= */

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


function showLanguageStep() {

    document
        .getElementById("setupOverlay")
        .classList.remove("hidden");

    document
        .getElementById("languageStep")
        .classList.remove("hidden");

    document
        .getElementById("themeStep")
        .classList.add("hidden");

}


function showThemeStep() {

    document
        .getElementById("setupOverlay")
        .classList.remove("hidden");

    document
        .getElementById("languageStep")
        .classList.add("hidden");

    document
        .getElementById("themeStep")
        .classList.remove("hidden");

    updateThemeTexts();

}


/* ================= THEME ================= */

function chooseTheme(theme) {

    currentTheme = theme;

    localStorage.setItem(
        "mevaMixTheme",
        theme
    );

    applyTheme();

    enterSite();

}


function applyTheme() {

    document.body.classList.toggle(
        "dark",
        currentTheme === "dark"
    );

}


function enterSite() {

    applyTheme();

    applyLanguage();

    document
        .getElementById("setupOverlay")
        .classList.add("hidden");

    renderFruits();

    updateCart();

}


/* ================= THEME TEXT ================= */

function updateThemeTexts() {

    const isRu =
        currentLanguage === "ru";

    const isEn =
        currentLanguage === "en";

    const title =
        document.getElementById("themeTitle");

    const description =
        document.getElementById("themeDescription");

    const light =
        document.getElementById("lightText");

    const dark =
        document.getElementById("darkText");


    if (isRu) {

        title.textContent =
            "Выберите режим";

        description.textContent =
            "Выберите внешний вид сайта";

        light.textContent =
            "Светлая тема";

        dark.textContent =
            "Тёмная тема";

    } else if (isEn) {

        title.textContent =
            "Choose a theme";

        description.textContent =
            "Choose the appearance of the website";

        light.textContent =
            "Light mode";

        dark.textContent =
            "Dark mode";

    } else {

        title.textContent =
            "Rejimni tanlang";

        description.textContent =
            "Sayt ko‘rinishini tanlang";

        light.textContent =
            "Oq rejim";

        dark.textContent =
            "Qorong‘i rejim";

    }

}


/* ================= LANGUAGE APPLY ================= */

function applyLanguage() {

    const language =
        translations[currentLanguage] ||
        translations.uz;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (language[key]) {

                element.textContent =
                    language[key];

            }

        });


    const search =
        document.getElementById("searchInput");

    if (search) {

        if (currentLanguage === "ru") {

            search.placeholder =
                "🔍 Поиск фруктов...";

        } else if (currentLanguage === "en") {

            search.placeholder =
                "🔍 Search fruits...";

        } else {

            search.placeholder =
                "🔍 Meva qidiring...";

        }

    }

}


/* ================= FRUITS ================= */

function renderFruits() {

    const grid =
        document.getElementById("fruitGrid");

    if (!grid) return;


    const filtered =
        Object.entries(fruits)
            .filter(([name, fruit]) => {

                const categoryMatch =
                    activeCategory === "all" ||
                    fruit.category === activeCategory;

                const searchMatch =
                    name
                        .toLowerCase()
                        .includes(searchText.toLowerCase());

                return categoryMatch && searchMatch;

            });


    if (!filtered.length) {

        const message =
            currentLanguage === "ru"
                ? "Фрукты не найдены 🍃"
                : currentLanguage === "en"
                    ? "No fruits found 🍃"
                    : "Meva topilmadi 🍃";

        grid.innerHTML =
            `<div class="fruit-message">${message}</div>`;

        return;

    }


    grid.innerHTML =
        filtered.map(([name, fruit]) => {

            const price =
                formatPrice(fruit.price);

            return `

                <article class="fruit-card">

                    <div class="fruit-image">

                        <img
                            src="${fruit.image}"
                            alt="${name}"
                            loading="lazy"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        >

                        <span
                            class="fruit-emoji"
                            style="display:none"
                        >
                            ${fruit.emoji}
                        </span>

                    </div>


                    <h3>
                        ${name}
                    </h3>


                    <div class="fruit-price">
                        ${price} so‘m
                    </div>


                    <button
                        type="button"
                        class="fruit-add"
                        onclick="addToCart('${escapeQuotes(name)}')"
                    >
                        ${getAddText()}
                    </button>

                </article>

            `;

        }).join("");

}


/* ================= PRICE ================= */

function formatPrice(price) {

    return new Intl.NumberFormat("uz-UZ")
        .format(price);

}


/* ================= ADD TEXT ================= */

function getAddText() {

    if (currentLanguage === "ru") {

        return "Добавить в корзину";

    }

    if (currentLanguage === "en") {

        return "Add to cart";

    }

    return "Savatchaga qo‘shish";

}


/* ================= ESCAPE ================= */

function escapeQuotes(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


/* ================= SEARCH ================= */

function searchFruits() {

    const input =
        document.getElementById("searchInput");

    searchText =
        input.value.trim();

    renderFruits();

}


/* ================= CATEGORY ================= */

function filterFruits(category, button) {

    activeCategory =
        category;


    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    renderFruits();

}


/* ================= SHOW FRUITS ================= */

function showFruits() {

    const section =
        document.getElementById("fruits");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= CART ================= */

function addToCart(name) {

    if (!fruits[name]) return;


    if (!cart[name]) {

        cart[name] = 1;

    } else {

        cart[name]++;

    }


    saveCart();

    updateCart();

    openCartTemporarily();

}


function removeFromCart(name) {

    if (!cart[name]) return;


    cart[name]--;

    if (cart[name] <= 0) {

        delete cart[name];

    }


    saveCart();

    updateCart();

}


function increaseCart(name) {

    if (!cart[name]) return;

    cart[name]++;

    saveCart();

    updateCart();

}


function decreaseCart(name) {

    removeFromCart(name);

}


function saveCart() {

    localStorage.setItem(
        "mevaMixCart",
        JSON.stringify(cart)
    );

}


/* ================= UPDATE CART ================= */

function updateCart() {

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");

    const countElement =
        document.getElementById("cartCount");

    const navCount =
        document.getElementById("cartCountNav");

    const itemsCount =
        document.getElementById("cartItemsCount");


    let total = 0;
    let count = 0;


    Object.entries(cart)
        .forEach(([name, quantity]) => {

            if (!fruits[name]) return;

            total +=
                fruits[name].price *
                quantity;

            count += quantity;

        });


    if (countElement) {

        countElement.textContent =
            count;

    }


    if (navCount) {

        navCount.textContent =
            count;

    }


    if (itemsCount) {

        if (currentLanguage === "ru") {

            itemsCount.textContent =
                `${count} товар`;

        } else if (currentLanguage === "en") {

            itemsCount.textContent =
                `${count} items`;

        } else {

            itemsCount.textContent =
                `${count} ta mahsulot`;

        }

    }


    if (totalElement) {

        totalElement.textContent =
            `${formatPrice(total)} so‘m`;

    }


    if (!container) return;


    if (count === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-icon">
                    🛒
                </div>

                <h3>
                    ${getEmptyCartText()}
                </h3>

                <p>
                    ${getChooseFruitText()}
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        Object.entries(cart)
            .filter(([name]) => fruits[name])
            .map(([name, quantity]) => {

                const fruit =
                    fruits[name];

                const itemTotal =
                    fruit.price * quantity;

                return `

                    <div class="cart-item">

                        <div class="cart-item-icon">
                            ${fruit.emoji}
                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${name}
                            </h4>

                            <p>
                                ${formatPrice(itemTotal)}
                                so‘m
                            </p>

                        </div>


                        <div class="cart-controls">

                            <button
                                type="button"
                                onclick="decreaseCart('${escapeQuotes(name)}')"
                            >
                                −
                            </button>

                            <span>
                                ${quantity}
                            </span>

                            <button
                                type="button"
                                onclick="increaseCart('${escapeQuotes(name)}')"
                            >
                                +
                            </button>

                        </div>

                    </div>

                `;

            }).join("");

}


/* ================= CART TEXT ================= */

function getEmptyCartText() {

    if (currentLanguage === "ru")
        return "Корзина пуста";

    if (currentLanguage === "en")
        return "Your cart is empty";

    return "Savatcha bo‘sh";

}


function getChooseFruitText() {

    if (currentLanguage === "ru")
        return "Выберите один из фруктов 🍎";

    if (currentLanguage === "en")
        return "Choose some fruits 🍎";

    return "Mevalardan birortasini tanlang 🍎";

}


/* ================= CART OPEN/CLOSE ================= */

function toggleCart() {

    const panel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("cartOverlay");


    if (!panel || !overlay) return;


    panel.classList.toggle("open");

    overlay.classList.toggle("open");

}


function openCartTemporarily() {

    const panel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("cartOverlay");


    if (!panel || !overlay) return;


    panel.classList.add("open");

    overlay.classList.add("open");

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (Object.keys(cart).length === 0) {

        const message =
            currentLanguage === "ru"
                ? "Корзина пуста."
                : currentLanguage === "en"
                    ? "Your cart is empty."
                    : "Savatcha bo‘sh.";

        alert(message);

        return;

    }


    let total = 0;

    const items = [];


    Object.entries(cart)
        .forEach(([name, quantity]) => {

            if (!fruits[name]) return;


            const price =
                fruits[name].price;

            const itemTotal =
                price * quantity;


            total += itemTotal;


            items.push({

                name: name,

                quantity: quantity,

                price: price,

                total: itemTotal

            });

        });


    showOrderForm(items, total);

}


/* ================= ORDER FORM ================= */

function showOrderForm(items, total) {

    const old =
        document.getElementById("orderModal");

    if (old) old.remove();


    const title =
        currentLanguage === "ru"
            ? "Оформление заказа"
            : currentLanguage === "en"
                ? "Checkout"
                : "Buyurtma berish";


    const nameText =
        currentLanguage === "ru"
            ? "Ism"
            : currentLanguage === "en"
                ? "Name"
                : "Ismingiz";


    const phoneText =
        currentLanguage === "ru"
            ? "Telefon"
            : currentLanguage === "en"
                ? "Phone"
                : "Telefon raqam";


    const addressText =
        currentLanguage === "ru"
            ? "Адрес"
            : currentLanguage === "en"
                ? "Address"
                : "Manzil";


    const sendText =
        currentLanguage === "ru"
            ? "Отправить заказ"
            : currentLanguage === "en"
                ? "Send order"
                : "Buyurtmani yuborish";


    const cancelText =
        currentLanguage === "ru"
            ? "Bekor"
            : currentLanguage === "en"
                ? "Cancel"
                : "Bekor qilish";


    const modal =
        document.createElement("div");

    modal.id = "orderModal";

    modal.innerHTML = `

        <div class="order-modal-backdrop"
             onclick="closeOrderForm()">
        </div>

        <div class="order-modal">

            <button
                type="button"
                class="order-close"
                onclick="closeOrderForm()"
            >
                ✕
            </button>


            <div class="order-icon">
                🛍️
            </div>


            <h2>
                ${title}
            </h2>


            <div class="order-summary">

                <span>
                    ${getTotalText()}
                </span>

                <strong>
                    ${formatPrice(total)} so‘m
                </strong>

            </div>


            <form
                id="orderForm"
                onsubmit="submitOrder(event)"
            >

                <input
                    id="customerName"
                    type="text"
                    placeholder="${nameText}"
                    required
                >

                <input
                    id="customerPhone"
                    type="tel"
                    placeholder="${phoneText}"
                    required
                >

                <textarea
                    id="customerAddress"
                    placeholder="${addressText}"
                    rows="3"
                    required
                ></textarea>


                <input
                    id="orderItems"
                    type="hidden"
                    value='${JSON.stringify(items)}'
                >

                <input
                    id="orderTotal"
                    type="hidden"
                    value="${total}"
                >


                <button
                    type="submit"
                    class="send-order-btn"
                >
                    ${sendText} 🎉
                </button>


                <button
                    type="button"
                    class="cancel-order-btn"
                    onclick="closeOrderForm()"
                >
                    ${cancelText}
                </button>

            </form>

        </div>

    `;


    document.body.appendChild(modal);

    requestAnimationFrame(() => {

        modal.classList.add("show");

    });

}


/* ================= ORDER TEXT ================= */

function getTotalText() {

    if (currentLanguage === "ru")
        return "Итого";

    if (currentLanguage === "en")
        return "Total";

    return "Jami";

}


/* ================= CLOSE ORDER ================= */

function closeOrderForm() {

    const modal =
        document.getElementById("orderModal");

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {

        modal.remove();

    }, 250);

}


/* ================= SUBMIT ORDER ================= */

async function submitOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();

    const items =
        JSON.parse(
            document.getElementById("orderItems").value
        );

    const total =
        Number(
            document.getElementById("orderTotal").value
        );


    if (!name || !phone || !address) {

        alert(
            currentLanguage === "ru"
                ? "Заполните все поля."
                : currentLanguage === "en"
                    ? "Please fill in all fields."
                    : "Barcha maydonlarni to‘ldiring."
        );

        return;

    }


    const button =
        event.target.querySelector(
            ".send-order-btn"
        );


    const oldText =
        button.textContent;


    button.disabled = true;

    button.textContent =
        currentLanguage === "ru"
            ? "Отправка..."
            : currentLanguage === "en"
                ? "Sending..."
                : "Yuborilmoqda...";


    const orderData = {

        name: name,

        phone: phone,

        address: address,

        items: items,

        total: total,

        language: currentLanguage,

        date:
            new Date().toLocaleString(
                "uz-UZ"
            )

    };


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
                    JSON.stringify(orderData)
            }
        );


        cart = {};

        saveCart();

        updateCart();

        closeOrderForm();

        toggleCart();


        alert(
            currentLanguage === "ru"
                ? "Заказ отправлен! Спасибо ❤️"
                : currentLanguage === "en"
                    ? "Order sent! Thank you ❤️"
                    : "Buyurtma yuborildi! Rahmat ❤️"
        );


    } catch (error) {

        console.error(error);

        button.disabled = false;

        button.textContent =
            oldText;


        alert(
            currentLanguage === "ru"
                ? "Не удалось отправить заказ."
                : currentLanguage === "en"
                    ? "Failed to send the order."
                    : "Buyurtmani yuborishda xatolik yuz berdi."
        );

    }

}


/* ================= RESET SETUP ================= */

function resetSetup() {

    localStorage.removeItem(
        "mevaMixLanguage"
    );

    localStorage.removeItem(
        "mevaMixTheme"
    );


    currentLanguage = null;
    currentTheme = null;


    document.body.classList.remove("dark");


    showLanguageStep();

}


/* ================= ESC ================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            const panel =
                document.getElementById("cartPanel");

            const overlay =
                document.getElementById("cartOverlay");

            if (panel && panel.classList.contains("open")) {

                panel.classList.remove("open");

                overlay.classList.remove("open");

            }


            closeOrderForm();

        }

    }
);


/* ================= SCROLL ================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(".navbar");

        if (!navbar) return;


        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(20,100,120,.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }
);
