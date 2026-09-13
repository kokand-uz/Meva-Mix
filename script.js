// ===============================
// MEVA MIX 🍓 — SCRIPT.JS
// ===============================

const LANGUAGE_KEY = "mevaMixLanguage";
const THEME_KEY = "mevaMixTheme";
const CART_KEY = "mevaMixCart";

const validLanguages = ["uz", "ru", "en"];
const validThemes = ["light", "dark"];

let currentLanguage = localStorage.getItem(LANGUAGE_KEY);
let currentTheme = localStorage.getItem(THEME_KEY);
let currentCategory = "all";

// Noto'g'ri eski qiymatlar bo'lsa tozalaymiz
if (!validLanguages.includes(currentLanguage)) {
    currentLanguage = null;
    localStorage.removeItem(LANGUAGE_KEY);
}

if (!validThemes.includes(currentTheme)) {
    currentTheme = null;
    localStorage.removeItem(THEME_KEY);
}


// ===============================
// TARJIMALAR
// ===============================

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
        chooseFruit: "Mevalardan birortasini tanlang 🍎",
        total: "Jami:",
        order: "Buyurtma berish",

        add: "Savatchaga qo‘shish",
        quantity: "Miqdor",

        themeTitle: "Rejimni tanlang",
        themeDescription: "Sayt ko‘rinishini tanlang",
        light: "Oq rejim",
        dark: "Qorong‘i rejim",

        footerText: "Har kuni yangi meva, har kuni yaxshi kayfiyat! ❤️",
        rights: "Barcha huquqlar himoyalangan.",

        added: "savatchaga qo‘shildi!",
        cartEmpty: "Avval savatchaga meva qo‘shing.",
        namePrompt: "Ismingiz:",
        phonePrompt: "Telefon raqamingiz:",
        addressPrompt: "Manzilingiz:",
        orderSent: "Buyurtmangiz yuborildi! 🎉",
        orderError: "Buyurtma yuborishda xatolik yuz berdi.",
        cancelled: "Buyurtma bekor qilindi."
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
            "Meva Mix — современный фруктовый магазин с самыми свежими и качественными фруктами.",

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
        chooseFruit: "Выберите один из фруктов 🍎",
        total: "Итого:",
        order: "Оформить заказ",

        add: "Добавить в корзину",
        quantity: "Количество",

        themeTitle: "Выберите режим",
        themeDescription: "Выберите внешний вид сайта",
        light: "Светлый режим",
        dark: "Тёмный режим",

        footerText: "Свежие фрукты каждый день и хорошее настроение! ❤️",
        rights: "Все права защищены.",

        added: "добавлен в корзину!",
        cartEmpty: "Сначала добавьте фрукт в корзину.",
        namePrompt: "Ваше имя:",
        phonePrompt: "Ваш номер телефона:",
        addressPrompt: "Ваш адрес:",
        orderSent: "Ваш заказ отправлен! 🎉",
        orderError: "Произошла ошибка при отправке заказа.",
        cancelled: "Заказ отменён."
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
            "Meva Mix is a modern fruit store with fresh, delicious and high-quality fruits for you.",

        viewFruits: "View fruits",
        natural: "Natural products",
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
            "Every day we choose the freshest and highest-quality fruits for you.",

        fresh: "Fresh fruits",
        naturalProduct: "Natural products",
        fast: "Fast service",
        quality: "Quality guarantee",

        emptyCart: "Your cart is empty",
        chooseFruit: "Choose some fruit 🍎",
        total: "Total:",
        order: "Place order",

        add: "Add to cart",
        quantity: "Quantity",

        themeTitle: "Choose a mode",
        themeDescription: "Choose the website appearance",
        light: "Light mode",
        dark: "Dark mode",

        footerText: "Fresh fruit every day, better mood every day! ❤️",
        rights: "All rights reserved.",

        added: "added to cart!",
        cartEmpty: "Add some fruit to the cart first.",
        namePrompt: "Your name:",
        phonePrompt: "Your phone number:",
        addressPrompt: "Your address:",
        orderSent: "Your order has been sent! 🎉",
        orderError: "There was an error sending the order.",
        cancelled: "Order cancelled."
    }
};


// ===============================
// MEVALAR
// ===============================

const fruits = [
    {
        id: 1,
        name: "Tarvuz",
        emoji: "🍉",
        price: 5000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Qovun",
        emoji: "🍈",
        price: 8000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        name: "Mango",
        emoji: "🥭",
        price: 20000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Dragon Fruit",
        emoji: "🐉",
        price: 25000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Shaftoli",
        emoji: "🍑",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1629828874514-2d4e8e4e8c0b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Junli Shaftoli",
        emoji: "🍑",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1609825480373-1c9c2b0a0b6b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Oq Shaftoli",
        emoji: "🍑",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1629828874514-2d4e8e4e8c0b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        name: "Anjir Shaftoli",
        emoji: "🍑",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1609825480373-1c9c2b0a0b6b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 9,
        name: "Uzum",
        emoji: "🍇",
        price: 30000,
        category: "rezavor",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 10,
        name: "Apelsin",
        emoji: "🍊",
        price: 30000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 11,
        name: "Yashil olma",
        emoji: "🍏",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 12,
        name: "Banan",
        emoji: "🍌",
        price: 20000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 13,
        name: "Anjir",
        emoji: "🫒",
        price: 25000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1601379760883-1bb497c558b0?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 14,
        name: "Nok",
        emoji: "🍐",
        price: 40000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 15,
        name: "Qulupnay",
        emoji: "🍓",
        price: 100000,
        category: "rezavor",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 16,
        name: "Ananas",
        emoji: "🍍",
        price: 50000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 17,
        name: "Laym",
        emoji: "🍋",
        price: 100000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 18,
        name: "Limon",
        emoji: "🍋",
        price: 50000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 19,
        name: "Golubika",
        emoji: "🫐",
        price: 40000,
        category: "rezavor",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 20,
        name: "Kiwi",
        emoji: "🥝",
        price: 70000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 21,
        name: "Ejevika",
        emoji: "🫐",
        price: 70000,
        category: "rezavor",
        image: "https://images.unsplash.com/photo-1522109691629-7d6d9d4f8b98?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 22,
        name: "Malina",
        emoji: "🍓",
        price: 100000,
        category: "rezavor",
        image: "https://images.unsplash.com/photo-1577069861033-55d7da4dcfa2?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 23,
        name: "Mandarin",
        emoji: "🍊",
        price: 40000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 24,
        name: "Kokos",
        emoji: "🥥",
        price: 50000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 25,
        name: "Avokado",
        emoji: "🥑",
        price: 30000,
        category: "tropik",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 26,
        name: "Olxo‘ri",
        emoji: "🟣",
        price: 10000,
        category: "klassik",
        image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=700&q=80"
    }
];


// ===============================
// SAVATCHA
// ===============================

let cart = [];

try {
    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
} catch {
    cart = [];
}


// ===============================
// TIL TANLASH
// ===============================

function chooseLanguage(lang) {
    if (!validLanguages.includes(lang)) return;

    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_KEY, lang);

    const languageStep = document.getElementById("languageStep");
    const themeStep = document.getElementById("themeStep");

    if (languageStep) {
        languageStep.classList.add("hidden");
    }

    if (themeStep) {
        themeStep.classList.remove("hidden");
    }

    updateThemeTexts();
}


// ===============================
// REJIM TANLASH
// ===============================

function chooseTheme(theme) {
    if (!validThemes.includes(theme)) return;

    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);

    applyTheme();
    applyLanguage();

    const overlay = document.getElementById("setupOverlay");

    if (overlay) {
        overlay.style.display = "none";
    }

    document.body.classList.remove("setup-active");

    renderFruits();
    updateCart();
}


// ===============================
// TEMA
// ===============================

function applyTheme() {
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}


// ===============================
// TEMA MATNLARI
// ===============================

function updateThemeTexts() {
    const lang = translations[currentLanguage] || translations.uz;

    const title = document.getElementById("themeTitle");
    const description = document.getElementById("themeDescription");
    const lightText = document.getElementById("lightText");
    const darkText = document.getElementById("darkText");

    if (title) title.textContent = lang.themeTitle;
    if (description) description.textContent = lang.themeDescription;
    if (lightText) lightText.textContent = lang.light;
    if (darkText) darkText.textContent = lang.dark;
}


// ===============================
// TILNI SAYTGA QO‘LLASH
// ===============================

function applyLanguage() {
    const lang = translations[currentLanguage] || translations.uz;

    document.documentElement.lang = currentLanguage || "uz";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (lang[key]) {
            element.textContent = lang[key];
        }
    });

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.placeholder = lang.search;
    }

    updateThemeTexts();
}


// ===============================
// SOZLAMALARNI QAYTA TANLASH
// ===============================

function resetSetup() {
    localStorage.removeItem(LANGUAGE_KEY);
    localStorage.removeItem(THEME_KEY);

    currentLanguage = null;
    currentTheme = null;

    const overlay = document.getElementById("setupOverlay");
    const languageStep = document.getElementById("languageStep");
    const themeStep = document.getElementById("themeStep");

    if (overlay) {
        overlay.style.display = "flex";
    }

    if (languageStep) {
        languageStep.classList.remove("hidden");
    }

    if (themeStep) {
        themeStep.classList.add("hidden");
    }

    document.body.classList.remove("dark");
}


// ===============================
// MEVALARNI CHIQARISH
// ===============================

function renderFruits(list = fruits) {
    const grid = document.getElementById("fruitGrid");

    if (!grid) return;

    const lang = translations[currentLanguage] || translations.uz;

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div>🍎</div>
                <h3>${currentLanguage === "ru"
                    ? "Фрукты не найдены"
                    : currentLanguage === "en"
                        ? "No fruits found"
                        : "Meva topilmadi"
                }</h3>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(fruit => `
        <article class="fruit-card">
            <div class="fruit-image-wrap">
                <img
                    class="fruit-image"
                    src="${fruit.image}"
                    alt="${fruit.name}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
                >
                <div class="fruit-emoji">${fruit.emoji}</div>
            </div>

            <div class="fruit-info">
                <div class="fruit-category">
                    ${getCategoryName(fruit.category)}
                </div>

                <h3>${fruit.name}</h3>

                <div class="fruit-bottom">
                    <strong>${formatMoney(fruit.price)}</strong>

                    <button
                        class="add-button"
                        type="button"
                        onclick="addToCart(${fruit.id})"
                    >
                        + ${lang.add}
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}


// ===============================
// KATEGORIYA NOMI
// ===============================

function getCategoryName(category) {
    const lang = translations[currentLanguage] || translations.uz;

    if (category === "tropik") return lang.tropical;
    if (category === "rezavor") return lang.berry;
    return lang.classic;
}


// ===============================
// PUL FORMAT
// ===============================

function formatMoney(number) {
    return new Intl.NumberFormat("uz-UZ").format(number) + " so‘m";
}


// ===============================
// SAVATCHAGA QO‘SHISH
// ===============================

function addToCart(id) {
    const fruit = fruits.find(item => item.id === id);

    if (!fruit) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: fruit.id,
            name: fruit.name,
            price: fruit.price,
            emoji: fruit.emoji,
            quantity: 1
        });
    }

    saveCart();
    updateCart();

    const lang = translations[currentLanguage] || translations.uz;

    showToast(`${fruit.emoji} ${fruit.name} ${lang.added}`);
}


// ===============================
// CART SAQLASH
// ===============================

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


// ===============================
// CARTNI YANGILASH
// ===============================

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems) return;

    const lang = translations[currentLanguage] || translations.uz;

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cartCount) {
        cartCount.textContent = count;
    }

    if (cartTotal) {
        cartTotal.textContent = formatMoney(total);
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <h3>${lang.emptyCart}</h3>
                <p>${lang.chooseFruit}</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">
                ${item.emoji}
            </div>

            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <strong>${formatMoney(item.price * item.quantity)}</strong>

                <div class="quantity-controls">
                    <button
                        type="button"
                        onclick="changeQuantity(${item.id}, -1)"
                    >−</button>

                    <span>${item.quantity}</span>

                    <button
                        type="button"
                        onclick="changeQuantity(${item.id}, 1)"
                    >+</button>
                </div>
            </div>

            <button
                class="remove-item"
                type="button"
                onclick="removeFromCart(${item.id})"
                title="Remove"
            >
                ✕
            </button>
        </div>
    `).join("");
}


// ===============================
// MIQDORNI O‘ZGARTIRISH
// ===============================

function changeQuantity(id, change) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    updateCart();
}


// ===============================
// CARTDAN O‘CHIRISH
// ===============================

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);

    saveCart();
    updateCart();
}


// ===============================
// CART OCHISH/YOPISH
// ===============================

function toggleCart(force) {
    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");

    if (!panel) return;

    const isOpen = document.body.classList.contains("cart-open");

    const shouldOpen =
        typeof force === "boolean"
            ? force
            : !isOpen;

    document.body.classList.toggle("cart-open", shouldOpen);

    if (panel) {
        panel.classList.toggle("open", shouldOpen);
    }

    if (overlay) {
        overlay.classList.toggle("open", shouldOpen);
    }
}


// ===============================
// QIDIRUV
// ===============================

function searchFruits() {
    const input = document.getElementById("searchInput");

    if (!input) return;

    const query = input.value.toLowerCase().trim();

    let filtered = fruits;

    if (currentCategory !== "all") {
        filtered = filtered.filter(
            fruit => fruit.category === currentCategory
        );
    }

    if (query) {
        filtered = filtered.filter(
            fruit =>
                fruit.name.toLowerCase().includes(query)
        );
    }

    renderFruits(filtered);
}


// ===============================
// KATEGORIYA FILTER
// ===============================

function filterFruits(category, button) {
    currentCategory = category;

    document.querySelectorAll(".category").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    searchFruits();
}


// ===============================
// MEVALAR BO‘LIMIGA O‘TISH
// ===============================

function showFruits() {
    const section = document.getElementById("mevalar");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// TOAST
// ===============================

function showToast(message) {
    const oldToast = document.querySelector(".meva-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = "meva-toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2200);
}


// ===============================
// BUYURTMA
// ===============================

async function checkout() {
    const lang = translations[currentLanguage] || translations.uz;

    if (cart.length === 0) {
        showToast(`🛒 ${lang.cartEmpty}`);
        return;
    }

    const name = prompt(lang.namePrompt);

    if (!name) {
        showToast(lang.cancelled);
        return;
    }

    const phone = prompt(lang.phonePrompt);

    if (!phone) {
        showToast(lang.cancelled);
        return;
    }

    const address = prompt(lang.addressPrompt);

    if (!address) {
        showToast(lang.cancelled);
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const orderData = {
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),

        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),

        total: total,
        discount: 0,
        promoCode: ""
    };


    // Google Apps Script
    const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvCPFc5pY5aFtROnmN0tCEmhnOzSHvNQwrosTUZd4MeHxJakcFSfZ/exec";

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(orderData)
        });

        showToast(lang.orderSent);

        cart = [];

        saveCart();
        updateCart();

        setTimeout(() => {
            toggleCart(false);
        }, 800);

    } catch (error) {
        console.error(error);
        showToast(lang.orderError);
    }
}


// ===============================
// SAYT ISHGA TUSHGANDA
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Tema bor bo‘lsa qo‘llaymiz
    if (currentTheme) {
        applyTheme();
    }

    // Til bor bo‘lsa qo‘llaymiz
    if (currentLanguage) {
        applyLanguage();
    }

    const overlay = document.getElementById("setupOverlay");
    const languageStep = document.getElementById("languageStep");
    const themeStep = document.getElementById("themeStep");

    // Hech narsa tanlanmagan
    if (!currentLanguage) {

        if (overlay) {
            overlay.style.display = "flex";
        }

        if (languageStep) {
            languageStep.classList.remove("hidden");
        }

        if (themeStep) {
            themeStep.classList.add("hidden");
        }

        return;
    }

    // Til tanlangan, lekin rejim tanlanmagan
    if (!currentTheme) {

        if (overlay) {
            overlay.style.display = "flex";
        }

        if (languageStep) {
            languageStep.classList.add("hidden");
        }

        if (themeStep) {
            themeStep.classList.remove("hidden");
        }

        updateThemeTexts();
        return;
    }

    // Hammasi tanlangan — saytga kiramiz
    if (overlay) {
        overlay.style.display = "none";
    }

    renderFruits();
    updateCart();
});
