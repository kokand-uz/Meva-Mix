"use strict";

/* =========================================================
🍓 MEVA MIX
========================================================= */

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvcpGPFc5pY5aFtROnmN0tCEmhnOzSWNQwrosTUZd4MeHxJakcFSfZ/exec";


/* =========================================================
🛒 SAVAT
========================================================= */

let cart = [];


/* =========================================================
🍎 MEVALAR
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
🚀 START
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadSettings();

    loadCart();

    renderFruits();

    updateCart();

    setupSearch();

    setupCategoryButtons();

    setupWelcome();

    setupNavbar();

});


/* =========================================================
🌐 TIL VA TEMA
========================================================= */

let selectedLanguage = "uz";
let selectedTheme = "light";


function setupWelcome() {

    const savedLanguage =
        localStorage.getItem("mevaMixLanguage");

    const savedTheme =
        localStorage.getItem("mevaMixTheme");


    if (savedLanguage && savedTheme) {

        selectedLanguage = savedLanguage;
        selectedTheme = savedTheme;

        applyTheme(selectedTheme);

        document.getElementById(
            "welcomeScreen"
        ).style.display = "none";

        return;
    }


    document.querySelectorAll(
        ".language-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".language-btn"
                ).forEach(btn =>
                    btn.classList.remove("selected")
                );

                button.classList.add("selected");

                selectedLanguage =
                    button.dataset.lang;

                document.getElementById(
                    "languageStep"
                ).classList.add("hidden-step");

                document.getElementById(
                    "themeStep"
                ).classList.remove("hidden-step");

            }
        );

    });


    document.querySelectorAll(
        ".theme-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".theme-btn"
                ).forEach(btn =>
                    btn.classList.remove("selected")
                );

                button.classList.add("selected");

                selectedTheme =
                    button.dataset.theme;

            }
        );

    });


    document.getElementById(
        "continueBtn"
    ).addEventListener(
        "click",
        () => {

            if (!selectedLanguage) return;

            localStorage.setItem(
                "mevaMixLanguage",
                selectedLanguage
            );

            localStorage.setItem(
                "mevaMixTheme",
                selectedTheme
            );

            applyTheme(selectedTheme);

            const screen =
                document.getElementById(
                    "welcomeScreen"
                );

            screen.style.opacity = "0";

            screen.style.transition =
                "opacity .5s";

            setTimeout(() => {
                screen.style.display = "none";
            }, 500);

        }
    );

}


function loadSettings() {

    const theme =
        localStorage.getItem(
            "mevaMixTheme"
        );

    if (theme) {

        applyTheme(theme);

    }

}


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

}


/* =========================================================
💾 CART STORAGE
========================================================= */

function saveCart() {

    localStorage.setItem(
        "mevaMixCart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "mevaMixCart"
            );

        if (saved) {

            cart = JSON.parse(saved);

        }

    } catch {

        cart = [];

    }

}


/* =========================================================
🍓 RENDER
========================================================= */

function renderFruits() {

    const grid =
        document.getElementById(
            "fruitGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(fruits).forEach(
        ([name, fruit]) => {

            let categoryName = "KLASSIK";

            if (fruit.category === "tropik")
                categoryName = "TROPIK";

            if (fruit.category === "rezavor")
                categoryName = "REZAVOR";


            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "fruit-item";

            card.dataset.name = name;

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
                        ${fruit.emoji}
                    </h3>

                    <p>
                        Yangi, sifatli va mazali
                        ${name.toLowerCase()}.
                    </p>

                    <div class="fruit-bottom">

                        <strong>
                            ${formatPrice(fruit.price)}
                            so‘m
                        </strong>

                        <button
                            type="button"
                            class="add-fruit-button"
                            data-fruit="${name}"
                        >
                            🛒
                            <span>Savatchaga</span>
                        </button>

                    </div>

                </div>
            `;


            const image =
                card.querySelector("img");


            image.addEventListener(
                "error",
                function () {

                    this.style.display =
                        "none";

                    const fallback =
                        document.createElement(
                            "div"
                        );

                    fallback.style.cssText =
                        `
                        width:100%;
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:80px;
                        background:#eee;
                        `;

                    fallback.textContent =
                        fruit.emoji;

                    this.parentElement.appendChild(
                        fallback
                    );

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
🛒 ADD CART
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-fruit]"
            );

        if (!button) return;

        addToCart(
            button.dataset.fruit
        );

    }
);


function addToCart(name) {

    if (!fruits[name]) return;


    const existing =
        cart.find(
            item => item.name === name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name,
            price: fruits[name].price,
            emoji: fruits[name].emoji,
            image: fruits[name].image,
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
➕➖ CART
========================================================= */

function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    saveCart();

    updateCart();

}


function decreaseQuantity(index) {

    if (!cart[index]) return;

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    updateCart();

}


function removeFromCart(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


/* =========================================================
🔄 UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    if (!cartItems) return;


    const count =
        getCartCount();

    const total =
        getCartTotalNumber();


    document.getElementById(
        "cartCount"
    ).textContent = count;


    document.getElementById(
        "navCartCount"
    ).textContent = count;


    document.getElementById(
        "cartSubtotal"
    ).textContent =
        formatPrice(total) +
        " so‘m";


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(total) +
        " so‘m";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Savatcha bo‘sh
                </h3>

                <p>
                    Sevimli mevalaringizni tanlang 🍓
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(
        (item, index) => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "cart-item";


            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ${formatPrice(item.price)}
                        so‘m
                    </p>

                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
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
                    )}
                    so‘m
                </strong>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    ×
                </button>

            `;

            cartItems.appendChild(element);

        }
    );

}


/* =========================================================
💰 PRICE
========================================================= */

function getCartCount() {

    return cart.reduce(
        (sum, item) =>
            sum + item.quantity,
        0
    );

}


function getCartTotalNumber() {

    return cart.reduce(
        (sum, item) =>
            sum +
            item.price *
            item.quantity,
        0
    );

}


function getCartTotal() {

    return formatPrice(
        getCartTotalNumber()
    );

}


function formatPrice(number) {

    return Math.round(
        Number(number)
    ).toLocaleString("uz-UZ");

}


/* =========================================================
🛒 TOGGLE CART
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


    panel.classList.toggle("active");

    overlay.classList.toggle("active");

}


/* =========================================================
🔍 SEARCH
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

    const search =
        input.value
            .toLowerCase()
            .trim();


    document.querySelectorAll(
        ".fruit-item"
    ).forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();

        card.classList.toggle(
            "hidden",
            !name.includes(search)
        );

    });

}


/* =========================================================
🏷️ CATEGORY
========================================================= */

function setupCategoryButtons() {

    document.querySelectorAll(
        ".category"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterFruits(
                    button.dataset.category,
                    button
                );

            }
        );

    });

}


function filterFruits(
    category,
    button
) {

    document.querySelectorAll(
        ".category"
    ).forEach(
        btn =>
            btn.classList.remove("active")
    );


    button.classList.add("active");


    document.querySelectorAll(
        ".fruit-item"
    ).forEach(card => {

        const match =
            category === "all" ||
            card.dataset.category === category;

        card.classList.toggle(
            "hidden",
            !match
        );

    });

}


/* =========================================================
🍓 SHOW FRUITS
========================================================= */

function showFruits() {

    document.getElementById(
        "mevalar"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
🧭 NAVBAR
========================================================= */

function setupNavbar() {

    window.addEventListener(
        "scroll",
        () => {

            const navbar =
                document.querySelector(
                    ".navbar"
                );

            if (!navbar) return;

            navbar.classList.toggle(
                "navbar-scrolled",
                window.scrollY > 50
            );

        }
    );

}


/* =========================================================
📦 CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Savatcha bo‘sh! Avval meva tanlang."
        );

        return;

    }


    if (
        document.getElementById(
            "orderModal"
        )
    ) return;


    const modal =
        document.createElement("div");


    modal.id =
        "orderModal";


    modal.innerHTML = `

        <div class="order-modal-overlay"
             onclick="closeOrderModal()">
        </div>

        <div class="order-modal">

            <button
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

            <p>
                Yetkazib berish ma’lumotlarini kiriting
            </p>

            <form id="orderForm">

                <input
                    type="text"
                    id="customerName"
                    placeholder="Ism va familiyangiz"
                    required
                >

                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="+998 90 123 45 67"
                    required
                >

                <textarea
                    id="customerAddress"
                    placeholder="Yetkazib berish manzili"
                    rows="3"
                    required
                ></textarea>

                <textarea
                    id="customerComment"
                    placeholder="Qo‘shimcha izoh (ixtiyoriy)"
                    rows="2"
                ></textarea>

                <input
                    type="time"
                    id="deliveryTime"
                    required
                >

                <div class="order-summary">

                    <span>
                        Mahsulotlar: ${getCartCount()} ta
                    </span>

                    <strong>
                        ${getCartTotal()} so‘m
                    </strong>

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


    document.body.appendChild(modal);


    const form =
        document.getElementById(
            "orderForm"
        );


    form.addEventListener(
        "submit",
        submitOrder
    );

}


function closeOrderModal() {

    const modal =
        document.getElementById(
            "orderModal"
        );

    if (modal) modal.remove();

}


/* =========================================================
📦 SUBMIT ORDER
========================================================= */

async function submitOrder(event) {

    event.preventDefault();


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


    const products =
        cart.map(item => ({

            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total:
                item.price *
                item.quantity

        }));


    const total =
        getCartTotalNumber();


    const orderData = {

        name,
        phone,
        address,
        comment,
        deliveryTime,

        products,

        productsText:
            products.map(
                item =>
                    `${item.name} × ${item.quantity} = ${formatPrice(item.total)} so‘m`
            ).join("\n"),

        productCount:
            getCartCount(),

        total,

        date:
            new Date().toLocaleString(
                "uz-UZ"
            )

    };


    const button =
        event.target.querySelector(
            ".confirm-order-button"
        );


    button.disabled = true;

    button.textContent =
        "⏳ Yuborilmoqda...";


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
            " so‘m"
        );


        cart = [];

        saveCart();

        updateCart();

        closeOrderModal();


    } catch (error) {

        console.error(error);

        alert(
            "❌ Buyurtma yuborishda xatolik yuz berdi."
        );

        button.disabled = false;

        button.textContent =
            "✅ Buyurtmani tasdiqlash";

    }

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

    if (old) old.remove();


    const message =
        document.createElement(
            "div"
        );

    message.className =
        "fruit-message";


    message.innerHTML = `
        <strong>
            ${icon} ${title}
        </strong>

        <p>${text}</p>
    `;


    message.style.cssText = `
        position:fixed;
        top:90px;
        right:25px;
        z-index:5000;

        padding:15px 20px;

        border:1px solid #d4af37;
        border-radius:15px;

        background:var(--card);
        color:var(--text);

        box-shadow:0 15px 40px rgba(0,0,0,.2);

        animation:cardIn .4s ease;
    `;


    document.body.appendChild(
        message
    );


    setTimeout(
        () => message.remove(),
        2500
    );

}


/* =========================================================
⌨️ ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeOrderModal();

        }

    }
);


console.log(
    "🍓 MEVA MIX — PREMIUM MODE ON!"
);"use strict";

/* =========================================================
🍓 MEVA MIX
========================================================= */

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvcpGPFc5pY5aFtROnmN0tCEmhnOzSWNQwrosTUZd4MeHxJakcFSfZ/exec";


/* =========================================================
🛒 SAVAT
========================================================= */

let cart = [];


/* =========================================================
🍎 MEVALAR
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
🚀 START
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadSettings();

    loadCart();

    renderFruits();

    updateCart();

    setupSearch();

    setupCategoryButtons();

    setupWelcome();

    setupNavbar();

});


/* =========================================================
🌐 TIL VA TEMA
========================================================= */

let selectedLanguage = "uz";
let selectedTheme = "light";


function setupWelcome() {

    const savedLanguage =
        localStorage.getItem("mevaMixLanguage");

    const savedTheme =
        localStorage.getItem("mevaMixTheme");


    if (savedLanguage && savedTheme) {

        selectedLanguage = savedLanguage;
        selectedTheme = savedTheme;

        applyTheme(selectedTheme);

        document.getElementById(
            "welcomeScreen"
        ).style.display = "none";

        return;
    }


    document.querySelectorAll(
        ".language-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".language-btn"
                ).forEach(btn =>
                    btn.classList.remove("selected")
                );

                button.classList.add("selected");

                selectedLanguage =
                    button.dataset.lang;

                document.getElementById(
                    "languageStep"
                ).classList.add("hidden-step");

                document.getElementById(
                    "themeStep"
                ).classList.remove("hidden-step");

            }
        );

    });


    document.querySelectorAll(
        ".theme-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".theme-btn"
                ).forEach(btn =>
                    btn.classList.remove("selected")
                );

                button.classList.add("selected");

                selectedTheme =
                    button.dataset.theme;

            }
        );

    });


    document.getElementById(
        "continueBtn"
    ).addEventListener(
        "click",
        () => {

            if (!selectedLanguage) return;

            localStorage.setItem(
                "mevaMixLanguage",
                selectedLanguage
            );

            localStorage.setItem(
                "mevaMixTheme",
                selectedTheme
            );

            applyTheme(selectedTheme);

            const screen =
                document.getElementById(
                    "welcomeScreen"
                );

            screen.style.opacity = "0";

            screen.style.transition =
                "opacity .5s";

            setTimeout(() => {
                screen.style.display = "none";
            }, 500);

        }
    );

}


function loadSettings() {

    const theme =
        localStorage.getItem(
            "mevaMixTheme"
        );

    if (theme) {

        applyTheme(theme);

    }

}


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

}


/* =========================================================
💾 CART STORAGE
========================================================= */

function saveCart() {

    localStorage.setItem(
        "mevaMixCart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "mevaMixCart"
            );

        if (saved) {

            cart = JSON.parse(saved);

        }

    } catch {

        cart = [];

    }

}


/* =========================================================
🍓 RENDER
========================================================= */

function renderFruits() {

    const grid =
        document.getElementById(
            "fruitGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(fruits).forEach(
        ([name, fruit]) => {

            let categoryName = "KLASSIK";

            if (fruit.category === "tropik")
                categoryName = "TROPIK";

            if (fruit.category === "rezavor")
                categoryName = "REZAVOR";


            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "fruit-item";

            card.dataset.name = name;

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
                        ${fruit.emoji}
                    </h3>

                    <p>
                        Yangi, sifatli va mazali
                        ${name.toLowerCase()}.
                    </p>

                    <div class="fruit-bottom">

                        <strong>
                            ${formatPrice(fruit.price)}
                            so‘m
                        </strong>

                        <button
                            type="button"
                            class="add-fruit-button"
                            data-fruit="${name}"
                        >
                            🛒
                            <span>Savatchaga</span>
                        </button>

                    </div>

                </div>
            `;


            const image =
                card.querySelector("img");


            image.addEventListener(
                "error",
                function () {

                    this.style.display =
                        "none";

                    const fallback =
                        document.createElement(
                            "div"
                        );

                    fallback.style.cssText =
                        `
                        width:100%;
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:80px;
                        background:#eee;
                        `;

                    fallback.textContent =
                        fruit.emoji;

                    this.parentElement.appendChild(
                        fallback
                    );

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
🛒 ADD CART
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-fruit]"
            );

        if (!button) return;

        addToCart(
            button.dataset.fruit
        );

    }
);


function addToCart(name) {

    if (!fruits[name]) return;


    const existing =
        cart.find(
            item => item.name === name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name,
            price: fruits[name].price,
            emoji: fruits[name].emoji,
            image: fruits[name].image,
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
➕➖ CART
========================================================= */

function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    saveCart();

    updateCart();

}


function decreaseQuantity(index) {

    if (!cart[index]) return;

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    updateCart();

}


function removeFromCart(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


/* =========================================================
🔄 UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    if (!cartItems) return;


    const count =
        getCartCount();

    const total =
        getCartTotalNumber();


    document.getElementById(
        "cartCount"
    ).textContent = count;


    document.getElementById(
        "navCartCount"
    ).textContent = count;


    document.getElementById(
        "cartSubtotal"
    ).textContent =
        formatPrice(total) +
        " so‘m";


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(total) +
        " so‘m";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Savatcha bo‘sh
                </h3>

                <p>
                    Sevimli mevalaringizni tanlang 🍓
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(
        (item, index) => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "cart-item";


            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ${formatPrice(item.price)}
                        so‘m
                    </p>

                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
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
                    )}
                    so‘m
                </strong>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    ×
                </button>

            `;

            cartItems.appendChild(element);

        }
    );

}


/* =========================================================
💰 PRICE
========================================================= */

function getCartCount() {

    return cart.reduce(
        (sum, item) =>
            sum + item.quantity,
        0
    );

}


function getCartTotalNumber() {

    return cart.reduce(
        (sum, item) =>
            sum +
            item.price *
            item.quantity,
        0
    );

}


function getCartTotal() {

    return formatPrice(
        getCartTotalNumber()
    );

}


function formatPrice(number) {

    return Math.round(
        Number(number)
    ).toLocaleString("uz-UZ");

}


/* =========================================================
🛒 TOGGLE CART
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


    panel.classList.toggle("active");

    overlay.classList.toggle("active");

}


/* =========================================================
🔍 SEARCH
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

    const search =
        input.value
            .toLowerCase()
            .trim();


    document.querySelectorAll(
        ".fruit-item"
    ).forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();

        card.classList.toggle(
            "hidden",
            !name.includes(search)
        );

    });

}


/* =========================================================
🏷️ CATEGORY
========================================================= */

function setupCategoryButtons() {

    document.querySelectorAll(
        ".category"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterFruits(
                    button.dataset.category,
                    button
                );

            }
        );

    });

}


function filterFruits(
    category,
    button
) {

    document.querySelectorAll(
        ".category"
    ).forEach(
        btn =>
            btn.classList.remove("active")
    );


    button.classList.add("active");


    document.querySelectorAll(
        ".fruit-item"
    ).forEach(card => {

        const match =
            category === "all" ||
            card.dataset.category === category;

        card.classList.toggle(
            "hidden",
            !match
        );

    });

}


/* =========================================================
🍓 SHOW FRUITS
========================================================= */

function showFruits() {

    document.getElementById(
        "mevalar"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
🧭 NAVBAR
========================================================= */

function setupNavbar() {

    window.addEventListener(
        "scroll",
        () => {

            const navbar =
                document.querySelector(
                    ".navbar"
                );

            if (!navbar) return;

            navbar.classList.toggle(
                "navbar-scrolled",
                window.scrollY > 50
            );

        }
    );

}


/* =========================================================
📦 CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Savatcha bo‘sh! Avval meva tanlang."
        );

        return;

    }


    if (
        document.getElementById(
            "orderModal"
        )
    ) return;


    const modal =
        document.createElement("div");


    modal.id =
        "orderModal";


    modal.innerHTML = `

        <div class="order-modal-overlay"
             onclick="closeOrderModal()">
        </div>

        <div class="order-modal">

            <button
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

            <p>
                Yetkazib berish ma’lumotlarini kiriting
            </p>

            <form id="orderForm">

                <input
                    type="text"
                    id="customerName"
                    placeholder="Ism va familiyangiz"
                    required
                >

                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="+998 90 123 45 67"
                    required
                >

                <textarea
                    id="customerAddress"
                    placeholder="Yetkazib berish manzili"
                    rows="3"
                    required
                ></textarea>

                <textarea
                    id="customerComment"
                    placeholder="Qo‘shimcha izoh (ixtiyoriy)"
                    rows="2"
                ></textarea>

                <input
                    type="time"
                    id="deliveryTime"
                    required
                >

                <div class="order-summary">

                    <span>
                        Mahsulotlar: ${getCartCount()} ta
                    </span>

                    <strong>
                        ${getCartTotal()} so‘m
                    </strong>

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


    document.body.appendChild(modal);


    const form =
        document.getElementById(
            "orderForm"
        );


    form.addEventListener(
        "submit",
        submitOrder
    );

}


function closeOrderModal() {

    const modal =
        document.getElementById(
            "orderModal"
        );

    if (modal) modal.remove();

}


/* =========================================================
📦 SUBMIT ORDER
========================================================= */

async function submitOrder(event) {

    event.preventDefault();


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


    const products =
        cart.map(item => ({

            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total:
                item.price *
                item.quantity

        }));


    const total =
        getCartTotalNumber();


    const orderData = {

        name,
        phone,
        address,
        comment,
        deliveryTime,

        products,

        productsText:
            products.map(
                item =>
                    `${item.name} × ${item.quantity} = ${formatPrice(item.total)} so‘m`
            ).join("\n"),

        productCount:
            getCartCount(),

        total,

        date:
            new Date().toLocaleString(
                "uz-UZ"
            )

    };


    const button =
        event.target.querySelector(
            ".confirm-order-button"
        );


    button.disabled = true;

    button.textContent =
        "⏳ Yuborilmoqda...";


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
            " so‘m"
        );


        cart = [];

        saveCart();

        updateCart();

        closeOrderModal();


    } catch (error) {

        console.error(error);

        alert(
            "❌ Buyurtma yuborishda xatolik yuz berdi."
        );

        button.disabled = false;

        button.textContent =
            "✅ Buyurtmani tasdiqlash";

    }

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

    if (old) old.remove();


    const message =
        document.createElement(
            "div"
        );

    message.className =
        "fruit-message";


    message.innerHTML = `
        <strong>
            ${icon} ${title}
        </strong>

        <p>${text}</p>
    `;


    message.style.cssText = `
        position:fixed;
        top:90px;
        right:25px;
        z-index:5000;

        padding:15px 20px;

        border:1px solid #d4af37;
        border-radius:15px;

        background:var(--card);
        color:var(--text);

        box-shadow:0 15px 40px rgba(0,0,0,.2);

        animation:cardIn .4s ease;
    `;


    document.body.appendChild(
        message
    );


    setTimeout(
        () => message.remove(),
        2500
    );

}


/* =========================================================
⌨️ ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeOrderModal();

        }

    }
);


console.log(
    "🍓 MEVA MIX — PREMIUM MODE ON!"
);
