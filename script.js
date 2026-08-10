"use strict";

/* =========================================================
🍓 MEVA MIX — TO'LIQ JAVASCRIPT
========================================================= */

/* =========================================================
🌐 GOOGLE APPS SCRIPT
========================================================= */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx7qy39x0JiSHzvcpGPFc5pY5aFtROnmN0tCEmhnOzSwNQwrosTUZd4MeHxJakcFSfZ/exec";


/* =========================================================
🛒 SAVAT
========================================================= */

let cart = [];
let promoApplied = false;

const PROMO_CODE = "MEVAMIX10";
const DISCOUNT = 0.10;


/* =========================================================
🍎 12 TA MEVA — RASMLARI BILAN
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
🚀 SAYT ISHGA TUSHISHI
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    loadCart();

    renderFruits();

    updateCart();

    setupSearch();

    setupCategoryButtons();

    setupNavbar();

    startScrollAnimation();

});


/* =========================================================
💾 SAVATNI SAQLASH
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
            localStorage.getItem("mevaMixCart");

        if (saved) {

            cart = JSON.parse(saved);

        }

    } catch (error) {

        cart = [];

    }

}


/* =========================================================
🍓 MEVALARNI CHIQARISH
========================================================= */

function renderFruits() {

    const grid =
        document.getElementById("fruitGrid");

    if (!grid) {

        console.warn(
            "fruitGrid topilmadi!"
        );

        return;
    }


    grid.innerHTML = "";


    Object.entries(fruits).forEach(
        function ([name, fruit]) {

            let categoryName = "KLASSIK";


            if (fruit.category === "tropik") {

                categoryName = "TROPIK";

            }


            if (fruit.category === "rezavor") {

                categoryName = "REZAVOR";

            }


            const card =
                document.createElement("article");


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
                        <span>${fruit.emoji}</span>
                    </h3>


                    <p>
                        Yangi, sifatli va mazali
                        ${name.toLowerCase()}.
                    </p>


                    <div class="fruit-bottom">

                        <strong>
                            ${formatPrice(fruit.price)}
                            so'm
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


            /* =================================================
            ❌ RASM ISHLAMASA EMOJI
            ================================================= */

            const image =
                card.querySelector("img");


            image.addEventListener(
                "error",
                function () {

                    this.style.display =
                        "none";


                    const fallback =
                        document.createElement("div");


                    fallback.className =
                        "fruit-image-fallback";


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


    /* =================================================
    🛒 ADD BUTTON
    ================================================= */

    grid.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "[data-fruit]"
                );


            if (!button) return;


            const name =
                button.dataset.fruit;


            addToCart(name);

        }
    );

}


/* =========================================================
🛒 SAVATGA QO'SHISH
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
        "Savatchaga qo'shildi!"
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


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    updateCart();

}


/* =========================================================
🗑️ O'CHIRISH
========================================================= */

function removeFromCart(index) {

    if (!cart[index]) return;


    const name =
        cart[index].name;


    cart.splice(index, 1);


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
        document.getElementById("cartItems");


    const cartCount =
        document.getElementById("cartCount");


    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartItems) return;


    let count = 0;

    let subtotal = 0;


    cart.forEach(
        function (item) {

            count += item.quantity;

            subtotal +=
                item.price *
                item.quantity;

        }
    );


    let discount = 0;


    if (promoApplied) {

        discount =
            Math.round(
                subtotal * DISCOUNT
            );

    }


    const total =
        subtotal - discount;


    if (cartCount) {

        cartCount.textContent =
            count;

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total) +
            " so'm";

    }


    /* =================================================
    🛒 BO'SH SAVAT
    ================================================= */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Savatcha bo'sh
                </h3>

                <p>
                    Sevimli mevalaringizni tanlang 🍓
                </p>

            </div>

        `;

        return;

    }


    /* =================================================
    🧾 CART ITEMS
    ================================================= */

    cartItems.innerHTML = "";


    cart.forEach(
        function (item, index) {

            const element =
                document.createElement("div");


            element.className =
                "cart-item";


            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image || fruits[item.name].image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                        so'm
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
                    )}

                    so'm

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
                element.querySelector("img");


            image.addEventListener(
                "error",
                function () {

                    this.outerHTML =
                        `<span class="cart-fallback">
                            ${item.emoji}
                        </span>`;

                }
            );


            cartItems.appendChild(element);

        }
    );


    updateCartSummary();

}


/* =========================================================
💰 SAVAT HISOBI
========================================================= */

function updateCartSummary() {

    const subtotal =
        getSubtotal();


    const discount =
        promoApplied
            ? Math.round(
                subtotal * DISCOUNT
            )
            : 0;


    const total =
        subtotal - discount;


    const subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );


    const discountElement =
        document.getElementById(
            "cartDiscount"
        );


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal) +
            " so'm";

    }


    if (discountElement) {

        discountElement.textContent =
            "-" +
            formatPrice(discount) +
            " so'm";

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total) +
            " so'm";

    }

}


/* =========================================================
💰 SUBTOTAL
========================================================= */

function getSubtotal() {

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
🔢 MAHSULOTLAR SONI
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
💰 UMUMIY
========================================================= */

function getCartTotalNumber() {

    const subtotal =
        getSubtotal();


    const discount =
        promoApplied
            ? Math.round(
                subtotal * DISCOUNT
            )
            : 0;


    return subtotal - discount;

}


function getCartTotal() {

    return formatPrice(
        getCartTotalNumber()
    );

}


/* =========================================================
🛒 SAVAT PANEL
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
🎟️ PROMOKOD
========================================================= */

function checkPromo() {

    const input =
        document.getElementById(
            "promoInput"
        );


    const result =
        document.getElementById(
            "promoResult"
        );


    if (!input || !result) return;


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code === PROMO_CODE) {

        promoApplied = true;


        result.innerHTML =
            "🎉 Promokod qabul qilindi! " +
            "<strong>10% chegirma</strong>";


        result.className =
            "promo-success";


        input.value = "";


        updateCart();


        showMessage(
            "🎟️",
            "MEVAMIX10",
            "10% chegirma faollashtirildi!"
        );


        return;

    }


    if (code === "") {

        result.innerHTML =
            "⚠️ Promokodni kiriting.";

        result.className =
            "promo-error";

        return;

    }


    result.innerHTML =
        "❌ Promokod noto'g'ri.";

    result.className =
        "promo-error";

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
        function () {

            searchFruits();

        }
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


    const cards =
        document.querySelectorAll(
            ".fruit-item"
        );


    cards.forEach(
        function (card) {

            const name =
                card.dataset.name
                    .toLowerCase();


            if (
                name.includes(search)
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

    const buttons =
        document.querySelectorAll(
            ".category"
        );


    buttons.forEach(
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

    const cards =
        document.querySelectorAll(
            ".fruit-item"
        );


    document.querySelectorAll(
        ".category"
    ).forEach(
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


    cards.forEach(
        function (card) {

            if (
                category === "all" ||
                card.dataset.category === category
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
📦 CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        showMessage(
            "🛒",
            "Savatcha bo'sh",
            "Avval meva tanlang!"
        );

        return;

    }


    if (
        document.getElementById(
            "orderModal"
        )
    ) {

        return;

    }


    const modal =
        document.createElement("div");


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
                    placeholder="Viloyat, shahar/tuman, ko'cha, uy..."
                    rows="3"
                    required
                ></textarea>


                <label>
                    📝 Qo'shimcha izoh
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
                            ${getCartTotal()} so'm
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
❌ MODALNI YOPISH
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
📦 BUYURTMA YUBORISH
========================================================= */

async function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "🛒 Savatcha bo'sh!"
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
            "⚠️ Ism, telefon, manzil va vaqtni kiriting!"
        );

        return;

    }


    const products =
        cart.map(
            function (item) {

                return {

                    name: item.name,

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


    const subtotal =
        getSubtotal();


    const discount =
        promoApplied
            ? Math.round(
                subtotal * DISCOUNT
            )
            : 0;


    const total =
        subtotal - discount;


    const orderData = {

        name: name,

        phone: phone,

        address: address,

        comment: comment,

        deliveryTime:
            deliveryTime,

        products:
            products,

        productsText:
            products.map(
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
            ).join("\n"),

        productCount:
            getCartCount(),

        subtotal:
            subtotal,

        discount:
            discount,

        total:
            total,

        promo:
            promoApplied
                ? PROMO_CODE
                : "",

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

            "👤 " +
            name +
            "\n" +

            "📞 " +
            phone +
            "\n" +

            "📍 " +
            address +
            "\n" +

            "🕐 " +
            deliveryTime +
            "\n\n" +

            "🛒 Mahsulotlar: " +
            getCartCount() +
            " ta\n" +

            "💰 Jami: " +
            formatPrice(total) +
            " so'm"
        );


        cart = [];

        promoApplied = false;


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
🔔 CHIROYLI XABAR
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
                500
            );

        },
        2500
    );

}


/* =========================================================
✨ SCROLL ANIMATION
========================================================= */

function startScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".fruit-item, .about-visual, .about-text, .promo-content, .stats"
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
🧭 NAVBAR SCROLL
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
🍓 UCHIB YURADIGAN MEVALAR
========================================================= */

function createFloatingFruit() {

    const fruitList = [

        "🍎",
        "🍊",
        "🍌",
        "🍓",
        "🍇",
        "🥭",
        "🍍",
        "🍉",
        "🥝",
        "🍑"

    ];


    const fruit =
        document.createElement(
            "div"
        );


    fruit.className =
        "random-fruit";


    fruit.textContent =
        fruitList[
            Math.floor(
                Math.random() *
                fruitList.length
            )
        ];


    fruit.style.left =
        Math.random() * 100 +
        "vw";


    fruit.style.fontSize =
        20 +
        Math.random() * 30 +
        "px";


    fruit.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    document.body.appendChild(
        fruit
    );


    setTimeout(
        function () {

            fruit.remove();

        },
        10000
    );

}


setInterval(
    createFloatingFruit,
    4000
);


/* =========================================================
🎮 SECRET MEVA MODE
========================================================= */

let secretKeys = [];


const secretCode = [
    "m",
    "e",
    "v",
    "a"
];


document.addEventListener(
    "keydown",
    function (event) {

        secretKeys.push(
            event.key.toLowerCase()
        );


        if (
            secretKeys.length >
            secretCode.length
        ) {

            secretKeys.shift();

        }


        if (
            secretKeys.join("") ===
            secretCode.join("")
        ) {

            document.body.style.transition =
                "2s";


            document.body.style.filter =
                "hue-rotate(120deg)";


            setTimeout(
                function () {

                    document.body.style.filter =
                        "";

                },
                5000
            );


            secretKeys = [];

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
🍎 MEVALAR BO'LIMIGA O'TISH
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
⌨️ ESC — MODALNI YOPISH
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) return;


        closeOrderModal();

    }
);


/* =========================================================
🍓 MEVA MIX
========================================================= */

console.log(
    "%c🍓 MEVA MIX — PREMIUM MODE ON!",
    "font-size:22px;font-weight:bold;"
);