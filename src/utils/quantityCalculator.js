// Comprehensive Puja Samagri & Prasad Smart Quantity Calculator

export function calculateComprehensiveSamagri({ vratis = 1, dauras = 2, people = 25 }) {
  const v = Math.max(1, Number(vratis) || 1);
  const d = Math.max(1, Number(dauras) || 1);
  const p = Math.max(1, Number(people) || 1);

  // 1. Prasad & Cooking Ingredients (Calculated based on family/people + vratis)
  // For Thekua & Kharna Prasad: Approx 100g flour per person for distribution, min 2.5kg per Daura
  const thekuaFlourKg = Math.max(d * 2.5, Math.ceil(p * 0.12 * 10) / 10);
  const jaggeryKg = Math.max(d * 1.5, Math.ceil(thekuaFlourKg * 0.6 * 10) / 10);
  const gheeKg = Math.max(d * 1.0, Math.ceil(thekuaFlourKg * 0.4 * 10) / 10);
  const arwaRiceKg = Math.max(v * 0.5, Math.ceil((p * 0.05 + 0.5) * 10) / 10);
  const milkLiters = Math.max(v * 2.0, Math.ceil((p * 0.25 + 1.0) * 10) / 10);
  const chanaDalKg = Math.max(v * 0.5, Math.ceil(p * 0.04 * 10) / 10);
  const dryFruitsGrams = Math.max(250, p * 15);
  const cardamomGrams = Math.max(50, Math.ceil(p * 2));
  const saunfGrams = Math.max(50, Math.ceil(thekuaFlourKg * 15));

  const prasadItems = [
    {
      id: "pr1",
      category: "prasad",
      name: "Whole Wheat Flour (गेहूं का आटा)",
      subtext: "For holy Thekua & Kharna Roti prasad",
      quantity: thekuaFlourKg,
      unit: "kg",
      icon: "🌾",
      baseDesc: `${thekuaFlourKg} kg fresh pure flour`
    },
    {
      id: "pr2",
      category: "prasad",
      name: "Pure Jaggery / Gur (शुद्ध देसी गुड़)",
      subtext: "Traditional dark sugarcane jaggery for Thekua & Kheer",
      quantity: jaggeryKg,
      unit: "kg",
      icon: "🍯",
      baseDesc: `${jaggeryKg} kg premium chemical-free gur`
    },
    {
      id: "pr3",
      category: "prasad",
      name: "Pure Desi Cow Ghee (शुद्ध देसी गाय का घी)",
      subtext: "For frying holy Thekua & Kharna preparation",
      quantity: gheeKg,
      unit: "kg / L",
      icon: "🧈",
      baseDesc: `${gheeKg} kg pure aroma cow ghee`
    },
    {
      id: "pr4",
      category: "prasad",
      name: "Arwa Rice (अरवा चावल - गोविंदभोग)",
      subtext: "For Day 2 Kharna Rasiao-Kheer & Akshat",
      quantity: arwaRiceKg,
      unit: "kg",
      icon: "🍚",
      baseDesc: `${arwaRiceKg} kg newly harvested Arwa rice`
    },
    {
      id: "pr5",
      category: "prasad",
      name: "Fresh Pure Cow Milk (गाय का कच्चा/शुद्ध दूध)",
      subtext: "For Day 2 Kharna Kheer & Arghya offering",
      quantity: milkLiters,
      unit: "Liters",
      icon: "🥛",
      baseDesc: `${milkLiters} Liters fresh farm cow milk`
    },
    {
      id: "pr6",
      category: "prasad",
      name: "Chana Dal (चना दाल)",
      subtext: "For Day 1 Nahay-Khay traditional Kaddu-Bhaat",
      quantity: chanaDalKg,
      unit: "kg",
      icon: "🫘",
      baseDesc: `${chanaDalKg} kg polished unpolished chana dal`
    },
    {
      id: "pr7",
      category: "prasad",
      name: "Lauki / Kaddu (हरा कद्दू / लौकी)",
      subtext: "Sacred bottle gourd for Day 1 Nahay-Khay prasad",
      quantity: Math.max(1, v * 2),
      unit: "pieces (pcs)",
      icon: "🥒",
      baseDesc: `${Math.max(1, v * 2)} fresh tender bottle gourds`
    },
    {
      id: "pr8",
      category: "prasad",
      name: "Dry Fruits Mix (काजू, किशमिश, सूखा गढ़ी)",
      subtext: "Cashew, Raisins & Dried Coconut for Thekua & Kheer",
      quantity: dryFruitsGrams >= 1000 ? (dryFruitsGrams / 1000).toFixed(1) : dryFruitsGrams,
      unit: dryFruitsGrams >= 1000 ? "kg" : "grams",
      icon: "🥜",
      baseDesc: `${dryFruitsGrams}g dry fruit assortments`
    },
    {
      id: "pr9",
      category: "prasad",
      name: "Green Cardamom & Fennel (छोटी इलायची व सौंफ)",
      subtext: "Fragrance and flavor for Thekua dough",
      quantity: `${cardamomGrams}g + ${saunfGrams}g`,
      unit: "grams",
      icon: "🌿",
      baseDesc: "Pure green elaichi & aromatic saunf"
    },
    {
      id: "pr10",
      category: "prasad",
      name: "Sendha Namak (सेंधा नमक - Rock Salt)",
      subtext: "Strictly pure rock salt for Day 1 Nahay-Khay cooking",
      quantity: 1,
      unit: "packet (1 kg)",
      icon: "🧂",
      baseDesc: "1 kg pure unbroken rock salt"
    }
  ];

  // 2. Holy Fruits & Arghya Offerings (Calculated by number of Dauras and Vratis)
  const sugarcaneCount = d * 5; // Typically 5 stalks per mandap / daura
  const dhabNimbuCount = d * 2; // 2 big pomelos per daura
  const bananaDozens = Math.max(2, d * 2); // 2 dozen per daura or whole bunch
  const coconutCount = d * 2; // 2 water coconuts per basket
  const appleOrangesKg = Math.max(2, d * 1.5);
  const singhadaSuthniKg = Math.max(1, d * 1.0);

  const fruitItems = [
    {
      id: "fr1",
      category: "fruits",
      name: "Sugarcane with Green Leaves (साफ़ पत्तों सहित गन्ना)",
      subtext: "Erected as the 5-stalk sacred canopy (मंडप/सरवा)",
      quantity: sugarcaneCount,
      unit: "pieces (pcs)",
      icon: "🎋",
      baseDesc: `${sugarcaneCount} whole uncut green sugarcanes`
    },
    {
      id: "fr2",
      category: "fruits",
      name: "Daabh Nimbu / Pomelo (बड़ा डाभ / कागज़ी नींबू)",
      subtext: "Essential citrus offering placed in the Soop",
      quantity: dhabNimbuCount,
      unit: "pieces (pcs)",
      icon: "🍈",
      baseDesc: `${dhabNimbuCount} fresh large citrus pomelos`
    },
    {
      id: "fr3",
      category: "fruits",
      name: "Yellow & Green Bananas (केला का घौद / दर्जन)",
      subtext: "Whole bunch or fresh stem dozens for Daura & Soop",
      quantity: bananaDozens >= 4 ? `${Math.ceil(bananaDozens / 4)} Ghoud (or ${bananaDozens} doz)` : `${bananaDozens} Dozen`,
      unit: bananaDozens >= 4 ? "bunch/dozen" : "dozens",
      icon: "🍌",
      baseDesc: `${bananaDozens} dozen clean unblemished bananas`
    },
    {
      id: "fr4",
      category: "fruits",
      name: "Water Coconut (पानी वाला जटाधारी नारियल)",
      subtext: "Offered to Surya Dev during evening and morning Arghya",
      quantity: coconutCount,
      unit: "pieces (pcs)",
      icon: "🥥",
      baseDesc: `${coconutCount} intact water coconuts with husk`
    },
    {
      id: "fr5",
      category: "fruits",
      name: "Singhaada & Suthni (सिंघाड़ा व सुथनी)",
      subtext: "Fresh seasonal water chestnut and sacred sweet root",
      quantity: singhadaSuthniKg,
      unit: "kg",
      icon: "🌰",
      baseDesc: `${singhadaSuthniKg} kg crisp singhaada & suthni`
    },
    {
      id: "fr6",
      category: "fruits",
      name: "Apples, Oranges & Pomegranates (सेब, संतरा, अनार)",
      subtext: "Fresh colorful fruit offerings for holy Soop",
      quantity: appleOrangesKg,
      unit: "kg",
      icon: "🍎",
      baseDesc: `${appleOrangesKg} kg assortment of seasonal fruits`
    },
    {
      id: "fr7",
      category: "fruits",
      name: "Haldi & Adrak Plant with Leaves (हल्दी-अदरक का हरा पौधा)",
      subtext: "Live plant shoot with fresh roots tied to bamboo basket",
      quantity: d * 2,
      unit: "pieces (plants)",
      icon: "🌱",
      baseDesc: `${d * 2} leafy live ginger and turmeric plants`
    },
    {
      id: "fr8",
      category: "fruits",
      name: "Paan Leaves & Supari (ताजा पान पत्ता व साबुत सुपारी)",
      subtext: "Placed with coin and akshat on each offering plate",
      quantity: d * 10,
      unit: "pieces (pcs)",
      icon: "🍃",
      baseDesc: `${d * 10} fresh betel leaves & betel nuts`
    },
    {
      id: "fr9",
      category: "fruits",
      name: "Bodi / Green Beans & Sweet Radish (बोदी, मूली व शरीफा)",
      subtext: "Traditional winter seasonal vegetables offered raw",
      quantity: 1,
      unit: "kg",
      icon: "🥬",
      baseDesc: "1 kg fresh tender green mooli and bodi"
    }
  ];

  // 3. Ritual Utensils & Puja Samagri Essentials
  const diyaCount = Math.max(21, d * 25);
  const wicksCount = Math.max(50, diyaCount * 2);

  const ritualItems = [
    {
      id: "rt1",
      category: "rituals",
      name: "Bamboo Daura / Tokri (बांस का बड़ा दौरा)",
      subtext: "Carried on head by family devotee to the holy ghat",
      quantity: d,
      unit: "pieces (pcs)",
      icon: "🧺",
      baseDesc: `${d} handcrafted sturdy bamboo daura`
    },
    {
      id: "rt2",
      category: "rituals",
      name: "Bamboo & Brass Soop (बांस एवं पीतल का सूप)",
      subtext: "Holding prasad while standing in water during Arghya",
      quantity: d * 2,
      unit: "pieces (pcs)",
      icon: "🛶",
      baseDesc: `${d * 2} clean auspicious soop baskets`
    },
    {
      id: "rt3",
      category: "rituals",
      name: "Clay Diyas (मिट्टी के चौमुख व साधारण दीये)",
      subtext: "For Koshi filling, ghat lighting and Akhand Jyot",
      quantity: diyaCount,
      unit: "pieces (pcs)",
      icon: "🪔",
      baseDesc: `${diyaCount} traditional earthen lamps`
    },
    {
      id: "rt4",
      category: "rituals",
      name: "Pure Mustard / Sesame Oil (सरसों अथवा तिल का तेल)",
      subtext: "To illuminate diyas continuously throughout the night",
      quantity: Math.max(1, Math.ceil(diyaCount / 40)),
      unit: "Liters",
      icon: "🫗",
      baseDesc: `${Math.max(1, Math.ceil(diyaCount / 40))} Liter pure puja oil`
    },
    {
      id: "rt5",
      category: "rituals",
      name: "Cotton Wicks & Kalawa (कपास की बत्ती व कलावा/मौली)",
      subtext: "Long burning wicks and red-yellow protective thread",
      quantity: `${wicksCount} wicks + 2 rolls`,
      unit: "packets",
      icon: "🧵",
      baseDesc: "Handmade pure cotton wicks and sacred thread"
    },
    {
      id: "rt6",
      category: "rituals",
      name: "Traditional Orange Sindoor (मटिया सिंदूर - पीला/नारंगी)",
      subtext: "Auspicious long nose-to-parting sindoor applied by Vratis",
      quantity: Math.max(2, v * 2),
      unit: "packets (250g)",
      icon: "✨",
      baseDesc: "Pure non-toxic herbal orange sindoor"
    },
    {
      id: "rt7",
      category: "rituals",
      name: "Kumkum, Roli & Pure Chandan (रोली, कुमकुम व पीला चंदन)",
      subtext: "For tilak on Surya Dev, daura, soop and forehead",
      quantity: 2,
      unit: "packets",
      icon: "🔴",
      baseDesc: "2 packets pure fragrant sandalwood and roli"
    },
    {
      id: "rt8",
      category: "rituals",
      name: "Pure Sacred Gangajal (पवित्र गंगा जल)",
      subtext: "For purifying all puja utensils, samagri and water mixing",
      quantity: 2,
      unit: "bottles (1 L)",
      icon: "💧",
      baseDesc: "2 liters sealed Gangotri / Haridwar Gangajal"
    },
    {
      id: "rt9",
      category: "rituals",
      name: "Pure Brass Lota / Kalash & Arghya Patra (पीतल का लोटा)",
      subtext: "Utensil used to pour milk and holy water during Arghya",
      quantity: Math.max(1, v),
      unit: "pieces (pcs)",
      icon: "🏺",
      baseDesc: `${Math.max(1, v)} solid brass kalash`
    },
    {
      id: "rt10",
      category: "rituals",
      name: "Camphor, Dhoop & Agarbatti (भीमसेनी कपूर व धूपबत्ती)",
      subtext: "For continuous aarti and sacred atmospheric purification",
      quantity: "2 boxes Kapur + 2 boxes Agarbatti",
      unit: "boxes",
      icon: "🕯️",
      baseDesc: "Pure aromatic camphor slabs and bamboo-free dhoop"
    },
    {
      id: "rt11",
      category: "rituals",
      name: "Red Cotton Ritual Cloth & Kafani (लाल पीला सूती कपड़ा)",
      subtext: "To cover the Daura baskets respectfully on the way to ghat",
      quantity: d,
      unit: "pieces (1.5m each)",
      icon: "🧣",
      baseDesc: `${d} new unstitched red cloth covers`
    },
    {
      id: "rt12",
      category: "rituals",
      name: "Clay Koshi & Clay Elephants (मिट्टी का हाथी व कोशी - Optional)",
      subtext: "For devotees fulfilling special Koshi filling vows (मनोकामना)",
      quantity: 1,
      unit: "set",
      icon: "🐘",
      baseDesc: "Handcrafted terracotta elephant diya stand"
    }
  ];

  return {
    summary: {
      vratis: v,
      dauras: d,
      people: p,
      totalItemsCount: prasadItems.length + fruitItems.length + ritualItems.length,
      estimatedThekuaYieldKg: (thekuaFlourKg * 1.5).toFixed(1)
    },
    categories: {
      prasad: prasadItems,
      fruits: fruitItems,
      rituals: ritualItems
    },
    allItems: [...prasadItems, ...fruitItems, ...ritualItems]
  };
}

export function smartUnit(amount, unit) {
  if (typeof amount === "number") {
    if (unit === "g" && amount >= 1000) return `${(amount / 1000).toFixed(2).replace(/\.00$/, "")} kg`;
    if (unit === "ml" && amount >= 1000) return `${(amount / 1000).toFixed(2).replace(/\.00$/, "")} L`;
  }
  return `${amount} ${unit}`;
}
