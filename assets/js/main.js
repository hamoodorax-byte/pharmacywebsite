// الانتظار حتى تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ميزة سلة المشتريات التفاعلية ---
    const cartBadge = document.querySelector(".icon-link .badge");
    const addToCartButtons = document.querySelectorAll(".btn-add-cart");
    
    // جلب المنتجات المخزنة مسبقاً في السلة أو إنشاء سلة فارغة
    let cart = JSON.parse(localStorage.getItem("pharmacyCart")) || [];
    
    // تحديث عداد السلة العلوي عند فتح الموقع
    updateCartBadge();

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // العثور على بطاقة المنتج الأب للزر المقرون
            const productCard = e.target.closest(".product-card");
            const productId = productCard.getAttribute("data-id");
            const productName = productCard.getAttribute("data-name");
            const productPrice = productCard.getAttribute("data-price");

            // إنشاء كائن للمنتج المراد إضافته
            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            // التحقق إذا كان المنتج موجوداً مسبقاً لزيادة الكمية فقط
            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            // حفظ السلة المحدثة في ذاكرة المتصفح المحلية
            localStorage.setItem("pharmacyCart", JSON.stringify(cart));
            
            // تحديث العداد وتأثير بصري جميل للزر
            updateCartBadge();
            animateButton(button);
        });
    });

    function updateCartBadge() {
        if (cartBadge) {
            // حساب إجمالي عدد القطع في السلة
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.textContent = totalItems;
        }
    }

    function animateButton(button) {
        button.style.backgroundColor = "#15803d";
        button.innerHTML = `<i class="fa-solid fa-check"></i> تم الحفظ في السلة`;
        setTimeout(() => {
            button.style.backgroundColor = "#1e3a8a";
            button.innerHTML = `<i class="fa-solid fa-cart-plus"></i> إضافة للسلة`;
        }, 1500);
    }

    // --- 2. ميزة الفلترة والبحث الحي (Live Search) ---
    const searchInput = document.querySelector(".search-box input");
    const productCards = document.querySelectorAll(".product-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchValue = e.target.value.toLowerCase().trim();

            productCards.forEach(card => {
                const productName = card.getAttribute("data-name").toLowerCase();
                
                // إذا كان اسم المنتج يحتوي على النص المكتوب في البحث يظهر، وإلا يختفي
                if (productName.includes(searchValue)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});