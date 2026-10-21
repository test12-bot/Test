/* =========================================================
   HIGHWAY Delivery — قائمة الأسعار واستدعاء كابتن
   ========================================================= */

/* ---------- بيانات الأسعار (من قوائم الأسعار الرسمية PDF) ---------- */
/* p = السعر، وإذا كان نطاقاً يُكتب (الأدنى - الأعلى) ويظهر في الصفحة بنفس شكله في القائمة */
const PRICES = {
  sarou: {
    salt: [
    {n:"ابو الردا", p:"3.00"}, {n:"ابو القيقب", p:"3.00"}, {n:"إسكان آسيا", p:"2.00"},
    {n:"إسكان الجمارك", p:"1.50"}, {n:"إسكان طيبة", p:"1.50"}, {n:"إسكان الفردوس", p:"3.00"},
    {n:"إسكان المهندسين", p:"2.00"}, {n:"أم جوزة", p:"4.00"}, {n:"أم زيتونة", p:"4.00"},
    {n:"أم عطية", p:"3.00"}, {n:"أم العمد", p:"4.00"}, {n:"أم نعاج", p:"1.50 - 2.00"},
    {n:"البحيرة", p:"2.00"}, {n:"بركة العامرية", p:"2.00"}, {n:"بطنا", p:"3.50 - 4.00"},
    {n:"البقعان", p:"2.00"}, {n:"البقعة", p:"4.00"}, {n:"البقيع", p:"3.00"},
    {n:"ترخيص السلط", p:"1.50"}, {n:"جامعة البلقاء التطبيقية", p:"3.00"}, {n:"جامعة عمان الأهلية", p:"1.50"},
    {n:"جسر المناصير", p:"2.50"}, {n:"جلعاد", p:"5.00"}, {n:"حدائق ابو حسان", p:"3.00"},
    {n:"الحمر", p:"2.00 - 2.50"}, {n:"حي السميرات", p:"2.00"}, {n:"حي العبداللات", p:"2.00"},
    {n:"حي الفروسية", p:"2.50"}, {n:"الخندق", p:"3.00"}, {n:"دبابنة", p:"1.50"},
    {n:"دعم الغزالات", p:"3.00 - 3.50"}, {n:"دوار الصوارفة", p:"2.00"}, {n:"الرميمين", p:"5.00"},
    {n:"الزعتري", p:"2.50"}, {n:"زي", p:"3.50"}, {n:"السرو الجنوبي", p:"1.50"},
    {n:"السلالم", p:"2.00 - 2.50"}, {n:"سلعوف", p:"3.50"}, {n:"شارع الخضر", p:"2.50"},
    {n:"شارع الستين", p:"2.50 - 3.00"}, {n:"صافوط", p:"3.50"}, {n:"الصبيحي", p:"5.00"},
    {n:"الصوانية", p:"2.50"}, {n:"صويلح", p:"3.50"}, {n:"ضاحية الزهور", p:"1.50"},
    {n:"طباعة العواملة", p:"3.00"}, {n:"الطرازين", p:"4.00"}, {n:"علان", p:"4.00"},
    {n:"عيرا", p:"5.00"}, {n:"العيزرية", p:"3.00"}, {n:"عين الباشا", p:"3.00 - 3.50"},
    {n:"الفحيص", p:"3.00"}, {n:"القسام", p:"4.00"}, {n:"الكسارات", p:"2.50"},
    {n:"كفرهودا", p:"4.00 - 5.00"}, {n:"الكمالية", p:"2.00 - 2.50"}, {n:"ماحص", p:"3.50"},
    {n:"مدرسة السلط الثانوية", p:"2.50"}, {n:"المدينة الرياضية", p:"3.00"}, {n:"المضري", p:"2.50"},
    {n:"معسكرات الحسين", p:"2.50"}, {n:"المغاريب", p:"3.00"}, {n:"المنشية", p:"3.00"},
    {n:"الميامين", p:"3.00"}, {n:"الميدان", p:"2.50"}, {n:"الميسة", p:"2.00"},
    {n:"نقب الدبور السفلي", p:"2.50"}, {n:"نقب الدبور العلوي", p:"2.00"}, {n:"وادي الأكراد", p:"3.00"},
    {n:"وادي السلط", p:"4.00"}, {n:"وادي الشجرة", p:"2.00"}, {n:"وادي شعيب", p:"4.00 - 5.00"},
    {n:"وسط المدينة (البلد)", p:"2.50"}, {n:"الوسية", p:"3.50"}, {n:"يرقا", p:"5.00"},
    {n:"اليزيدية", p:"1.50"}
    ],
    amman: [
    {n:"ابو نصير", p:"5.00"}, {n:"تلاع العلي", p:"5.00 - 6.00"}, {n:"الجاردنز", p:"6.00"},
    {n:"الجبيهه", p:"5.00"}, {n:"خلدا", p:"4.00 - 5.00"}, {n:"دابوق", p:"4.00"},
    {n:"الدوار الثامن", p:"6.00"}, {n:"دوار الداخلية", p:"7.00"}, {n:"الدوار السابع", p:"6.00"},
    {n:"الدوار السادس", p:"7.00"}, {n:"شارع الأردن", p:"5.00 - 6.00"}, {n:"شارع الجامعة", p:"5.00"}
    ]
  },
  umm_naaj: {
    salt: [
    {n:"ابو الردا", p:"3.50"}, {n:"ابو القيقب", p:"3.50"}, {n:"إسكان آسيا", p:"2.00"},
    {n:"إسكان الجمارك", p:"1.50"}, {n:"إسكان طيبة", p:"1.50"}, {n:"إسكان الفردوس", p:"3.50"},
    {n:"إسكان المهندسين", p:"2.50"}, {n:"أم جوزة", p:"4.00"}, {n:"أم زيتونة", p:"4.00"},
    {n:"أم عطية", p:"3.00"}, {n:"أم العمد", p:"4.00"}, {n:"أم نعاج", p:"1.50 - 2.00"},
    {n:"البحيرة", p:"2.50"}, {n:"بركة العامرية", p:"2.50"}, {n:"بطنا", p:"4.00"},
    {n:"البقعان", p:"2.50"}, {n:"البقعة", p:"4.00"}, {n:"البقيع", p:"3.50"},
    {n:"ترخيص السلط", p:"1.50"}, {n:"جامعة البلقاء التطبيقية", p:"3.50"}, {n:"جامعة عمان الأهلية", p:"1.50"},
    {n:"جسر المناصير", p:"3.00"}, {n:"جلعاد", p:"6.00"}, {n:"حدائق ابو حسان", p:"3.50"},
    {n:"الحمر", p:"2.00 - 2.50"}, {n:"حي السميرات", p:"2.00"}, {n:"حي العبداللات", p:"2.00"},
    {n:"حي الفروسية", p:"3.00"}, {n:"الخندق", p:"3.50"}, {n:"دبابنة", p:"2.00"},
    {n:"دعم الغزالات", p:"3.50 - 4.00"}, {n:"دوار الصوارفة", p:"2.50"}, {n:"الرميمين", p:"5.00"},
    {n:"الزعتري", p:"3.00"}, {n:"زي", p:"4.00"}, {n:"السرو الجنوبي", p:"1.50"},
    {n:"السلالم", p:"2.50 - 3.00"}, {n:"سلعوف", p:"3.50"}, {n:"شارع الخضر", p:"3.00"},
    {n:"شارع الستين", p:"3.00 - 3.50"}, {n:"صافوط", p:"3.50"}, {n:"الصبيحي", p:"6.00"},
    {n:"الصوانية", p:"3.00"}, {n:"صويلح", p:"3.50"}, {n:"ضاحية الزهور", p:"2.00"},
    {n:"طباعة العواملة", p:"3.50"}, {n:"الطرازين", p:"4.00"}, {n:"علان", p:"4.00"},
    {n:"عيرا", p:"5.00"}, {n:"العيزرية", p:"3.50"}, {n:"عين الباشا", p:"3.00 - 3.50"},
    {n:"الفحيص", p:"3.00"}, {n:"القسام", p:"4.00"}, {n:"الكسارات", p:"2.50"},
    {n:"كفرهودا", p:"4.00 - 5.00"}, {n:"الكمالية", p:"2.00 - 2.50"}, {n:"ماحص", p:"3.50"},
    {n:"مدرسة السلط الثانوية", p:"3.00"}, {n:"المدينة الرياضية", p:"3.50"}, {n:"المضري", p:"3.00"},
    {n:"معسكرات الحسين", p:"2.50"}, {n:"المغاريب", p:"3.50"}, {n:"المنشية", p:"3.50"},
    {n:"الميامين", p:"3.50"}, {n:"الميدان", p:"3.00"}, {n:"الميسة", p:"2.50"},
    {n:"نقب الدبور السفلي", p:"3.00"}, {n:"نقب الدبور العلوي", p:"2.50"}, {n:"وادي الأكراد", p:"3.50"},
    {n:"وادي السلط", p:"4.00"}, {n:"وادي الشجرة", p:"2.50"}, {n:"وادي شعيب", p:"4.00 - 5.00"},
    {n:"وسط المدينة (البلد)", p:"3.00"}, {n:"الوسية", p:"4.00"}, {n:"يرقا", p:"5.00"},
    {n:"اليزيدية", p:"2.00"}
    ],
    amman: [
    {n:"ابو نصير", p:"5.00"}, {n:"تلاع العلي", p:"5.00 - 6.00"}, {n:"الجاردنز", p:"6.00"},
    {n:"الجبيهه", p:"5.00"}, {n:"خلدا", p:"4.00 - 5.00"}, {n:"دابوق", p:"4.00"},
    {n:"الدوار الثامن", p:"6.00"}, {n:"دوار الداخلية", p:"7.00"}, {n:"الدوار السابع", p:"6.00"},
    {n:"الدوار السادس", p:"7.00"}, {n:"شارع الأردن", p:"5.00 - 6.00"}, {n:"شارع الجامعة", p:"5.00"}
    ]
  }
};

/* ---------- الحالة ---------- */
let currentRegion = '';
let currentStartPoint = '';
let currentStartName = '';
let currentList = [];
let pendingOrderData = {};
let calcState = { dist: '', total: '0.00' };
let screenStack = ['screen-home'];

/* ---------- أيقونات الشاشة الافتتاحية (طعام) ---------- */
const FOOD_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11c0-3.5 3.6-6 8-6s8 2.5 8 6H4Z"/><path d="M3 14.5h18"/><path d="M5 17.5h14v.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C8 3 4.5 4.5 2.5 7L12 21 21.5 7C19.5 4.5 16 3 12 3Z"/><circle cx="10" cy="9" r="1.2"/><circle cx="14" cy="11" r="1.2"/><circle cx="12" cy="15" r="1"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v2M11 3v2M14 3v2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2 2 0 0 0 2 2v9"/><path d="M10 3v7a2 2 0 0 1-2 2"/><path d="M17 3c-2 1.5-3 4-3 7h3v11"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11a5 5 0 0 1 10 0"/><path d="M6.5 11h11L12 21 6.5 11Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'
];

function buildSplashIcons() {
    const wrap = document.getElementById('splashIcons');
    for (let i = 0; i < 18; i++) {
        const el = document.createElement('div');
        el.className = 'float-icon';
        const size = 26 + Math.random() * 34;
        el.style.width = el.style.height = size + 'px';
        el.style.left = (Math.random() * 94) + '%';
        el.style.animationDuration = (9 + Math.random() * 9) + 's';
        el.style.animationDelay = (-Math.random() * 14) + 's';
        el.innerHTML = FOOD_ICONS[i % FOOD_ICONS.length];
        wrap.appendChild(el);
    }
}

/* ---------- فيديو الشاشة الافتتاحية بخلفية شفافة ----------
   الفيديو لا يحمل قناة شفافية، لذلك نعرضه عبر WebGL ونحذف لونه التركوازي لحظياً
   فيظهر الإطار الزجاجي من خلفه تماماً كما كان مع الصورة.  إن تعذّر ذلك تظهر صورة اللوجو الثابتة. */
function initIntroVideo() {
    const video = document.getElementById('splashVideo');
    const canvas = document.getElementById('splashCanvas');
    const fallback = document.getElementById('splashFallback');
    if (!video || !canvas || !fallback) return null;

    let stopped = false, started = false;
    const showFallback = () => {
        if (started) return;
        canvas.style.display = 'none';
        fallback.classList.add('show');
    };

    let gl = null;
    try {
        gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: true, antialias: false });
    } catch (e) { gl = null; }
    if (!gl) { showFallback(); return { stop() {} }; }

    const compile = (type, src) => {
        const sh = gl.createShader(type);
        gl.shaderSource(sh, src); gl.compileShader(sh);
        return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };
    const vs = compile(gl.VERTEX_SHADER,
        'attribute vec2 p; varying vec2 uv;' +
        'void main(){ uv = vec2(p.x*0.5+0.5, 0.5-p.y*0.5); gl_Position = vec4(p,0.0,1.0); }');
    const fs = compile(gl.FRAGMENT_SHADER,
        'precision mediump float; uniform sampler2D tex; varying vec2 uv;' +
        'const vec3 BG = vec3(33.0,204.0,208.0)/255.0;' +            // لون خلفية الفيديو
        'void main(){' +
        '  vec3 c = texture2D(tex, uv).rgb;' +
        '  float a = clamp((distance(c, BG) - 0.035) / 0.80, 0.0, 1.0);' +
        '  vec3 f = a > 0.001 ? clamp((c - (1.0 - a) * BG) / a, 0.0, 1.0) : vec3(0.0);' +
        '  gl_FragColor = vec4(f * a, a);' +                          // ألوان مضروبة مسبقاً بالشفافية
        '}');
    const prog = gl.createProgram();
    if (!vs || !fs) { showFallback(); return { stop() {} }; }
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { showFallback(); return { stop() {} }; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const draw = () => {
        if (video.readyState < 2) return;
        try {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        } catch (e) { return; }
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    const next = (fn) => (video.requestVideoFrameCallback ? video.requestVideoFrameCallback(fn) : requestAnimationFrame(fn));
    const loop = () => {
        if (stopped) return;
        draw();
        if (!video.ended) next(loop);
    };

    let looping = false;
    const begin = () => {
        if (looping) return;
        looping = true; started = true;
        fallback.classList.remove('show'); canvas.style.display = '';
        next(loop);
    };
    video.addEventListener('playing', begin);
    if (!video.paused && video.readyState >= 3) begin();       // بدأ التشغيل التلقائي قبل تسجيل المستمع
    video.addEventListener('ended', draw);                       // تثبيت آخر إطار (اللوجو كاملاً)
    video.addEventListener('error', showFallback);

    video.muted = true;                                          // مطلوب ليعمل التشغيل التلقائي
    const p = video.play();
    if (p && p.catch) p.catch(showFallback);                     // التشغيل التلقائي ممنوع (مثلاً توفير الطاقة)
    setTimeout(() => { if (!video.paused && video.currentTime > 0) begin(); else showFallback(); }, 3000);                              // إن لم يبدأ الفيديو خلال 3 ثوانٍ

    return { stop() { stopped = true; video.pause(); } };
}

/* ---------- تسجيل الدخول ----------
   ملاحظة: الموقع ثابت (GitHub Pages) فالتحقق يتم داخل المتصفح. كلمات المرور محفوظة كبصمة SHA-256 وليست نصاً صريحاً،
   لكن هذا يمنع الدخول العابر فقط ولا يعتبر حماية حقيقية للبيانات. */
const USERS = [
    {"id": "admin", "names": ["admin"], "hash": "93dbdae2e2db0932575220b3ac8d594f2bc0f913d055129c50f97d69f060737f"},
    {"id": "nafeeseh", "names": ["nafeesehsweets"], "hash": "fbe733c4098d707c547159a094e0dd8c19ff4ee2e291c1b151375562dd6d8495", "label": "حلويات نفيسة", "start": "umm_naaj", "pdf": "highway-price-list-nafeeseh-sweets.pdf"},
    {"id": "hamada", "names": ["hamada", "hamadarestaurant"], "hash": "296697541a161e1ef9b430de8ef2f99e03fccf730f011c243aa48593f3fbb81d", "label": "مطعم حماده", "start": "sarou", "pdf": "highway-price-list-hamada.pdf"},
    {"id": "bullgurz", "names": ["bullgurz"], "hash": "7b40402d842b747ece3a432b164f727a2ffc060e9ed45a2a082953e68408ba2c", "label": "Bullgurz", "start": "sarou", "pdf": "highway-price-list-bullgurz.pdf"},
    {"id": "abuahmad", "names": ["abuahamdalnsourresturantformansaf", "abuahmadalnsourrestaurantformansaf"], "hash": "1c41b5af77c79558c0a85b8ed1e399b7abbed3a98bdf2374ed1bd06f6fe3e420", "label": "مطعم أبو أحمد النسور للمناسف", "start": "sarou", "pdf": "highway-price-list-abu-ahmad-nsour.pdf"},
    {"id": "reef", "names": ["alreefshawarma"], "hash": "dd7d8c10d09c8060c1204030ddc8e50c846cef42caf3d423f3cb733b32299115", "label": "شاورما الريف", "start": "sarou", "pdf": "highway-price-list-al-reef-shawarma.pdf"},
    {"id": "abusaleh", "names": ["abusalehcoffee"], "hash": "cff730ea7641b04c3f370e41c06d80c3312d9a4b9d339142e7b0e789907e07d0", "label": "قهوة أبو صالح", "start": "sarou", "pdf": "highway-price-list-abu-saleh-coffee.pdf"},
    {"id": "gulf", "names": ["gulfrestaurant"], "hash": "a72741290d3a7e4e653853b2af3d67f2256e19236e85d9d42b6debd829b31306", "label": "مطعم الخليج", "start": "sarou", "pdf": "highway-price-list-gulf-restaurant.pdf"},
    {"id": "julnar", "names": ["julnarpastries"], "hash": "cd351c245ecdb1836f396287440277d8452e03e05a14a334f9d9301b46a4410a", "label": "معجنات جلنار", "start": "sarou", "pdf": "highway-price-list-julnar-pastries.pdf"},
];

const SESSION_KEY = 'hw-user';
let currentUser = null;          // null = لا أحد، وغير ذلك سجل المستخدم من USERS

function normUser(v) { return String(v || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

/* SHA-256 (تعمل حتى إن لم يتوفر crypto.subtle) */
function sha256(str) {
    const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    const bytes = Array.from(new TextEncoder().encode(str));
    const bitLen = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    for (let i = 7; i >= 0; i--) bytes.push(i >= 4 ? 0 : (bitLen >>> (i * 8)) & 255);
    let h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < bytes.length; o += 64) {
        const w = new Array(64);
        for (let i = 0; i < 16; i++) w[i] = (bytes[o+i*4]<<24)|(bytes[o+i*4+1]<<16)|(bytes[o+i*4+2]<<8)|bytes[o+i*4+3];
        for (let i = 16; i < 64; i++) {
            const s0 = rotr(w[i-15],7) ^ rotr(w[i-15],18) ^ (w[i-15]>>>3);
            const s1 = rotr(w[i-2],17) ^ rotr(w[i-2],19) ^ (w[i-2]>>>10);
            w[i] = (w[i-16] + s0 + w[i-7] + s1) | 0;
        }
        let [a,b,c,d,e,f,g,hh] = h;
        for (let i = 0; i < 64; i++) {
            const t1 = (hh + (rotr(e,6)^rotr(e,11)^rotr(e,25)) + ((e&f)^(~e&g)) + K[i] + w[i]) | 0;
            const t2 = ((rotr(a,2)^rotr(a,13)^rotr(a,22)) + ((a&b)^(a&c)^(b&c))) | 0;
            hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
        }
        h = [h[0]+a|0,h[1]+b|0,h[2]+c|0,h[3]+d|0,h[4]+e|0,h[5]+f|0,h[6]+g|0,h[7]+hh|0];
    }
    return h.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
}

function findUserByName(name) {
    const n = normUser(name);
    return n ? USERS.find(u => u.names.includes(n)) || null : null;
}

function readSession() {
    let id = null;
    try { id = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY); } catch (e) {}
    return USERS.find(u => u.id === id) || null;
}
function saveSession(user, remember) {
    try {
        localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY);
        (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, user.id);
    } catch (e) {}
}
function clearSession() {
    try { localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
}

/* تطبيق المستخدم على الواجهة: الترحيب + شكل قوائم الأسعار */
function applyUser(user) {
    currentUser = user;
    document.getElementById('homeTitle').textContent = user && user.label ? `أهلًا بك، ${user.label}` : 'أهلًا بك';
    document.getElementById('saltDesc').textContent = user && user.start
        ? 'قائمة أسعار التوصيل لمناطق السلط'
        : 'قائمة أسعار مستقلة لكل من السرو وأم النعاج';
    document.getElementById('logoutBtn').style.display = user ? 'flex' : 'none';
}

function showLogin(show, instant) {
    const el = document.getElementById('login');
    if (instant) el.style.transition = 'none';
    el.classList.toggle('hide', !show);
    if (instant) { void el.offsetWidth; el.style.transition = ''; }
}

async function submitLogin(ev) {
    ev.preventDefault();
    const err = document.getElementById('loginError');
    const nameEl = document.getElementById('loginUser');
    const passEl = document.getElementById('loginPass');
    const btn = document.getElementById('loginBtn');
    err.textContent = '';
    ['loginUserField', 'loginPassField'].forEach(id => document.getElementById(id).classList.remove('invalid'));

    if (!nameEl.value.trim()) { document.getElementById('loginUserField').classList.add('invalid'); err.textContent = 'الرجاء إدخال اسم المستخدم'; return; }
    if (!passEl.value) { document.getElementById('loginPassField').classList.add('invalid'); err.textContent = 'الرجاء إدخال كلمة المرور'; return; }

    btn.classList.add('loading');
    await new Promise(r => setTimeout(r, 350));
    const user = findUserByName(nameEl.value);
    const ok = user && sha256(`HIGHWAY|${user.id}|${passEl.value}`) === user.hash;
    btn.classList.remove('loading');

    if (!ok) {
        document.getElementById('loginUserField').classList.add('invalid');
        document.getElementById('loginPassField').classList.add('invalid');
        err.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
        passEl.value = '';
        return;
    }
    saveSession(user, document.getElementById('loginRemember').checked);
    passEl.value = '';
    applyUser(user);
    resetAndGo('screen-home');
    showLogin(false);
}

function togglePass() {
    const p = document.getElementById('loginPass');
    const show = p.type === 'password';
    p.type = show ? 'text' : 'password';
    document.getElementById('passToggle').setAttribute('aria-label', show ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور');
    document.getElementById('passToggle').classList.toggle('on', show);
}

function logout() {
    clearSession();
    try { sessionStorage.setItem('hw-skip-splash', '1'); } catch (e) {}
    location.reload();
}

/* ---------- التنقل ---------- */
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('headerBack').classList.toggle('show', id !== 'screen-home');
    window.scrollTo({ top: 0, behavior: 'auto' });
    // كل صفحة تُفتح "نظيفة" كأنها حُمّلت من جديد
    const q = document.getElementById('searchInput');
    if (q && id === 'screen-list' && q.value) { q.value = ''; if (typeof filterList === 'function') filterList(); }
}

/* الضغط على اللوجو: إعادة تحميل الموقع (بدون إعادة شاشة الدخول) */
function reloadSite() {
    try { sessionStorage.setItem('hw-skip-splash', '1'); } catch (e) {}
    location.reload();
}

function goTo(id) {
    if (screenStack[screenStack.length - 1] !== id) screenStack.push(id);
    showScreen(id);
}

function goBack() {
    if (screenStack.length > 1) {
        screenStack.pop();
        showScreen(screenStack[screenStack.length - 1]);
    }
}

function resetAndGo(id) {
    screenStack = ['screen-home'];
    if (id !== 'screen-home') screenStack.push(id);
    showScreen(id);
}

function setRegion(region) {
    currentRegion = region;
    if (currentUser && currentUser.start) {      // متجر: نقطة البدء ثابتة، لا نعرض الخيارات
        selectStartPoint(currentUser.start);
        return;
    }
    goTo('screen-start');
}

function selectStartPoint(point) {
    currentStartPoint = point;
    generateList();
    goTo('screen-list');
}

/* ---------- الترتيب الأبجدي (كأن "ال" التعريف غير موجودة) ---------- */
function sortKey(name) {
    return String(name)
        .replace(/[ً-ٰٟ]/g, '')   // التشكيل
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/[()]/g, ' ')
        .trim()
        .split(/\s+/)
        .map(w => (w.length > 3 && w.startsWith('ال')) ? w.slice(2) : w)
        .join(' ');
}

function compareNames(a, b) {
    const ka = sortKey(a.n), kb = sortKey(b.n);
    return ka < kb ? -1 : (ka > kb ? 1 : 0);
}

/* ---------- القائمة ---------- */
const START_LABELS = { sarou: 'السرو', umm_naaj: 'أم النعاج' };
const PDF_FILES = { sarou: 'highway-price-list-saro.pdf', umm_naaj: 'highway-price-list-umm-naaj.pdf' };
const REGION_TITLES ={ salt: 'التوصيل لمناطق السلط', amman: 'التوصيل لمناطق عمان' };

function generateList() {
    // كل نقطة انطلاق لها قائمتها الخاصة (السرو / أم النعاج)
    const source = (PRICES[currentStartPoint] || {})[currentRegion] || [];
    currentList = [...source].sort(compareNames);

    currentStartName = (currentUser && currentUser.label) || START_LABELS[currentStartPoint];

    document.getElementById('listTitle').textContent = REGION_TITLES[currentRegion];
    document.getElementById('listSub').innerHTML =
        `<span class="route-pill ${currentStartPoint === 'sarou' ? 'sarou' : 'umm'}">` +
        `<i class="dot"></i>قائمة أسعار ${currentStartName}</span>`;
    document.getElementById('searchInput').value = '';

    // زر الطباعة / التحميل: قائمة الأسعار الرسمية (PDF) الخاصة بنقطة الانطلاق المختارة
    const pdfUrl = (currentUser && currentUser.pdf) || PDF_FILES[currentStartPoint];
    document.getElementById('pdfLink').href = pdfUrl;

    renderList(currentList);
}

function renderList(list) {
    const container = document.getElementById('pricesContainer');
    container.innerHTML = '';

    if (!list.length) {
        container.innerHTML = '<div class="empty-state">لا توجد نتائج مطابقة</div>';
        return;
    }

    list.forEach(item => {
        const note = item.n.includes('جامعة')
            ? '<span class="uni-note">يضاف 0.50 دينار لدخول الجامعة</span>'
            : '';

        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'price-row';
        el.innerHTML = `
            <span class="nm">
                <span class="item-name">${item.n}</span>
                ${note}
            </span>
            <span class="item-price">${item.p}</span>
        `;
        el.addEventListener('click', () => {
            openOrderModal('area', { area: item.n, price: item.p, startPoint: currentStartName });
        });
        container.appendChild(el);
    });
}

function filterList() {
    const raw = document.getElementById('searchInput').value.trim();
    const q = sortKey(raw);
    if (!q) { renderList(currentList); return; }
    // البحث يتجاهل "ال" التعريف والهمزات
    renderList(currentList.filter(item => sortKey(item.n).includes(q) || item.n.includes(raw)));
}

/* ---------- الحاسبة ---------- */
const KM_PRICE = 0.35;   // سعر الكيلومتر بدون فتحة عداد
const MIN_FARE = 1.50;   // أقل سعر توصيل

function calculateTotal() {
    const input = document.getElementById('distanceInput');
    const resDisplay = document.getElementById('calcResult');
    const minNote = document.getElementById('minFareNote');
    const dist = parseFloat(input.value);

    document.getElementById('distanceField').classList.remove('invalid');

    if (isNaN(dist) || dist <= 0) {
        calcState = { dist: '', total: '0.00' };
        resDisplay.innerHTML = '0.00 <small>JOD</small>';
        minNote.classList.remove('show');
        return;
    }
    const raw = dist * KM_PRICE;
    const total = Math.max(raw, MIN_FARE).toFixed(2);
    calcState = { dist: input.value, total };
    resDisplay.innerHTML = total + ' <small>JOD</small>';
    minNote.classList.toggle('show', raw < MIN_FARE);   // تنبيه عند تطبيق الحد الأدنى
}

/* ---------- نافذة تفاصيل الطلب ---------- */
function openOrderModal(type, data = {}) {
    if (type === 'calc') {
        const dist = parseFloat(document.getElementById('distanceInput').value);
        if (isNaN(dist) || dist <= 0) {
            document.getElementById('distanceField').classList.add('invalid');
            document.getElementById('distanceInput').focus();
            return;
        }
    }

    pendingOrderData = { type, ...data };
    document.getElementById('modalOrderValue').value = '';
    document.getElementById('modalOrderNotes').value = '';

    const summary = document.getElementById('modalSummary');
    if (type === 'area') {
        summary.style.display = 'flex';
        summary.innerHTML =
            `<span>من: ${data.startPoint}</span><span>إلى: ${data.area}</span><span>السعر: ${data.price} دينار</span>`;
    } else if (type === 'calc') {
        summary.style.display = 'flex';
        summary.innerHTML =
            `<span>المسافة: ${calcState.dist} كم</span><span>السعر التقديري: ${calcState.total} JOD</span>`;
    } else {
        summary.style.display = 'none';
        summary.innerHTML = '';
    }

    document.getElementById('orderModal').classList.add('show');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
}

function submitOrder() {
    const val = document.getElementById('modalOrderValue').value.trim() || "غير محدد";
    const notes = document.getElementById('modalOrderNotes').value.trim() || "لا يوجد";
    let baseMsg = "";
    let refText = "";

    if (pendingOrderData.type === 'direct') {
        baseMsg = `مرحباً، أود استدعاء كابتن من فضلك.`;
    } else if (pendingOrderData.type === 'area') {
        baseMsg = `مرحباً HIGHWAY Delivery، أريد طلب كابتن:\n- نقطة البدء: ${pendingOrderData.startPoint}\n- الوجهة: ${pendingOrderData.area}\n- السعر: ${pendingOrderData.price} دينار`;
        refText = `${pendingOrderData.startPoint} ← ${pendingOrderData.area}`;
    } else if (pendingOrderData.type === 'calc') {
        baseMsg = `مرحباً، طلب كابتن (حساب بالكيلو):\n- المسافة: ${calcState.dist} كم\n- السعر التقديري: ${calcState.total} JOD`;
        refText = `${calcState.dist} كم • ${calcState.total} JOD`;
    }

    const finalMsg = `${baseMsg}\n- قيمة الطلب: ${val}\n- ملاحظات: ${notes}`;
    const url = `https://wa.me/?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');

    closeOrderModal();

    const ref = document.getElementById('successRef');
    if (refText) {
        ref.textContent = refText;
        ref.style.display = 'inline-block';
    } else {
        ref.style.display = 'none';
    }
    goTo('screen-success');
}

/* ---------- نافذة قيد التجهيز ---------- */
function showConstruction() {
    document.getElementById('constructionModal').classList.add('show');
}
function closeConstruction() {
    document.getElementById('constructionModal').classList.remove('show');
}

/* ---------- تشغيل ---------- */
document.addEventListener('DOMContentLoaded', () => {
    buildSplashIcons();
    let skipSplash = false;
    try { skipSplash = sessionStorage.getItem('hw-skip-splash') === '1'; sessionStorage.removeItem('hw-skip-splash'); } catch (e) {}
    if (skipSplash) {
        const sp = document.getElementById('splash');
        sp.style.transition = 'none'; sp.classList.add('hide');
    }

    // تسجيل الدخول: مستخدم محفوظ يدخل مباشرة، وغيره تظهر له شاشة الدخول بعد الشاشة الافتتاحية
    const saved = readSession();
    applyUser(saved);
    showLogin(!saved, true);
    document.getElementById('loginForm').addEventListener('submit', submitLogin);

    const splash = document.getElementById('splash');
    const intro = skipSplash ? null : initIntroVideo();
    document.getElementById('enterBtn').addEventListener('click', () => {
        splash.classList.add('hide');
        if (intro) setTimeout(intro.stop, 800);          // توفير للبطارية بعد إخفاء الشاشة
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeOrderModal();
            closeConstruction();
        }
    });
});
