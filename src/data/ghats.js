// Comprehensive data for Ghats, Ponds, Dangerous Ghats, Parking & Safety Guidelines

export const riverGhats = [
  {
    id: "g1",
    name: "Gandhi Ghat (गांधी घाट)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6208,
    lng: 85.1724,
    status: "Safe",
    crowd: "High",
    waterDepth: "3.5 ft (Barricaded)",
    facilities: ["High Mast Lighting", "SDRF Camp", "Changing Rooms", "Medical Camp", "Drinking Water"],
    cleanliness: "5/5",
    parkingNearby: "NIT Patna Ground Parking (300m)",
    isDangerous: false,
    note: "Famous for evening Ganga Aarti and grand Chhath celebrations. Strict SDRF deployment."
  },
  {
    id: "g2",
    name: "Digha Ghat (दीघा घाट)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6521,
    lng: 85.0886,
    status: "Safe",
    crowd: "Moderate",
    waterDepth: "3.0 ft (Safe slope)",
    facilities: ["Lighting", "Changing Tents", "Ambulance", "Dedicated Parking"],
    cleanliness: "4.5/5",
    parkingNearby: "Digha AIIMS Road Ground (200m)",
    isDangerous: false,
    note: "Spacious ghat with gentle slope and smooth river bank."
  },
  {
    id: "g3",
    name: "NIT Ghat (एनआईटी घाट)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6195,
    lng: 85.1685,
    status: "Safe",
    crowd: "High",
    waterDepth: "3.2 ft",
    facilities: ["CCTV Surveillance", "Life Jackets", "Control Booth", "Changing Rooms"],
    cleanliness: "4.8/5",
    parkingNearby: "Ashok Rajpath Multilevel Parking (400m)",
    isDangerous: false,
    note: "One of the most scenic ghats in central Patna."
  },
  {
    id: "g4",
    name: "Kangan Ghat (कंगन घाट)",
    city: "Patna City",
    river: "Ganga",
    lat: 25.5982,
    lng: 85.2285,
    status: "Safe",
    crowd: "High",
    waterDepth: "3.8 ft (Barricaded)",
    facilities: ["Lighting", "Medical Post", "Changing Enclosures", "Clean Restrooms"],
    cleanliness: "4.6/5",
    parkingNearby: "Patna Sahib Station Outer Parking (500m)",
    isDangerous: false,
    note: "Adjacent to Gurdwara Patna Sahib, historic and well-managed."
  },
  {
    id: "g5",
    name: "Rishra Ferry Ghat (रिशड़ा फेरी घाट)",
    city: "Rishra",
    river: "Hooghly (Ganges)",
    lat: 22.72127,
    lng: 88.35514,
    status: "Safe",
    crowd: "Moderate",
    waterDepth: "3.2 ft (Barricaded)",
    facilities: ["Floodlights", "River Police Patrol", "Temporary Stalls", "First Aid"],
    cleanliness: "4.5/5",
    parkingNearby: "Rishra Station Road Parking (250m)",
    isDangerous: false,
    note: "Major riverside destination in Hooghly district for local devotees."
  },
  {
    id: "g6",
    name: "Konnagar Baro Mandir Ghat (कोन्नगर बारो मंदिर घाट)",
    city: "Konnagar",
    river: "Hooghly (Ganges)",
    lat: 22.699,
    lng: 88.361,
    status: "Safe",
    crowd: "Moderate",
    waterDepth: "3.0 ft",
    facilities: ["Lighting", "Drinking Water", "Changing Rooms", "Help Desk"],
    cleanliness: "4.4/5",
    parkingNearby: "Konnagar Municipality Ground (300m)",
    isDangerous: false,
    note: "Serene heritage ghat with historic temple backdrop."
  },
  {
    id: "g7",
    name: "Lakhi Ghat, Mahesh (लखी घाट, महेश)",
    city: "Serampore",
    river: "Hooghly (Ganges)",
    lat: 22.752,
    lng: 88.338,
    status: "Safe",
    crowd: "Moderate",
    waterDepth: "3.1 ft",
    facilities: ["Barricaded Zone", "SDRF Volunteers", "Changing Tents", "Lighting"],
    cleanliness: "4.3/5",
    parkingNearby: "GT Road Mahesh Parking (350m)",
    isDangerous: false,
    note: "Traditional ghat near historical Mahesh temple."
  },
  {
    id: "g8",
    name: "Babu Ghat (बाबू घाट)",
    city: "Kolkata",
    river: "Hooghly (Ganges)",
    lat: 22.5645,
    lng: 88.3415,
    status: "Safe",
    crowd: "High",
    waterDepth: "3.5 ft (Red marked boundary)",
    facilities: ["Kolkata Police Booth", "NDRF Divers", "High-power Floodlights", "Disaster Van"],
    cleanliness: "4.7/5",
    parkingNearby: "Strand Road Designated Car Zone (200m)",
    isDangerous: false,
    note: "Centrally located iconic ghat in Kolkata with extensive civic arrangements."
  },
  {
    id: "g9",
    name: "Assi Ghat (अस्सी घाट)",
    city: "Varanasi",
    river: "Ganga",
    lat: 25.2885,
    lng: 83.0064,
    status: "Safe",
    crowd: "Very High",
    waterDepth: "3.6 ft (Chains installed)",
    facilities: ["Water Police", "24/7 Medical Post", "Loudspeakers", "Changing Tents"],
    cleanliness: "4.9/5",
    parkingNearby: "Assi Crossing Paid Parking (400m)",
    isDangerous: false,
    note: "Vibrant spiritual atmosphere with thousands of earthen diyas."
  }
];

export const dangerousGhats = [
  {
    id: "d1",
    name: "Collectorate Ghat Deep Trench (समाहरणालय घाट गहरा क्षेत्र)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6231,
    lng: 85.1432,
    dangerReason: "Sudden underwater trench, deep quicksand mud & steep slope.",
    status: "RED ALERT - STRICTLY BANNED (अति-संवेदनशील)",
    waterDepth: "Exceeds 15 ft within 2 meters from bank",
    policeNotice: "Red flags installed. Barbed wire barricade in place. No Arghya allowed.",
    alternativeGhat: "Please proceed to Gandhi Ghat or Digha Ghat."
  },
  {
    id: "d2",
    name: "Mahendru Ghat Shifting Mud (महेंद्रू घाट दलदली क्षेत्र)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6174,
    lng: 85.1582,
    dangerReason: "Unstable silt deposit, quicksand sinkholes and strong underwater vortex.",
    status: "RED ALERT - CLOSED (पूर्णतः प्रतिबंधित)",
    waterDepth: "Unpredictable depths up to 18 ft",
    policeNotice: "Entry prohibited under Section 163 BNSS. Lifeguards deployed to divert crowd.",
    alternativeGhat: "Please visit NIT Ghat or Anta Ghat."
  },
  {
    id: "d3",
    name: "Adalat Ghat Old Sluice Gate (अदालत घाट पुराना स्लूइस गेट)",
    city: "Patna",
    river: "Ganga",
    lat: 25.6198,
    lng: 85.1528,
    dangerReason: "Submerged iron structures, sharp rusted rubble and strong counter-current.",
    status: "DANGEROUS - PARTIALLY BARRICADED",
    waterDepth: "8 to 12 ft uneven drop",
    policeNotice: "Only dry bank prayers permitted; strictly no bathing or deep water entry.",
    alternativeGhat: "Proceed to Patna College Ghat."
  },
  {
    id: "d4",
    name: "Nimaitirtha High Current Point (निमाईतीर्थ तेज बहाव बिंदु)",
    city: "Sheoraphuli",
    river: "Hooghly",
    lat: 22.761,
    lng: 88.339,
    dangerReason: "Tidal river surge and high velocity undercurrents during evening tide.",
    status: "RED ALERT DURING HIGH TIDE",
    waterDepth: "Rapid fluctuation from 4 ft to 12 ft",
    policeNotice: "Siren warning system active during tidal bore (Baan). Step back on siren sound.",
    alternativeGhat: "Use Serampore Ferry Ghat safe zone."
  }
];

export const localPonds = [
  {
    id: "p1",
    name: "Mangal Talab Historic Pokhar (मंगल तालाब)",
    city: "Patna City",
    type: "Sacred City Pond",
    lat: 25.5925,
    lng: 85.2215,
    capacity: "5,000 Devotees",
    waterQuality: "Treated & Cleaned (Potable Ganga water added)",
    depth: "Controlled 2.5 ft",
    facilities: ["Concrete Steps", "Electric Lighting", "Sound System", "Security Volunteers"],
    note: "Specially prepared by Patna Municipal Corporation with clean water refills."
  },
  {
    id: "p2",
    name: "Eco Park Artificial Chhath Lake (इको पार्क छठ सरोवर)",
    city: "Patna",
    type: "Civic Artificial Lake",
    lat: 25.602,
    lng: 85.112,
    capacity: "3,500 Devotees",
    waterQuality: "Filter plant treated crystal water",
    depth: "Safe 2.0 ft with anti-slip mats",
    facilities: ["Clean Changing Rooms", "Ample Parking", "Security", "Medical Camp"],
    note: "Ideal for elderly devotees and children seeking a peaceful, safe ritual without river currents."
  },
  {
    id: "p3",
    name: "Konnagar Rajbari Dighi (कोन्नगर राजबाड़ी दीघी)",
    city: "Konnagar",
    type: "Traditional Heritage Pond",
    lat: 22.7025,
    lng: 88.354,
    capacity: "2,000 Devotees",
    waterQuality: "Naturally clean sweet water",
    depth: "3.0 ft with bamboo safety railing",
    facilities: ["Decorative Lights", "Diya Platform", "First Aid"],
    note: "Peaceful traditional neighbourhood pond popular for peaceful Arghya."
  },
  {
    id: "p4",
    name: "Serampore Goswami Dighi (श्रीरामपुर गोस्वामी दीघी)",
    city: "Serampore",
    type: "Municipal Chhath Sarovar",
    lat: 22.748,
    lng: 88.342,
    capacity: "2,500 Devotees",
    waterQuality: "Chlorinated and refreshed daily",
    depth: "2.8 ft safe perimeter",
    facilities: ["Safety Netting", "Changing Enclosures", "Tea Stalls", "Audio System"],
    note: "Popular family pond with strict crowd management."
  }
];

export const parkingZones = [
  {
    id: "pk1",
    title: "NIT Patna Campus Mega Parking",
    servesGhats: "NIT Ghat, Gandhi Ghat, Patna College Ghat",
    capacity: "800 Cars / 2,000 Two-wheelers",
    distance: "300 meters (5 min walk)",
    fee: "FREE (Civic Administration)",
    status: "Spaces Available (65% Free)",
    shuttle: "Free E-Rickshaw available for senior citizens"
  },
  {
    id: "pk2",
    title: "Digha Roundabout Open Ground Parking",
    servesGhats: "Digha Ghat, JP Setu Riverside",
    capacity: "1,200 Four-wheelers / 3,000 Two-wheelers",
    distance: "250 meters",
    fee: "FREE",
    status: "Spaces Available (80% Free)",
    shuttle: "Direct lighted walking walkway to ghat"
  },
  {
    id: "pk3",
    title: "Rishra Ferry Approach Road Zone",
    servesGhats: "Rishra Ferry Ghat, Gospel Ghat",
    capacity: "250 Vehicles",
    distance: "200 meters",
    fee: "FREE",
    status: "Moderate Availability",
    shuttle: "Pedestrian only beyond designated checkpoint"
  },
  {
    id: "pk4",
    title: "Serampore Court Ground Facility",
    servesGhats: "Serampore Ferry Ghat, Lakhi Ghat",
    capacity: "450 Vehicles",
    distance: "400 meters",
    fee: "FREE",
    status: "Fast Filling",
    shuttle: "Traffic Police guidance active"
  }
];

export const safetyGuidelines = [
  {
    category: "River Water Safety (जल सुरक्षा)",
    rules: [
      "Never cross the red flags or safety rope barricades in the river under any circumstances.",
      "Vratis and family members should strictly not enter water deeper than chest height (maximum 3.5 ft).",
      "Do not step on muddy or slippery river silt without inspecting firm footing.",
      "In case of any emergency or distress, shout for SDRF / NDRF motorboats patrolling the perimeter."
    ]
  },
  {
    category: "Child & Elderly Care (बच्चे व बुजुर्ग सुरक्षा)",
    rules: [
      "Ensure all young children wear an identity tag or wristband with parent phone number and home address.",
      "Do not leave children unattended near the water line or on steep ghat stairs.",
      "Utilize artificial municipal ponds or the upper platform for elderly family members.",
      "Lost and Found booths are active 24/7 with public address announcements at all major ghats."
    ]
  },
  {
    category: "Eco-Friendly Chhath (स्वच्छ एवं निर्मल गंगा)",
    rules: [
      "Do not dispose of plastic bags, thermocol, or non-biodegradable items into the sacred river.",
      "Place used earthen diyas, bamboo remnants, and flowers into the dedicated green compost bins.",
      "Avoid lighting loud or chemical firecrackers near crowded prayer areas.",
      "Maintain the divine sanctity and sacred cleanliness of Chhath Maiya's holy ghats."
    ]
  }
];

export const ghats = riverGhats;
