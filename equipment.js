// ============================================
// COMPLETE equipment.js FILE - REPLACE ENTIRE FILE
// ============================================

const equipmentFilters = [
    { key: 'all', label: 'All Equipment' },
    { key: 'forklift', label: 'Forklifts' },
    { key: 'bulldozer', label: 'Bulldozers' },
    { key: 'crane', label: 'Cranes' },
    { key: 'excavator', label: 'Excavators' },
    { key: 'backhoe', label: 'Backhoe Loaders' },
    { key: 'skidsteer', label: 'Skid Steer Loaders' },
    { key: 'motor-grader', label: 'Motor Graders' },
    { key: 'telehandler', label: 'Telehandlers' },
    { key: 'compactor', label: 'Compactors' },
    { key: 'roller', label: 'Rollers' },
    { key: 'mixer', label: 'Mixers' },
    { key: 'generator', label: 'Generators' },
    { key: 'compressor', label: 'Compressors' },
    { key: 'dump-truck', label: 'Dump Trucks' }
];

const equipmentItems = [
    // Forklifts
    {
        id: 1,
        name: 'Toyota 8FGCU25 Forklift',
        category: 'forklift',
        brand: 'Toyota',
        description: 'Heavy-duty forklift with 2.5-ton capacity, perfect for warehouse and construction site material handling.',
        specs: { capacity: '2.5T', power: '60 HP', lift: '6 m' },
        image: 'f11.png',
        price: 850
    },
    {
        id: 2,
        name: 'Komatsu FG25T-16 Forklift',
        category: 'forklift',
        brand: 'Komatsu',
        description: 'Rough terrain forklift with excellent stability and lifting capacity for outdoor operations.',
        specs: { capacity: '2.5T', power: '65 HP', lift: '5.5 m' },
        image: 'f22.png',
        price: 900
    },
   
    // Bulldozers
    {
        id: 3,
        name: 'CAT D6 Bulldozer',
        category: 'bulldozer',
        brand: 'Caterpillar',
        description: 'Crawler bulldozer for grading, push loads, and heavy earthmoving operations.',
        specs: { weight: '23T', power: '215 HP', blade: 'SU Blade' },
        image: 'd6.jpeg',
        price: 3200
    },
    {
        id: 4,
        name: 'Komatsu D85 Bulldozer',
        category: 'bulldozer',
        brand: 'Komatsu',
        description: 'Heavy bulldozer with excellent traction and drawbar pull for tough terrain.',
        specs: { weight: '28T', power: '264 HP', blade: 'Semi-U Blade' },
        image: 'kd.jpeg',
        price: 3500
    },
   
    // Cranes
    {
        id: 5,
        name: 'Liebherr LTM 1100 Mobile Crane',
        category: 'crane',
        brand: 'Liebherr',
        description: 'Mobile crane with 100-ton capacity and 60m telescopic boom for site lifts.',
        specs: { capacity: '100 T', boom: '60 m', drive: '6x6' },
        image: '1100.jpeg',
        price: 8500
    },
    {
        id: 6,
        name: 'Tadano Rough Terrain Crane',
        category: 'crane',
        brand: 'Tadano',
        description: 'Rough terrain crane built for off-road lifting tasks with 70-ton capacity.',
        specs: { capacity: '70 T', boom: '44 m', drive: '4x4x4' },
        image: 'terain.jpeg',
        price: 6500
    },
   
    // Excavators
    {
        id: 7,
        name: 'CAT 320 GC Excavator',
        category: 'excavator',
        brand: 'Caterpillar',
        description: '21-ton crawler excavator for general earthwork and trenching.',
        specs: { weight: '21T', power: '140 HP', bucket: '1.2 m³' },
        image: 'Gemini_Generated_Image_he3xejhe3xejhe3x.png',
        price: 2800
    },
    {
        id: 8,
        name: 'Komatsu PC210 Excavator',
        category: 'excavator',
        brand: 'Komatsu',
        description: 'Fuel-efficient digger with advanced hydraulics for tough excavation jobs.',
        specs: { weight: '22T', power: '158 HP', bucket: '1.3 m³' },
        image: 'pc2.jpeg',
        price: 3000
    },
   
    // Backhoe Loaders
    {
        id: 9,
        name: 'JCB 3DX Backhoe Loader',
        category: 'backhoe',
        brand: 'JCB',
        description: 'All-round backhoe loader ideal for utility, trenching, and loading operations.',
        specs: { weight: '8T', power: '92 HP', bucket: '1.0 m³' },
        image: '3.jpeg',
        price: 1200
    },
    {
        id: 10,
        name: 'CAT 426F2 Backhoe Loader',
        category: 'backhoe',
        brand: 'Caterpillar',
        description: 'Reliable backhoe for urban jobsites with tight maneuvering capability.',
        specs: { weight: '8.5T', power: '93 HP', bucket: '1.0 m³' },
        image: '4.jpeg',
        price: 1300
    },
   
    // Skid Steer Loaders
    {
        id: 11,
        name: 'Bobcat S650 Skid Steer',
        category: 'skidsteer',
        brand: 'Bobcat',
        description: 'Compact loader for tight spaces with high-flow attachments system.',
        specs: { weight: '3.7T', power: '74 HP', lift: '1.2T' },
        image: 'ss.jpeg',
        price: 950
    },
    {
        id: 12,
        name: 'CAT 299D3 Compact Track Loader',
        category: 'skidsteer',
        brand: 'Caterpillar',
        description: 'Track loader with excellent flotation and stability on soft ground.',
        specs: { weight: '4.6T', power: '98 HP', lift: '1.5T' },
        image: 'ctl.jpeg',
        price: 1100
    },
   
    // Motor Graders
    {
        id: 13,
        name: 'CAT 140K Motor Grader',
        category: 'motor-grader',
        brand: 'Caterpillar',
        description: 'Precision grading machine for roads with 3D-ready hydraulics system.',
        specs: { weight: '14T', power: '183 HP', moldboard: '14 ft' },
        image: 'mg.jpeg',
        price: 2400
    },
    {
        id: 14,
        name: 'John Deere 670G Grader',
        category: 'motor-grader',
        brand: 'John Deere',
        description: 'Road grader with responsive controls and reliable powertrain.',
        specs: { weight: '16T', power: '235 HP', moldboard: '14 ft' },
        image: 'g.jpeg',
        price: 2600
    },
   
    // Telehandlers
    {
        id: 15,
        name: 'Manitou MT 1840 Telehandler',
        category: 'telehandler',
        brand: 'Manitou',
        description: 'Construction telehandler with 18m reach for high placement tasks.',
        specs: { lift: '4 T', reach: '18 m', power: '100 HP' },
        image: '1840.jpeg',
        price: 1800
    },
    {
        id: 16,
        name: 'JCB 540-170 Telehandler',
        category: 'telehandler',
        brand: 'JCB',
        description: 'Versatile handler for materials and palletized loads with 17m reach.',
        specs: { lift: '4 T', reach: '17 m', power: '110 HP' },
        image: '540.jpeg',
        price: 1900
    },
   
    // Compactors
    {
        id: 17,
        name: 'HAMM HD 12 Tandem Roller',
        category: 'compactor',
        brand: 'HAMM',
        description: 'Asphalt roller for finishing layers and high-quality compaction.',
        specs: { weight: '2.6T', drum: '1200 mm', vibration: 'Dual' },
        image: 'tandomroller.jpeg',
        price: 650
    },
    {
        id: 18,
        name: 'Dynapac CA250 Soil Compactor',
        category: 'compactor',
        brand: 'Dynapac',
        description: 'Single-drum roller for earthwork and subgrade compaction.',
        specs: { weight: '12T', drum: '2130 mm', vibration: 'High/Low' },
        image: 'sc.jpeg',
        price: 1800
    },
   
    // Rollers
    {
        id: 19,
        name: 'BOMAG BW120AD-5 Roller',
        category: 'roller',
        brand: 'BOMAG',
        description: 'Vibratory roller for asphalt compaction with excellent maneuverability.',
        specs: { weight: '2.8T', drum: '1300 mm', vibration: 'Adjustable' },
        image: 'Gemini_Generated_Image_z9n53lz9n53lz9n5.png',
        price: 700
    },
    {
        id: 20,
        name: 'Sakai SW850 Roller',
        category: 'roller',
        brand: 'Sakai',
        description: 'Pneumatic rubber-tired roller for versatile compaction applications.',
        specs: { weight: '8.5T', tires: '9', pressure: 'Adjustable' },
        image: 'Gemini_Generated_Image_svk60esvk60esvk6.png',
        price: 1200
    },
   
    // Manlifts
    {
        id: 21,
        name: 'JLG 600S Manlift',
        category: 'telehandler',
        brand: 'JLG',
        description: 'Scissor lift platform with 6m working height for maintenance tasks.',
        specs: { height: '6 m', capacity: '450 kg', platform: '2.4 x 0.8 m' },
        image: 'Gemini_Generated_Image_m2uuq1m2uuq1m2uu (2).png',
        price: 450
    },
   
    // Transit Mixers
    {
        id: 22,
        name: 'Schwing Stetter Transit Mixer',
        category: 'mixer',
        brand: 'Schwing Stetter',
        description: 'Concrete mixer truck with 6m³ capacity for construction sites.',
        specs: { capacity: '6 m³', engine: '280 HP', drum: 'Reversible' },
        image: 'ChatGPT Image Dec 25, 2025, 08_55_57 AM.png',
        price: 2200
    },
   
    // Water Tankers
    {
        id: 23,
        name: 'Tata Water Tanker',
        category: 'dump-truck',
        brand: 'Tata',
        description: '10,000 liter water tanker for construction site and dust suppression.',
        specs: { capacity: '10,000 L', chassis: '4x2', engine: '180 HP' },
        image: 'ChatGPT Image Dec 25, 2025, 08_41_19 AM.png',
        price: 1500
    },
   
    // Air Compressors
    {
        id: 24,
        name: 'Atlas Copco XAS 180 Compressor',
        category: 'compressor',
        brand: 'Atlas Copco',
        description: 'Portable air compressor for construction tools and pneumatic equipment.',
        specs: { flow: '180 cfm', pressure: '7 bar', power: '45 HP' },
        image: 'ChatGPT Image Dec 25, 2025, 08_43_34 AM.png',
        price: 550
    },
   
    // Special Application Air Compressors
    {
        id: 25,
        name: 'Ingersoll Rand Oil-Free Compressor',
        category: 'compressor',
        brand: 'Ingersoll Rand',
        description: 'Oil-free air compressor for sensitive applications and clean air requirements.',
        specs: { flow: '125 cfm', pressure: '8 bar', type: 'Oil-Free' },
        image: 'ChatGPT Image Dec 25, 2025, 08_44_49 AM.png',
        price: 650
    },
   
    // Floor Sweeper
    {
        id: 26,
        name: 'Tennant S20 Floor Sweeper',
        category: 'all',
        brand: 'Tennant',
        description: 'Industrial floor sweeper for construction site cleanup and maintenance.',
        specs: { width: '2.0 m', capacity: '200 L', power: 'Electric' },
        image: 'ChatGPT Image Dec 25, 2025, 08_46_11 AM.png',
        price: 400
    },
   
    // Mobile Pump
    {
        id: 27,
        name: 'KSB Mobile Pump System',
        category: 'all',
        brand: 'KSB',
        description: 'Portable pumping system for dewatering and water transfer applications.',
        specs: { flow: '500 m³/h', head: '30 m', engine: 'Diesel' },
        image: 'ChatGPT Image Dec 25, 2025, 08_47_37 AM.png',
        price: 800
    },
   
    // Tower Light
    {
        id: 28,
        name: 'Allmand Maxi-Light Tower',
        category: 'all',
        brand: 'Allmand',
        description: 'Portable light tower with 4x1000W metal halide lamps for night work.',
        specs: { lights: '4x1000W', height: '9 m', fuel: 'Diesel' },
        image: 'ChatGPT Image Dec 25, 2025, 08_48_56 AM.png',
        price: 350
    },
   
    // Power Generators
    {
        id: 29,
        name: 'Cummins 250kVA Generator',
        category: 'generator',
        brand: 'Cummins',
        description: 'Industrial diesel generator for construction site power supply.',
        specs: { power: '250 kVA', fuel: 'Diesel', phase: '3-Phase' },
        image: 'ChatGPT Image Dec 25, 2025, 08_50_26 AM.png',
        price: 2800
    },
    {
        id: 30,
        name: 'Perkins 150kVA Generator',
        category: 'generator',
        brand: 'Perkins',
        description: 'Silent canopy generator for residential and commercial projects.',
        specs: { power: '150 kVA', noise: '75 dB', fuel: 'Diesel' },
        image: 'ChatGPT Image Dec 25, 2025, 08_51_30 AM.png',
        price: 1800
    },
   
    // Portable Offices
    {
        id: 31,
        name: 'Site Office Container',
        category: 'all',
        brand: 'Porta-King',
        description: '20ft portable site office with AC, furniture, and electrical fittings.',
        specs: { size: '20ft', rooms: '2', ac: '2x2.0 Ton' },
        image: 'ChatGPT Image Dec 25, 2025, 08_52_40 AM.png',
        price: 1200
    },
   
    // Dump Trucks
    {
        id: 32,
        name: 'Volvo A40G Articulated Dump Truck',
        category: 'dump-truck',
        brand: 'Volvo',
        description: 'Articulated hauler for quarry and earthmoving with 40-ton capacity.',
        specs: { capacity: '39T', power: '420 HP', drive: '6x6' },
        image: 'vd.jpeg',
        price: 4500
    },
    {
        id: 33,
        name: 'CAT 773 Off-Highway Truck',
        category: 'dump-truck',
        brand: 'Caterpillar',
        description: 'Rigid dump truck for high-volume material transport with 55-ton capacity.',
        specs: { capacity: '55T', power: '648 HP', drive: '6x4' },
        image: 'truck.jpeg',
        price: 5500
    },
   
    // Wheel Loaders
    {
        id: 34,
        name: 'Volvo L120H Wheel Loader',
        category: 'excavator',
        brand: 'Volvo',
        description: 'Productive loader for aggregates and bulk handling with 3.0m³ bucket.',
        specs: { weight: '20T', power: '276 HP', bucket: '3.0 m³' },
        image: 'ChatGPT Image Dec 25, 2025, 08_54_01 AM.png',
        price: 3200
    },
    {
        id: 35,
        name: 'Hyundai HL960 Wheel Loader',
        category: 'excavator',
        brand: 'Hyundai',
        description: 'High-capacity loader with efficient driveline and comfort cab.',
        specs: { weight: '19T', power: '222 HP', bucket: '3.3 m³' },
        image: 'hl.jpeg',
        price: 3000
    }
];

// DOM elements
const filterButtonsContainer = document.getElementById('filterButtons');
const equipmentGrid = document.getElementById('equipmentGrid');
const equipmentCount = document.getElementById('equipmentCount');

let activeFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    activeFilter = params.get('filter') || 'all';
    searchQuery = params.get('search') || '';

    // If search query exists, filter by it
    if (searchQuery) {
        filterBySearch(searchQuery);
    } else {
        renderFilters();
        renderEquipment();
    }
    
    // Scroll to equipment section if coming from search
    if (params.get('filter') || params.get('search')) {
        setTimeout(() => {
            const equipmentSection = document.getElementById('equipment');
            if (equipmentSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const sectionPosition = equipmentSection.offsetTop - navHeight;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }
});

// Filter by search query
function filterBySearch(query) {
    if (!query.trim()) {
        renderFilters();
        renderEquipment();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    
    // First try to match categories exactly
    const matchingCategories = equipmentFilters.filter(filter => 
        filter.label.toLowerCase().includes(searchTerm) ||
        filter.key.toLowerCase().includes(searchTerm)
    );
    
    if (matchingCategories.length > 0) {
        // Use the first matching category
        activeFilter = matchingCategories[0].key;
        renderFilters();
        renderEquipment();
        
        // Update search input if it exists
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = query;
        }
        
        // Show search message
        if (equipmentCount) {
            equipmentCount.innerHTML = `Showing <strong>${matchingCategories[0].label}</strong> for search: "<strong>${query}</strong>"`;
        }
        return;
    }
    
    // If no category match, search in equipment items
    const matchingItems = equipmentItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.brand.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    
    if (matchingItems.length > 0) {
        // Show all items that match
        activeFilter = 'all';
        renderFilters();
        renderFilteredItems(matchingItems);
        
        // Update search input if it exists
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = query;
        }
        
        // Show search message
        if (equipmentCount) {
            equipmentCount.innerHTML = `Showing ${matchingItems.length} item${matchingItems.length === 1 ? '' : 's'} for search: "<strong>${query}</strong>"`;
        }
    } else {
        // No results found
        renderFilters();
        renderEquipment();
        if (equipmentCount) {
            equipmentCount.innerHTML = `No results found for "<strong>${query}</strong>". Showing all equipment.`;
        }
    }
}

// Render filter buttons
function renderFilters() {
    if (!filterButtonsContainer) return;
    filterButtonsContainer.innerHTML = '';

    equipmentFilters.forEach(filter => {
        const button = document.createElement('button');
        button.className = `filter-btn ${filter.key === activeFilter ? 'active' : ''}`;
        button.dataset.filter = filter.key;
        button.textContent = filter.label;

        button.addEventListener('click', () => {
            activeFilter = filter.key;
            setActiveFilterButton();
            renderEquipment();
        });

        filterButtonsContainer.appendChild(button);
    });
}

function setActiveFilterButton() {
    if (!filterButtonsContainer) return;
    filterButtonsContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === activeFilter);
    });
}

// Render equipment
function renderEquipment() {
    if (!equipmentGrid) return;

    const items = activeFilter === 'all'
        ? equipmentItems
        : equipmentItems.filter(item => item.category === activeFilter);

    equipmentGrid.innerHTML = '';
    
    if (items.length === 0) {
        equipmentGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3>No Equipment Found</h3>
                <p>No equipment matches your search criteria. Try a different search term or category.</p>
            </div>
        `;
        updateEquipmentCount(0);
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.dataset.type = item.category;
        card.innerHTML = `
            <div class="vehicle-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="vehicle-content">
                <div class="vehicle-category">${getCategoryLabel(item.category)}</div>
                <h3 class="vehicle-name">${item.name}</h3>
                <p><strong>Brand:</strong> ${item.brand}</p>
                <p>${item.description}</p>
                <div class="vehicle-specs">
                    ${renderSpecs(item.specs)}
                </div>
                <div class="vehicle-price">
                    <strong>AED ${(item.price || 0).toFixed(2)}</strong> <span>/day</span>
                </div>
                <div class="vehicle-actions">
                    <button class="btn-view" onclick="viewEquipmentDetails('${item.name}')">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="btn-rent" onclick="openRentalModal(${item.id})">
                        <i class="fas fa-calendar-alt"></i> Rent Now
                    </button>
                </div>
            </div>
        `;
        equipmentGrid.appendChild(card);
    });

    updateEquipmentCount(items.length);
}

function renderFilteredItems(items) {
    if (!equipmentGrid) return;
    
    equipmentGrid.innerHTML = '';
    
    if (items.length === 0) {
        equipmentGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3>No Equipment Found</h3>
                <p>No equipment matches your search criteria. Try a different search term.</p>
            </div>
        `;
        updateEquipmentCount(0);
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.dataset.type = item.category;
        card.innerHTML = `
            <div class="vehicle-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="vehicle-content">
                <div class="vehicle-category">${getCategoryLabel(item.category)}</div>
                <h3 class="vehicle-name">${item.name}</h3>
                <p><strong>Brand:</strong> ${item.brand}</p>
                <p>${item.description}</p>
                <div class="vehicle-specs">
                    ${renderSpecs(item.specs)}
                </div>
                <div class="vehicle-price">
                    <strong>AED ${(item.price || 0).toFixed(2)}</strong> <span>/day</span>
                </div>
                <div class="vehicle-actions">
                    <button class="btn-view" onclick="viewEquipmentDetails('${item.name}')">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="btn-rent" onclick="openRentalModal(${item.id})">
                        <i class="fas fa-calendar-alt"></i> Rent Now
                    </button>
                </div>
            </div>
        `;
        equipmentGrid.appendChild(card);
    });
    
    updateEquipmentCount(items.length);
}

function renderSpecs(specs) {
    const entries = Object.entries(specs || {});
    return entries.map(([label, value]) => `
        <div class="spec-item">
            <span class="spec-label">${formatLabel(label)}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
}

function formatLabel(label) {
    return label.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function updateEquipmentCount(total) {
    if (equipmentCount) {
        if (searchQuery) {
            equipmentCount.innerHTML = `Showing ${total} item${total === 1 ? '' : 's'} for search: "<strong>${searchQuery}</strong>"`;
        } else if (activeFilter !== 'all') {
            const category = equipmentFilters.find(f => f.key === activeFilter)?.label || activeFilter;
            equipmentCount.innerHTML = `Showing ${total} ${category.toLowerCase()}${total === 1 ? '' : 's'}`;
        } else {
            equipmentCount.textContent = `Showing ${total} item${total === 1 ? '' : 's'}`;
        }
    }
}

function getCategoryLabel(key) {
    const match = equipmentFilters.find(f => f.key === key);
    return match ? match.label.toUpperCase() : key.toUpperCase();
}

// Functions accessible from HTML onclick
function viewEquipmentDetails(name) {
    const item = equipmentItems.find(e => e.name === name);
    if (item) {
        const specs = Object.entries(item.specs || {}).map(([key, value]) =>
            `${formatLabel(key)}: ${value}`
        ).join('\n');
       
        alert(`${item.name}\n\nBrand: ${item.brand}\nCategory: ${getCategoryLabel(item.category)}\n\nDescription:\n${item.description}\n\nSpecifications:\n${specs}`);
    }
}

function openInquiryModal(equipmentName) {
    const modal = document.getElementById('inquiryModal');
    const equipmentInterest = document.getElementById('equipmentInterest');
   
    if (modal && equipmentInterest) {
        equipmentInterest.value = equipmentName;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        alert(`Inquiry for: ${equipmentName}\n\nOur team will contact you shortly.`);
    }
}

// Open rental modal for quantity and date selection
function openRentalModal(itemId) {
    const item = equipmentItems.find(e => e.id === itemId);
    if (!item) return;

    // Create or get rental modal
    let modal = document.getElementById('rentalModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'rentalModal';
        modal.innerHTML = `
            <div class="modal-content rental-modal-content">
                <button class="modal-close" id="rentalModalClose">&times;</button>
                <h2><i class="fas fa-calendar-alt"></i> Rent Equipment</h2>
                <div id="rentalModalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close button
        document.getElementById('rentalModalClose').addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Set modal content
    const modalBody = document.getElementById('rentalModalBody');
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <div class="rental-item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p><strong>Brand:</strong> ${item.brand}</p>
                    <p><strong>Category:</strong> ${getCategoryLabel(item.category)}</p>
                    <p class="rental-price">AED ${item.price.toFixed(2)} <span>/day</span></p>
                </div>
            </div>
            <div class="rental-form">
                <div class="form-group">
                    <label>Quantity</label>
                    <div class="quantity-input-group">
                        <button type="button" class="qty-btn" onclick="decreaseRentalQty()">-</button>
                        <input type="number" id="rentalQuantity" value="1" min="1" max="10" onchange="validateRentalQty()">
                        <button type="button" class="qty-btn" onclick="increaseRentalQty()">+</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" id="rentalStartDate" value="${today}" 
                        min="${today}" onchange="updateRentalEndDateMin()" required>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" id="rentalEndDate" value="${tomorrow}" 
                        min="${tomorrow}" required>
                </div>
                <div class="rental-summary">
                    <p><strong>Rental Days:</strong> <span id="rentalDays">2</span> days</p>
                    <p><strong>Total Price:</strong> AED <span id="rentalTotal">${(item.price * 2).toFixed(2)}</span></p>
                </div>
                <!-- ADD TO CART BUTTON - NOW VISIBLE AND SCROLLABLE -->
                <button class="btn-primary btn-large" onclick="addToCartFromModal(${itemId})" 
                    style="width: 100%; padding: 16px; font-size: 1.1rem; margin-top: auto;">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    // Update calculations when dates change
    document.getElementById('rentalStartDate').addEventListener('change', calculateRentalTotal);
    document.getElementById('rentalEndDate').addEventListener('change', calculateRentalTotal);
    document.getElementById('rentalQuantity').addEventListener('change', calculateRentalTotal);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    calculateRentalTotal();
}

// Rental modal helper functions
function increaseRentalQty() {
    const qtyInput = document.getElementById('rentalQuantity');
    if (qtyInput && parseInt(qtyInput.value) < 10) {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        calculateRentalTotal();
    }
}

function decreaseRentalQty() {
    const qtyInput = document.getElementById('rentalQuantity');
    if (qtyInput && parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        calculateRentalTotal();
    }
}

function validateRentalQty() {
    const qtyInput = document.getElementById('rentalQuantity');
    if (qtyInput) {
        let value = parseInt(qtyInput.value) || 1;
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        qtyInput.value = value;
        calculateRentalTotal();
    }
}

function updateRentalEndDateMin() {
    const startDate = document.getElementById('rentalStartDate');
    const endDate = document.getElementById('rentalEndDate');
    if (startDate && endDate) {
        const start = new Date(startDate.value);
        const minEnd = new Date(start.getTime() + 86400000).toISOString().split('T')[0];
        endDate.min = minEnd;
        if (endDate.value < minEnd) {
            endDate.value = minEnd;
        }
        calculateRentalTotal();
    }
}

function calculateRentalTotal() {
    const startDate = document.getElementById('rentalStartDate');
    const endDate = document.getElementById('rentalEndDate');
    const quantity = document.getElementById('rentalQuantity');
    const rentalDaysEl = document.getElementById('rentalDays');
    const rentalTotalEl = document.getElementById('rentalTotal');

    if (!startDate || !endDate || !quantity || !rentalDaysEl || !rentalTotalEl) return;

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    const qty = parseInt(quantity.value) || 1;

    if (end < start) {
        rentalDaysEl.textContent = '0';
        rentalTotalEl.textContent = '0.00';
        return;
    }

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    // Get item price from modal context
    const priceText = document.querySelector('.rental-price')?.textContent;
    const priceMatch = priceText?.match(/AED ([\d.]+)/);
    const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

    const total = price * diffDays * qty;

    rentalDaysEl.textContent = diffDays;
    rentalTotalEl.textContent = total.toFixed(2);
}

// Fixed: Add to cart from modal
function addToCartFromModal(itemId) {
    const item = equipmentItems.find(e => e.id === itemId);
    if (!item) return;

    const quantity = parseInt(document.getElementById('rentalQuantity').value) || 1;
    const startDate = document.getElementById('rentalStartDate').value;
    const endDate = document.getElementById('rentalEndDate').value;

    if (!startDate || !endDate) {
        alert('Please select both start and end dates');
        return;
    }

    if (new Date(endDate) < new Date(startDate)) {
        alert('End date must be after start date');
        return;
    }

    // Create the cart item object
    const cartItem = {
        ...item,
        rentalDetails: {
            quantity,
            startDate,
            endDate
        }
    };

    // Use the global addToCart function
    if (typeof addToCart === 'function') {
        addToCart(cartItem);
        
        // Close modal
        const modal = document.getElementById('rentalModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    } else {
        console.error('addToCart function not found');
        alert('Cart system not loaded. Please refresh the page.');
    }
}