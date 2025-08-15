
// maptilerKey will accessible here from another js file
    // Create the map
const map = new maplibregl.Map({
        container: 'map', // container ID
        style: `https://api.maptiler.com/maps/openstreetmap/style.json?key=${maptilerKey}`, // Maptiler style
        // center: [77, 28], // Replace with your listing coords: [lng, lat]
        center:listingCoords,
        zoom: 9,
});

    // Add navigation controls
map.addControl(new maplibregl.NavigationControl());

const el = document.createElement('div');
el.className = 'custom-marker';
el.innerHTML = '<i class="fa-solid fa-house"></i>'; // Font Awesome house icon

Object.assign(el.style, {
    background: '#000',      // marker background
    color: '#fff',           // icon color
    width: '40px',
    height: '40px',
    borderRadius: '50%',     // makes it round
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    position: 'relative'
});

// Add the small "pin" triangle at the bottom
const pin = document.createElement('div');
Object.assign(pin.style, {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid #000'
});
el.appendChild(pin);

// Popup
const popup = new maplibregl.Popup({ offset: 30 })
    .setHTML(`<h4>${listingTitle}</h4><p>Exact location will be provided after booking</p>`);

// Add marker with custom HTML element
new maplibregl.Marker({ element: el, anchor: 'bottom' })
    .setLngLat(listingCoords)
    .setPopup(popup)
    .addTo(map);