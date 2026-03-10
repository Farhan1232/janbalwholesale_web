// All products with real Unsplash HD image URLs
// Unsplash Source API: https://images.unsplash.com/photo-{ID}?w=600&q=80

export const UNSPLASH_IMAGES = {
  // iPhone Cases
  iphoneCase1: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80',
  iphoneCase2: 'https://images.unsplash.com/photo-1570101945621-945409a6370f?w=600&q=80',
  iphoneCase3: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80',
  iphoneCase4: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80',
  iphoneCase5: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
  iphoneCase6: 'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80',
  // Powerbanks / Chargers
  powerbank1: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80',
  powerbank2: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  charger1: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  charger2: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&q=80',
  cable1: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
  // Headphones / Earbuds
  headphones1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  headphones2: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
  earbuds1: 'https://images.unsplash.com/photo-1590658268037-6bf12165cd8f?w=600&q=80',
  earbuds2: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80',
  // Smartwatches
  smartwatch1: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
  smartwatch2: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
  smartwatch3: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
  // Smartphones
  smartphone1: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  smartphone2: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&q=80',
  smartphone3: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80',
  // Tablets
  tablet1: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
  tablet2: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80',
  // Speakers
  speaker1: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
  speaker2: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
  // Car accessories
  car1: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
  // Hero / banner images
  hero1: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80',
  hero2: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=1200&q=80',
  hero3: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
  // MagSafe
  magsafe1: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1d?w=600&q=80',
  magsafe2: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80',
  // Microphone
  mic1: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
};

// CATEGORIES with proper slugs and icons
export const CATEGORIES = [
  { label: 'Mobile Covers', slug: 'mobile-covers', icon: '📱', count: '2,400+', color: '#3b82f6', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80' },
  { label: 'Earbuds', slug: 'earbuds', icon: '🎧', count: '380+', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80' },
  { label: 'SmartWatches', slug: 'smartwatches', icon: '⌚', count: '160+', color: '#10b981', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { label: 'PowerBanks', slug: 'powerbanks', icon: '🔋', count: '220+', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80' },
  { label: 'Data Cables', slug: 'cables', icon: '🔌', count: '340+', color: '#ef4444', img: 'https://images.unsplash.com/photo-1756043827134-dcc8ac7462f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGF0YSUyMGNhYmxlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { label: 'Chargers', slug: 'chargers', icon: '⚡', count: '290+', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmdlcnN8ZW58MHx8MHx8fDA%3D' },
  { label: 'Speakers', slug: 'speakers', icon: '🔊', count: '140+', color: '#f97316', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80' },
  { label: 'Tablets', slug: 'tablets', icon: '📟', count: '90+', color: '#6366f1', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
  { label: 'Car Accessories', slug: 'car-accessories', icon: '🚗', count: '180+', color: '#84cc16', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80' },
  { label: 'Headphones', slug: 'headphones', icon: '🎵', count: '200+', color: '#ec4899', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
];

// BRANDS with proper slugs
export const BRANDS = [
  { name: 'Apple', slug: 'apple', logo: '🍎', color: '#000', tagline: 'iPhone & MagSafe Accessories', count: '420+' },
  { name: 'Samsung', slug: 'samsung', logo: '📡', color: '#1428A0', tagline: 'Galaxy Covers, Chargers & More', count: '380+' },
  { name: 'Anker', slug: 'anker', logo: '⚡', color: '#00B2A9', tagline: 'PowerBanks, Chargers & Cables', count: '290+' },
  { name: 'Baseus', slug: 'baseus', logo: '🔌', color: '#F7C600', tagline: 'GaN Chargers & Accessories', count: '340+' },
  { name: 'Ugreen', slug: 'ugreen', logo: '🟢', color: '#00A651', tagline: 'USB Hubs, Cables & Adapters', count: '260+' },
  { name: 'JBL', slug: 'jbl', logo: '🔊', color: '#F05A28', tagline: 'Wireless Audio & Speakers', count: '120+' },
  { name: 'Xiaomi', slug: 'xiaomi', logo: '📱', color: '#FF6900', tagline: 'Earbuds, Watches & Accessories', count: '200+' },
  { name: 'Pitaka', slug: 'pitaka', logo: '💎', color: '#2C3E50', tagline: 'Premium MagEZ Cases', count: '80+' },
  { name: 'Mcdodo', slug: 'mcdodo', logo: '🔶', color: '#E67E22', tagline: 'Fast Charging Cables & Chargers', count: '150+' },
  { name: 'Boya', slug: 'boya', logo: '🎙', color: '#C0392B', tagline: 'Professional Microphones', count: '60+' },
  { name: 'A4Tech', slug: 'a4tech', logo: '🖥', color: '#2980B9', tagline: 'PC Peripherals & Accessories', count: '90+' },
  { name: 'JisuLife', slug: 'jisulife', logo: '💨', color: '#E74C3C', tagline: 'Portable Fans & Cooling', count: '40+' },
];

// ALL PRODUCTS - no prices, proper names, real Unsplash images
export const ALL_PRODUCTS = [
  // Mobile Covers
  {
    id: 1, slug: 'iphone-17-pro-max-diamond-bling-case',
    name: 'iPhone 17 Pro Max Diamond Bling Full Camera Lens Protector Case',
    brand: 'Apple', brandSlug: 'apple',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://images.pexels.com/photos/14199143/pexels-photo-14199143.png?_gl=1*10yla3u*_ga*NTQ2NDEwMzc3LjE3NjY0NjU2MDA.*_ga_8JE65Q40S6*czE3NzMxNDMxNTkkbzQkZzEkdDE3NzMxNDMxNjQkajU1JGwwJGgw',
    tag: 'NEW', featured: true, deal: false,
    colors: ['#C0C0C0', '#FFD700', '#FF69B4'],
    description: 'Full camera lens protection with premium diamond-studded bling design. Compatible with iPhone 17 Pro Max MagSafe.',
  },
  {
    id: 2, slug: 'pitaka-magsafe-wallet-case',
    name: 'Pitaka MagEZ Case Pro with Woven Tech MagSafe Wallet',
    brand: 'Pitaka', brandSlug: 'pitaka',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJWB4TpTRnIalyvpEJS20N4C9YWPeGQ05g&s',
    tag: 'PREMIUM', featured: true, deal: true,
    colors: ['#2C3E50', '#8B4513', '#1a3a6e', '#228B22'],
    description: 'Ultra-slim woven aramid fibre case with integrated MagSafe wallet. Premium protection with minimalist design.',
  },
  {
    id: 3, slug: 'xlevel-skin-feel-leather-case',
    name: 'X-Level Skin Feel Premium Leather Case – iPhone 17 Series',
    brand: 'X-Level', brandSlug: 'apple',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://img.freepik.com/premium-photo/set-premium-leather-phone-cases-with-magnetic-w_1022456-314222.jpg?ga=GA1.1.1051073050.1773143324&semt=ais_hybrid&w=740&q=80',
    tag: 'BESTSELLER', featured: true, deal: false,
    colors: ['#36454F', '#8B7355'],
    description: 'Premium soft-touch leather finish case with precise cutouts and raised bezel protection.',
  },
  {
    id: 4, slug: 'apple-silicone-magsafe-case-orange',
    name: 'Apple Official Silicone Case with MagSafe – Burnt Orange',
    brand: 'Apple', brandSlug: 'apple',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://images.pexels.com/photos/12708808/pexels-photo-12708808.jpeg?_gl=1*lgyxrt*_ga*NTQ2NDEwMzc3LjE3NjY0NjU2MDA.*_ga_8JE65Q40S6*czE3NzMxNDMxNTkkbzQkZzEkdDE3NzMxNDQ4NTIkajMwJGwwJGgw',
    tag: 'OFFICIAL', featured: true, deal: false,
    colors: ['#FF8C00', '#FFFFFF', '#000000'],
    description: 'Official Apple silicone case with MagSafe compatibility. Soft microfibre lining and precise fit.',
  },
  {
    id: 5, slug: 'techwoven-slim-premium-case',
    name: 'TechWoven Slim Premium Woven Textile Case – MagSafe',
    brand: 'Pitaka', brandSlug: 'pitaka',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://i.pinimg.com/1200x/72/47/4e/72474ed127815c3f16caa14b83bc4144.jpg',
    tag: 'NEW', featured: false, deal: false,
    colors: ['#1C1C1C', '#4A4A4A'],
    description: 'Lightweight woven textile case with built-in MagSafe support. Military-grade drop protection.',
  },
  {
    id: 6, slug: 'samsung-galaxy-s25-ultra-case',
    name: 'Samsung Galaxy S25 Ultra Official Silicone Cover',
    brand: 'Samsung', brandSlug: 'samsung',
    category: 'Mobile Covers', categorySlug: 'mobile-covers',
    img: 'https://i.pinimg.com/1200x/70/08/4b/70084bf3a3f26b75ffd83f070104b8ef.jpg',
    tag: 'OFFICIAL', featured: false, deal: true,
    colors: ['#1428A0', '#000000', '#FFFFFF'],
    description: 'Official Samsung silicone cover with S Pen slot for Galaxy S25 Ultra. Precise fit and premium feel.',
  },
  // PowerBanks
  {
    id: 7, slug: 'anker-powercore-20000',
    name: 'Anker PowerCore III 20,000mAh Portable Charger with USB-C PD',
    brand: 'Anker', brandSlug: 'anker',
    category: 'PowerBanks', categorySlug: 'powerbanks',
    img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80',
    tag: 'BESTSELLER', featured: true, deal: true,
    colors: ['#000000', '#1C6EA4'],
    description: 'Massive 20,000mAh capacity with 60W Power Delivery. Charge two devices simultaneously with intelligent power management.',
  },
  {
    id: 8, slug: 'baseus-powerbank-65w',
    name: 'Baseus Adaman Metal PowerBank 65W 20,000mAh Fast Charge',
    brand: 'Baseus', brandSlug: 'baseus',
    category: 'PowerBanks', categorySlug: 'powerbanks',
    img: 'https://i.pinimg.com/736x/40/bb/22/40bb22eac818c3f0216b431d1afb2111.jpg',
    tag: 'NEW', featured: true, deal: false,
    colors: ['#F7C600', '#000000'],
    description: 'Metal body power bank with 65W super-fast charging. Digital LED display showing precise battery percentage.',
  },
  // Chargers
  {
    id: 9, slug: 'baseus-gan-65w-charger',
    name: 'Baseus GaN 65W USB-C Triple Port Fast Charger – UK Plug',
    brand: 'Baseus', brandSlug: 'baseus',
    category: 'Chargers', categorySlug: 'chargers',
    img: 'https://i.pinimg.com/1200x/0f/86/2a/0f862a798fbde395eaa0b605fc417030.jpg',
    tag: 'FAST', featured: true, deal: true,
    colors: ['#F7C600', '#FFFFFF'],
    description: 'GaN technology 65W charger with 2x USB-C and 1x USB-A ports. Supports MacBook, iPad, and iPhone fast charging.',
  },
  {
    id: 10, slug: 'anker-nano-45w-charger',
    name: 'Anker Nano II 45W GaN Fast Charger – Compact UK Plug',
    brand: 'Anker', brandSlug: 'anker',
    category: 'Chargers', categorySlug: 'chargers',
    img: 'https://i.pinimg.com/1200x/54/02/56/5402566488a5f0409379430effaf731e.jpg',
    tag: 'HOT', featured: false, deal: true,
    colors: ['#000000'],
    description: 'Ultra-compact 45W GaN charger. 55% smaller than standard laptop charger. Compatible with all USB-C devices.',
  },
  {
    id: 11, slug: 'samsung-45w-super-fast-charger',
    name: 'Samsung 45W Super Fast Charging Adapter – UK Plug',
    brand: 'Samsung', brandSlug: 'samsung',
    category: 'Chargers', categorySlug: 'chargers',
    img: 'https://i.pinimg.com/1200x/d6/ec/5b/d6ec5b040878d9b6993c1a9438865266.jpg',
    tag: 'OFFICIAL', featured: false, deal: false,
    colors: ['#1428A0', '#FFFFFF'],
    description: 'Official Samsung 45W Super Fast Charging adapter for Galaxy S series. Compatible with all USB-C Power Delivery devices.',
  },
  // Headphones
  {
    id: 12, slug: 'jbl-tune-770nc-headphones',
    name: 'JBL Tune 770NC Wireless Over-Ear Headphones with ANC',
    brand: 'JBL', brandSlug: 'jbl',
    category: 'Headphones', categorySlug: 'headphones',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    tag: 'HOT', featured: true, deal: true,
    colors: ['#F05A28', '#000000', '#FFFFFF', '#0000FF'],
    description: 'JBL Pure Bass Sound, 70 hours playtime, Adaptive Noise Cancellation, and foldable design for travel.',
  },
  {
    id: 13, slug: 'sony-wh1000xm5-style-headphones',
    name: 'Premium Over-Ear ANC Headphones with 30-Hour Battery',
    brand: 'A4Tech', brandSlug: 'a4tech',
    category: 'Headphones', categorySlug: 'headphones',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
    tag: 'NEW', featured: false, deal: false,
    colors: ['#000000', '#C0C0C0'],
    description: 'Industry-leading noise cancellation with 30-hour battery life. Multi-device Bluetooth connection.',
  },
  // Earbuds
  {
    id: 14, slug: 'xiaomi-redmi-buds-5-pro',
    name: 'Xiaomi Redmi Buds 5 Pro ANC True Wireless Earbuds',
    brand: 'Xiaomi', brandSlug: 'xiaomi',
    category: 'Earbuds', categorySlug: 'earbuds',
    img: 'https://i.pinimg.com/1200x/7c/7d/1c/7c7d1c92a4c3cd7d318180f5e26486a5.jpg',
    tag: 'NEW', featured: true, deal: true,
    colors: ['#FF6900', '#FFFFFF', '#000000'],
    description: 'Hi-Res Audio with LDAC, 52-hour total playtime with ANC, dual device connection, and IP54 water resistance.',
  },
  {
    id: 15, slug: 'baseus-bowie-m2-earbuds',
    name: 'Baseus Bowie M2 True Wireless Earbuds with ANC 30dB',
    brand: 'Baseus', brandSlug: 'baseus',
    category: 'Earbuds', categorySlug: 'earbuds',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80',
    tag: 'HOT', featured: true, deal: false,
    colors: ['#F7C600', '#FFFFFF'],
    description: '30dB active noise cancellation with 9.2mm dynamic driver. Fast charge: 5 mins = 1 hour playback.',
  },
  // SmartWatches
  {
    id: 16, slug: 'samsung-galaxy-watch7',
    name: 'Samsung Galaxy Watch 7 44mm LTE – Official UK Stock',
    brand: 'Samsung', brandSlug: 'samsung',
    category: 'SmartWatches', categorySlug: 'smartwatches',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    tag: 'NEW', featured: true, deal: false,
    colors: ['#1428A0', '#000000', '#C0C0C0'],
    description: 'Galaxy AI-powered health features, 40-hour battery, advanced sleep coaching, and 3ATM water resistance.',
  },
  {
    id: 17, slug: 'xiaomi-band-9-smartwatch',
    name: 'Xiaomi Smart Band 9 with 2-Week Battery & AMOLED Display',
    brand: 'Xiaomi', brandSlug: 'xiaomi',
    category: 'SmartWatches', categorySlug: 'smartwatches',
    img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
    tag: 'HOT', featured: true, deal: true,
    colors: ['#FF6900', '#000000', '#FFFFFF'],
    description: '2-week battery life, AMOLED always-on display, SpO2 monitoring, 150+ sport modes.',
  },
  {
    id: 18, slug: 'apple-watch-series-10-band',
    name: 'Apple Watch Series 10 Sport Loop Band – Official',
    brand: 'Apple', brandSlug: 'apple',
    category: 'SmartWatches', categorySlug: 'smartwatches',
    img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
    tag: 'OFFICIAL', featured: false, deal: false,
    colors: ['#000000', '#FF8C00', '#87CEEB'],
    description: 'Official Apple Watch Sport Loop band, lightweight breathable woven nylon with hook-and-loop fastener.',
  },
  // Tablets
  {
    id: 19, slug: 'apple-ipad-air-case',
    name: 'Apple iPad Air M2 Smart Folio Case – Official',
    brand: 'Apple', brandSlug: 'apple',
    category: 'Tablets', categorySlug: 'tablets',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
    tag: 'OFFICIAL', featured: false, deal: false,
    colors: ['#000000', '#8B0000', '#87CEEB'],
    description: 'Official Apple Smart Folio case for iPad Air M2. Auto wake/sleep, full front protection with Apple Pencil support.',
  },
  {
    id: 20, slug: 'samsung-galaxy-tab-s9-case',
    name: 'Samsung Galaxy Tab S9 Book Cover Keyboard – Official',
    brand: 'Samsung', brandSlug: 'samsung',
    category: 'Tablets', categorySlug: 'tablets',
    img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80',
    tag: 'NEW', featured: false, deal: false,
    colors: ['#1428A0', '#000000'],
    description: 'Official Samsung Book Cover Keyboard with trackpad for Galaxy Tab S9. Backlit keys, multiple stand angles.',
  },
  // Speakers
  {
    id: 21, slug: 'jbl-charge-5-bluetooth-speaker',
    name: 'JBL Charge 5 Portable Waterproof Bluetooth Speaker',
    brand: 'JBL', brandSlug: 'jbl',
    category: 'Speakers', categorySlug: 'speakers',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    tag: 'BESTSELLER', featured: true, deal: false,
    colors: ['#F05A28', '#000000', '#0000FF', '#228B22'],
    description: 'IP67 waterproof rating, 20-hour battery, USB-C charging port, and JBL PartyBoost for pairing multiple speakers.',
  },
  {
    id: 22, slug: 'baseus-wireless-desktop-speaker',
    name: 'Baseus AeQur V2 Wireless Portable Speaker 30W',
    brand: 'Baseus', brandSlug: 'baseus',
    category: 'Speakers', categorySlug: 'speakers',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
    tag: 'NEW', featured: false, deal: true,
    colors: ['#000000', '#FFFFFF'],
    description: '360° surround sound, RGB LED lighting, 12-hour playtime, IPX6 waterproof, and EQ modes.',
  },
  // Cables
  {
    id: 23, slug: 'mcdodo-100w-usbc-cable',
    name: 'Mcdodo 100W USB-C to USB-C Fast Charging Cable – 1.2m',
    brand: 'Mcdodo', brandSlug: 'mcdodo',
    category: 'Data Cables', categorySlug: 'cables',
    img: 'https://i.pinimg.com/736x/bd/56/fc/bd56fcbbaa746c92d3ce27ad2cb0e714.jpg',
    tag: 'FAST', featured: false, deal: false,
    colors: ['#E67E22', '#000000'],
    description: '100W fast charging, 480Mbps data transfer, nylon braided, 25,000+ bend cycles. Compatible with all USB-C devices.',
  },
  {
    id: 24, slug: 'ugreen-usbc-lightning-cable',
    name: 'Ugreen MFi USB-C to Lightning Cable 3A Fast Charge – 2m',
    brand: 'Ugreen', brandSlug: 'ugreen',
    category: 'Data Cables', categorySlug: 'cables',
    img: 'https://i.pinimg.com/1200x/dd/25/75/dd25755a6dea57ed1ee7ee26437b753c.jpg',
    tag: 'MFi', featured: false, deal: false,
    colors: ['#00A651', '#FFFFFF'],
    description: 'Apple MFi certified, 3A fast charging for all iPhone models. Durable nylon braiding, 90° connector option.',
  },
  // Car Accessories
  {
    id: 25, slug: 'baseus-magnetic-car-mount',
    name: 'Baseus Magnetic MagSafe Car Phone Holder – Dashboard',
    brand: 'Baseus', brandSlug: 'baseus',
    category: 'Car Accessories', categorySlug: 'car-accessories',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
    tag: 'NEW', featured: false, deal: false,
    colors: ['#000000', '#C0C0C0'],
    description: 'Strong N52 magnet, MagSafe compatible, 360° rotation, fits all phone sizes. One-hand operation.',
  },
  // Microphone
  {
    id: 26, slug: 'boya-wireless-mic-by-wm4-pro',
    name: 'Boya BY-WM4 Pro Wireless Lavalier Microphone System',
    brand: 'Boya', brandSlug: 'boya',
    category: 'Accessories', categorySlug: 'accessories',
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    tag: 'PRO', featured: false, deal: false,
    colors: ['#000000'],
    description: '2.4GHz wireless, 60m range, compatible with iOS, Android, DSLR cameras, and computers. 6-hour battery.',
  },
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => p.featured);
export const DEAL_PRODUCTS = ALL_PRODUCTS.filter(p => p.deal);

export const getProductsByCategory = (slug) =>
  ALL_PRODUCTS.filter(p => p.categorySlug === slug);

export const getProductsByBrand = (slug) =>
  ALL_PRODUCTS.filter(p => p.brandSlug === slug);

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.description && p.description.toLowerCase().includes(q))
  );
};
