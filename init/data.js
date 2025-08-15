const sampleListings = [
  {
    title: "Beachfront Paradise",
    description: "Waves at your doorstep",
    image: {
      filename: "listing_image_1",
      url: "https://th.bing.com/th/id/OIP.4sixZrj0oAD7JIjNksY5kQHaE6?w=261&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
    },
    price: 2000,
    location: "Baga Beach, Goa",
    country: "India"
  },
  {
    title: "Luxury Hill Villa",
    description: "Peaceful mountain views",
    image: {
      filename: "listing_image_2",
      url: "https://th.bing.com/th/id/OIP.70eEjENlKw8zOhyMPRiEbQHaE0?w=242&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3"
    },
    price: 3200,
    location: "Manali, Himachal",
    country: "India"
  },
  {
    title: "Urban Comfort",
    description: "Modern amenities in city center",
    image: {
      filename: "listing_image_3",
      url: "https://th.bing.com/th/id/OIP.exT5AKo-oYnJr_zTFOrxFQHaEv?w=249&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3"
    },
    price: 1800,
    location: "Hyderabad, Telangana",
    country: "India"
  },
  {
    title: "Desert Dream",
    description: "Feel the Rajasthani vibes",
    image: {
      filename: "listing_image_4",
      url: "https://th.bing.com/th/id/OIP.-y_qm6nK_X3RIpGTjbLYXgHaFS?w=254&h=182&c=7&r=0&o=5&dpr=1.7&pid=1.7"
    },
    price: 1500,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Backwater Bliss",
    description: "Relax by the lake",
    image: {
      filename: "listing_image_5",
      url: "https://th.bing.com/th/id/OIP.qGe7ilujHtHEcREVrcZa4QHaEc?w=273&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
    },
    price: 1700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "My New Villa",
    description: "Beautiful place",
    image: {
      filename: "listing_image_6",
      url: "https://blog.lohono.com/wp-content/uploads/2024/05/PRA00849-HDR_Copy-edited-2048x1365.jpg"
    },
    price: 1200,
    location: "Calangute, Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat",
    description: "Perfect weekend getaway",
    image: {
      filename: "listing_image_7",
      url: "https://blog.lohono.com/wp-content/uploads/2024/05/1-83-683x1024.jpg"
    },
    price: 2100,
    location: "Ooty, Tamil Nadu",
    country: "India"
  },
  {
    title: "Cozy Coastal Cottage",
    description: "Walk to the beach",
    image: {
      filename: "listing_image_8",
      url: "https://blog.lohono.com/wp-content/uploads/2024/05/16-Den-1024x678.jpeg"
    },
    price: 1600,
    location: "Varkala, Kerala",
    country: "India"
  },
  {
    title: "Luxury Lake House",
    description: "Scenic lake views",
    image: {
      filename: "listing_image_9",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/05/villa-mario.jpg"
    },
    price: 2300,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Modern Duplex",
    description: "City living with comfort",
    image: {
      filename: "listing_image_10",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/05/sea-view-six-1.jpg"
    },
    price: 1950,
    location: "Pune, Maharashtra",
    country: "India"
  },
  {
    title: "Rustic Farm Stay",
    description: "Experience village life",
    image: {
      filename: "listing_image_11",
      url: "https://images.unsplash.com/photo-1657452921959-4268016fdf13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8"
    },
    price: 1000,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Sunset View Villa",
    description: "Amazing sunsets every day",
    image: {
      filename: "listing_image_12",
      url: "https://plus.unsplash.com/premium_photo-1669642277736-657128ca83c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8"
    },
    price: 1850,
    location: "Gokarna, Karnataka",
    country: "India"
  },
  {
    title: "Snowy Hideaway",
    description: "For your winter escape",
    image: {
      filename: "listing_image_13",
      url: "https://images.unsplash.com/photo-1711943728936-6ddcd2161343?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgwfHx8ZW58MHx8fHx8"
    },
    price: 2500,
    location: "Shimla, Himachal",
    country: "India"
  },
  {
    title: "Charming Bungalow",
    description: "Green surroundings",
    image: {
      filename: "listing_image_14",
      url: "https://images.unsplash.com/photo-1646553876589-8cc3cf3c239f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8"
    },
    price: 1750,
    location: "Shillong, Meghalaya",
    country: "India"
  },
  {
    title: "Lake View Apartment",
    description: "Quiet and peaceful",
    image: {
      filename: "listing_image_15",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Villa-Maan.jpg"
    },
    price: 2200,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Misty Hillside Home",
    description: "Morning mist & fresh air",
    image: {
      filename: "listing_image_16",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Villa-Sunlight.jpg"
    },
    price: 2000,
    location: "Kodaikanal, Tamil Nadu",
    country: "India"
  },
  {
    title: "Forest Eco Lodge",
    description: "Nature all around",
    image: {
      filename: "listing_image_17",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Villa-Octo-J.jpg"
    },
    price: 1800,
    location: "Wayanad, Kerala",
    country: "India"
  },
  {
    title: "Penthouse Suite",
    description: "Luxury above the skyline",
    image: {
      filename: "listing_image_18",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Assagao.jpg"
    },
    price: 3000,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Vintage Colonial House",
    description: "Historic charm",
    image: {
      filename: "listing_image_19",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Vagator.jpg"
    },
    price: 2400,
    location: "Pondicherry, Tamil Nadu",
    country: "India"
  },
  {
    title: "Rainforest Retreat",
    description: "Breathe in nature",
    image: {
      filename: "listing_image_20",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Baga.jpg"
    },
    price: 1900,
    location: "Agumbe, Karnataka",
    country: "India"
  },
  {
    title: "Ocean View Villa",
    description: "Wake up to waves",
    image: {
      filename: "listing_image_21",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Parra.jpg"
    },
    price: 2600,
    location: "Andaman Islands",
    country: "India"
  },
  {
    title: "Countryside Escape",
    description: "Simple and serene",
    image: {
      filename: "listing_image_22",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Calangute.jpg"
    },
    price: 1200,
    location: "Palampur, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Tea Estate Stay",
    description: "Stay in the green",
    image: {
      filename: "listing_image_23",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/anjuna.jpg"
    },
    price: 1950,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Luxury Bamboo Villa",
    description: "Sustainable & scenic",
    image: {
      filename: "listing_image_24",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Nerul.jpg"
    },
    price: 2200,
    location: "Araku Valley, Andhra Pradesh",
    country: "India"
  },
  {
    title: "Tropical Treehouse",
    description: "Adventure above ground",
    image: {
      filename: "listing_image_25",
      url: "https://www.luxuryvillasstay.com/wp-content/uploads/2023/07/Candolim.jpg"
    },
    price: 2100,
    location: "Cherrapunji, Meghalaya",
    country: "India"
  }
];

module.exports = { data: sampleListings };
