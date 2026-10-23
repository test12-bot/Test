/* =========================================================
   HIGHWAY — لوحة التاجر
   منطق الواجهة: بيانات تجريبية + إضافة طلب + تتبع + تنبيهات
   ========================================================= */

/* ---------- الحالة ---------- */
const state = {
  merchant: {
    name: 'حلويات نفيسة',
    location: 'السرو'
  },
  summary: {
    deliveries: 5,
    cost: 18.50,
    received: 12.00
  },
  deliveries: [
    {
      id: 1,
      customer: 'أحمد العمري',
      address: 'السرو الجنوبي · بجانب الصيدلية',
      price: 1.50,
      orderValue: 0,
      notes: '',
      etaMinutes: 8,
      status: 'active',
      createdTime: '12:32'
    },
    {
      id: 2,
      customer: 'سارة محمود',
      address: 'وسط البلد · عمارة رقم ١٢',
      price: 2.50,
      orderValue: 0,
      notes: '',
      etaMinutes: 3,
      status: 'warn',
      createdTime: '12:28'
    },
    {
      id: 3,
      customer: 'محمد خالد',
      address: 'إسكان الجامعة · شارع ٣',
      price: 1.50,
      orderValue: 0,
      notes: '',
      etaMinutes: 0,
      status: 'done',
      createdTime: '12:40',
      doneTime: '12:40'
    }
  ]
};

/* ---------- عناصر DOM ---------- */
const $ = (id) => document.getElementById(id);

/* ---------- تهيئة ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // بيانات المتجر
  $('storeName').textContent = state.merchant.name;
  $('storeLoc').textContent = state.merchant.location;
  $('todayDate').textContent = formatArabicDate(new Date());

  renderAll();
  bindEvents();
});

/* ---------- التاريخ بالعربية ---------- */
function formatArabicDate(d) {
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

/* ---------- رسم كل شيء ---------- */
function renderAll() {
  renderSummary();
  renderDeliveries();
  renderActiveCount();
}

/* ---------- الملخص ---------- */
function renderSummary() {
  const prev = {
    count: +$('statCount').textContent || 0,
    cost: parseFloat($('statCost').textContent) || 0,
    received: parseFloat($('statReceived').textContent) || 0
  };

  $('statCount').textContent = state.summary.deliveries;
  $('statCost').textContent = state.summary.cost.toFixed(2);
  $('statReceived').textContent = state.summary.received.toFixed(2);

  // وميض خفيف عند تغيّر الرقم
  if (state.summary.deliveries !== prev.count) flash($('statCount'));
  if (state.summary.cost !== prev.cost) flash($('statCost').parentElement);
  if (state.summary.received !== prev.received) flash($('statReceived').parentElement);
}

function flash(el) {
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 600);
}

/* ---------- عدد الطلبات النشطة ---------- */
function renderActiveCount() {
  const n = state.deliveries.filter(d => d.status !== 'done').length;
  $('activeCount').textContent = n;
}

/* ---------- قائمة التوصيلات ---------- */
function renderDeliveries() {
  const container = $('deliveriesList');

  if (!state.deliveries.length) {
    container.innerHTML = `
      <div class="empty">
        <div class="empty-ico">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
            <path d="M9 17h6M14 17V9h-3M19 9l-3-4h-4v4"/>
          </svg>
        </div>
        <p>لا توجد توصيلات الآن.<br>اضغط <strong>استدعاء كابتن</strong> للبدء.</p>
      </div>`;
    return;
  }

  container.innerHTML = state.deliveries.map(renderDeliveryCard).join('');

  // ربط أحداث البطاقات
  container.querySelectorAll('.delivery').forEach(card => {
    card.addEventListener('click', () => openTrack(card.dataset.id));
  });
  container.querySelectorAll('.track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openTrack(btn.closest('.delivery').dataset.id);
    });
  });
}

function renderDeliveryCard(d) {
  const cls = d.status === 'done' ? 'delivery done'
            : d.status === 'warn' ? 'delivery warn'
            : 'delivery';

  const statusCls = d.status === 'done' ? 'done'
                  : d.status === 'warn' ? 'warn'
                  : 'active';

  const statusLabel = d.status === 'done' ? '✓ تم التسليم'
                    : d.status === 'warn' ? 'الكابتن قادم'
                    : d.status === 'searching' ? 'جاري البحث'
                    : 'جاري التوصيل';

  let etaText;
  if (d.status === 'done') {
    etaText = `✓ ${d.doneTime || ''}`;
  } else if (d.status === 'searching') {
    etaText = `⏳ انتظار`;
  } else {
    etaText = `🕐 ~${d.etaMinutes} دقائق`;
  }

  return `
    <article class="${cls}" data-id="${d.id}">
      <div class="delivery-head">
        <div class="delivery-who">
          <span class="dot"></span>
          <strong>${escapeHTML(d.customer)}</strong>
        </div>
        <span class="delivery-status ${statusCls}">${statusLabel}</span>
      </div>
      <div class="delivery-to">📍 ${escapeHTML(d.address)}</div>
      <div class="delivery-meta">
        <span class="price">${d.price.toFixed(2)} <small>د.أ</small></span>
        <span class="eta">${etaText}</span>
        ${d.status !== 'done' ? `<button class="track-btn" type="button">تتبع</button>` : ''}
      </div>
    </article>`;
}

/* ---------- فتح نموذج الاستدعاء ---------- */
function openCallModal() {
  clearForm();
  openModal('callModal');
  setTimeout(() => $('custName').focus(), 350);
}

function clearForm() {
  $('callForm').reset();
  $('deliveryFee').value = '1.50';
  document.querySelectorAll('#callForm .err').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('#callForm .invalid').forEach(e => e.classList.remove('invalid'));
}

/* ---------- التحقق والإرسال ---------- */
function handleCallSubmit(e) {
  e.preventDefault();

  const name = $('custName').value.trim();
  const address = $('custAddress').value.trim();
  const price = parseFloat($('deliveryFee').value) || 1.50;
  const orderValue = parseFloat($('orderValue').value) || 0;
  const notes = $('custNotes').value.trim();

  let valid = true;

  if (!name) { markError('custName', 'الرجاء إدخال اسم العميل'); valid = false; }
  if (!address) { markError('custAddress', 'الرجاء إدخال عنوان التوصيل'); valid = false; }

  if (!valid) return;

  addDelivery({ customer: name, address, price, orderValue, notes });
  closeModal('callModal');
}

function markError(inputId, msg) {
  const input = $(inputId);
  input.classList.add('invalid');
  const err = document.querySelector(`.err[data-for="${inputId}"]`);
  if (err) { err.textContent = msg; err.classList.add('show'); }
}

/* ---------- إضافة توصيل جديد ---------- */
function addDelivery(data) {
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const delivery = {
    id: Date.now(),
    customer: data.customer,
    address: data.address,
    price: data.price,
    orderValue: data.orderValue,
    notes: data.notes,
    etaMinutes: 15,
    status: 'searching',
    createdTime: timeStr
  };

  state.deliveries.unshift(delivery);
  state.summary.deliveries++;
  state.summary.cost += data.price;

  renderAll();
  showToast(`تم إرسال الطلب · جاري البحث عن كابتن`);

  // محاكاة تطور حالة الطلب
  scheduleDeliveryProgress(delivery);
}

function scheduleDeliveryProgress(delivery) {
  // 2 ثانية: تم إسناد كابتن
  setTimeout(() => {
    if (!state.deliveries.find(d => d.id === delivery.id)) return;
    delivery.status = 'active';
    delivery.etaMinutes = 10;
    renderAll();
    showToast(`تم إسناد كابتن لـ ${delivery.customer} 🛵`);
  }, 2000);

  // 12 ثانية: تم التسليم
  setTimeout(() => {
    if (!state.deliveries.find(d => d.id === delivery.id)) return;
    const now = new Date();
    delivery.status = 'done';
    delivery.etaMinutes = 0;
    delivery.doneTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    state.summary.received += delivery.price;
    renderAll();
    showToast(`✓ تم تسليم طلب ${delivery.customer}`);
  }, 14000);
}

/* ---------- نافذة التتبع ---------- */
function openTrack(id) {
  const d = state.deliveries.find(x => x.id === +id);
  if (!d) return;

  const statusToSteps = {
    searching: 0,
    warn: 1,
    active: 1,
    done: 3
  };

  const currentStep = statusToSteps[d.status] ?? 1;

  const steps = [
    { title: 'تم استلام الطلب', desc: `من المتجر · ${d.createdTime}` },
    { title: 'الكابتن في الطريق', desc: d.status === 'searching' ? 'بانتظار الإسناد' : `خلال ~${d.etaMinutes} دقائق` },
    { title: 'قريب من العميل', desc: 'عند الوصول للمنطقة' },
    { title: 'تم التسليم', desc: d.doneTime || 'بانتظار التسليم' }
  ];

  const stepsHTML = steps.map((s, i) => {
    const cls = i < currentStep ? 'done'
              : i === currentStep ? 'current'
              : '';
    const bullet = i < currentStep
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
      : `<span style="font-size:11px;font-weight:800;">${i + 1}</span>`;
    return `
      <div class="track-step ${cls}">
        <div class="bullet">${bullet}</div>
        <div class="body">
          <strong>${s.title}</strong>
          <small>${s.desc}</small>
        </div>
      </div>`;
  }).join('');

  $('trackContent').innerHTML = `
    <div class="track-info">
      <div class="who">
        <strong>${escapeHTML(d.customer)}</strong>
        <span class="price">${d.price.toFixed(2)} د.أ</span>
      </div>
      <p class="addr">📍 ${escapeHTML(d.address)}</p>
      ${d.notes ? `<div class="notes">📝 ${escapeHTML(d.notes)}</div>` : ''}
    </div>
    <div class="track-steps">${stepsHTML}</div>
  `;

  openModal('trackModal');
}

/* ---------- أدوات النوافذ ---------- */
function openModal(id) {
  const m = $(id);
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = $(id);
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- ربط الأحداث ---------- */
function bindEvents() {
  // الزر البطل
  $('callBtn').addEventListener('click', openCallModal);
  $('callForm').addEventListener('submit', handleCallSubmit);

  // إغلاق النوافذ
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => closeModal(el.dataset.close));
  });

  // Escape يغلق النوافذ
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
    }
  });

  // إزالة الخطأ عند الكتابة
  ['custName', 'custAddress'].forEach(id => {
    $(id).addEventListener('input', () => {
      $(id).classList.remove('invalid');
      const err = document.querySelector(`.err[data-for="${id}"]`);
      if (err) err.classList.remove('show');
    });
  });

  // الإشعارات
  $('notifBtn').addEventListener('click', () => {
    showToast(`لديك ${$('notifBadge').textContent} إشعارات جديدة`);
  });

  // الحساب
  $('accountBtn').addEventListener('click', () => {
    showToast('الملف الشخصي — قريباً');
  });

  // السجل
  $('historyBtn').addEventListener('click', () => {
    showToast('سجل الطلبات — قريباً');
  });

  // الأدوات السريعة
  document.querySelectorAll('.quick[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const map = {
        prices: 'قائمة الأسعار — قريباً',
        addresses: 'العناوين المحفوظة — قريباً',
        history: 'سجل الطلبات — قريباً',
        contact: 'الدعم الفني — قريباً'
      };
      showToast(map[btn.dataset.action] || 'قريباً');
    });
  });

  // التنقل السفلي
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.nav !== 'home') showToast('الصفحة — قريباً');
    });
  });
}

/* ---------- أمان HTML ---------- */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
