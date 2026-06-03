document.addEventListener("DOMContentLoaded", () => {
    // 1. مصفوفة البيانات التي تحتوي على 20 صنفاً متنوعاً
    const pharmacyProducts = [
        { id: 1, name: "بانادول اكسترا مسكن للألم - 24 قرص", price: 15.00, oldPrice: 18.00, category: "المسكنات", badge: "خصم 15%", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Panadol" },
        { id: 2, name: "فيتامين سي الفوار 1000 ملغ للأكسدة", price: 40.00, oldPrice: null, category: "الفيتامينات", badge: "أفضل مبيعاً", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Vitamin+C" },
        { id: 3, name: "كريم يوسيرين لترطيب البشرة الجافة", price: 85.00, oldPrice: 110.00, category: "العناية بالبشرة", badge: "عرض بطل", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Eucerin" },
        { id: 4, name: "حليب أطفال نان برو رقم 1 - 400 جرام", price: 45.00, oldPrice: null, category: "الأم والطفل", badge: "أساسي", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=NAN+Milk" },
        { id: 5, name: "شراب بروفين خافض حرارة للأطفال", price: 12.50, oldPrice: 15.00, category: "الأدوية", badge: "خصم 16%", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Brufen" },
        { id: 6, name: "أوميجـا 3 زيت السمك مكثف 60 كبسولة", price: 95.00, oldPrice: 130.00, category: "الفيتامينات", badge: "موصى به", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Omega+3" },
        { id: 7, name: "غسول لاروش بوزيه للبشرة الدهنية", price: 120.00, oldPrice: null, category: "العناية بالبشرة", badge: "رائج الآن", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=La+Roche" },
        { id: 8, name: "لهاية إيفينت السيليكون المرنة قطعتين", price: 38.00, oldPrice: 48.00, category: "الأم والطفل", badge: "توفير", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Avent" },
        { id: 9, name: "حبوب فيفادول الصداع 500 ملغ", price: 11.00, oldPrice: null, category: "المسكنات", badge: "سعر ثابت", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Fevadol" },
        { id: 10, name: "مكمل غذائي سنتروم لجميع الفيتامينات", price: 55.00, oldPrice: 70.00, category: "الفيتامينات", badge: "أعلى تقييم", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Centrum" },
        { id: 11, name: "بخاخ ريجين 5% لإعادة إنبات الشعر", price: 160.00, oldPrice: 190.00, category: "العناية بالبشرة", badge: "خصم خاص", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Regaine" },
        { id: 12, name: "حفاضات بامبرز عناية مميزة مقاس 3", price: 75.00, oldPrice: null, category: "الأم والطفل", badge: "حجم جامبو", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Pampers" },
        { id: 13, name: "أقراص كلاريتين مضاد لحساسية الجيوب", price: 22.00, oldPrice: 28.00, category: "الأدوية", badge: "موسمي", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Clarityn" },
        { id: 14, name: "مكمل المغنيسيوم بلس للعضلات والنوم", price: 34.00, oldPrice: null, category: "الفيتامينات", badge: "طبيعي", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Magnesium" },
        { id: 15, name: "مرطب الشفاه الطبي من كيو في سيباميد", price: 18.00, oldPrice: 24.00, category: "العناية بالبشرة", badge: "1+1 مجاناً", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=QV+Lip" },
        { id: 16, name: "بودرة جونسون الكلاسيكية للأطفال", price: 20.00, oldPrice: null, category: "الأم والطفل", badge: "رعاية ناعمة", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Johnson" },
        { id: 17, name: "شرائط قياس السكر في الدم كونتور 50 شريط", price: 115.00, oldPrice: 140.00, category: "الأدوية", badge: "الأكثر طلباً", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Contour" },
        { id: 18, name: "حبوب زيرتك لمقاومة أعراض البرد", price: 18.50, oldPrice: null, category: "الأدوية", badge: "سريع المفعول", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Zyrtec" },
        { id: 19, name: "حبوب ستربسلز لعلاج آلام التهاب الحلق", price: 16.00, oldPrice: 20.00, category: "الأدوية", badge: "تلطيف"، img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Strepsils" },
        { id: 20, name: "جهاز قياس ضغط الدم أومرون الرقمي للذراع", price: 290.00, oldPrice: 350.00, category: "الأدوية", badge: "ضمان سنتين", img: "https://placehold.co/200x150/e8f5e9/16a34a?text=Omron" */
    ];

    // 2. دالة توليد وعرض المنتجات ديناميكياً داخل شبكة العرض
    const gridContainer = document.getElementById("products-grid-container");
    if (gridContainer) {
        gridContainer.innerHTML = pharmacyProducts.map(product => {
            // حساب السعر القديم إن وجد للتشطيب عليه
            const oldPriceHTML = product.oldPrice ? `<span style="color: #94a3b8; text-decoration: line-through; font-size: 0.9rem; margin-right: 8px;">${product.oldPrice.toFixed(2)} ر.س</span>` : '';
            // شارة الخصم المميزة للفت الانتباه
            const badgeHTML = product.badge ? `<div style="position: absolute; top: 10px; right: 10px; background: ${product.badge.includes('خصم') || product.badge.includes('عرض') ? '#ef4444' : '#16a34a'}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; z-index: 5;">${product.badge}</div>` : '';

            return `
                <div class="product-card" data-id="${product.id}" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; width: 280px; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-sizing: border-box;">
                    ${badgeHTML}
                    <div class="product-img" style="text-align: center; padding: 15px 0; overflow: hidden;">
                        <img src="${product.img}" alt="${product.name}" style="max-height: 140px; max-width: 100%; object-fit: contain; transition: transform 0.3s;">
                    </div>
                    <div class="product-info">
                        <span style="color: #64748b; font-size: 0.85rem; font-weight: 500;">${product.category}</span>
                        <h3 style="color: #1e3a8a; font-size: 1rem; margin: 8px 0; height: 44px; overflow: hidden; line-height: 1.4;">${product.name}</h3>
                        <div style="color: #f59e0b; font-size: 0.85rem; margin-bottom: 10px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div style="margin-bottom: 15px;">
                            <span style="color: #16a34a; font-weight: bold; font-size: 1.2rem;">${product.price.toFixed(2)} ر.س</span>
                            ${oldPriceHTML}
                        </div>
                        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})" class="btn-add-cart" style="width: 100%; background: #1e3a8a; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: background 0.2s;"><i class="fa-solid fa-cart-plus"></i> إضافة للسلة</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 3. دالة إدارة السلة والتخزين المحلي لزيادة الأعداد مع الحساب التلقائي
    window.addToCart = (id, name, price) => {
        let cart = JSON.parse(localStorage.getItem("pharmacyCart")) || [];
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        localStorage.setItem("pharmacyCart", JSON.stringify(cart));
        updateCartBadge();
        
        // تأثير اهتزاز بسيط وممتع للتأكيد البصري
        alert(`تمت إضافة "${name}" إلى السلة بنجاح!🛒`);
    };

    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem("pharmacyCart")) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const badges = document.querySelectorAll(".badge");
        badges.forEach(badge => badge.textContent = totalCount);
    }

    // تشغيل تحديث الشارة فور فتح الصفحة لقراءة البيانات القديمة المخزنة
    updateCartBadge();
});