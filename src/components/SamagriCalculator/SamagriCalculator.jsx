import { useState, useMemo, useEffect } from "react";
import { 
  calculateComprehensiveSamagri, 
  smartUnit 
} from "../../utils/quantityCalculator";
import { 
  Check, 
  Plus, 
  Trash2, 
  Share2, 
  Printer, 
  Search, 
  Sparkles, 
  ShoppingBag, 
  Filter, 
  Info,
  Scale
} from "lucide-react";
import "./SamagriCalculator.css";

export default function SamagriCalculator() {
  const [vratis, setVratis] = useState(1);
  const [dauras, setDauras] = useState(2);
  const [people, setPeople] = useState(30);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Custom user items added dynamically
  const [customItems, setCustomItems] = useState(() => {
    try {
      const saved = localStorage.getItem("chhath-custom-items");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newItemName, setNewItemName] = useState("");
  const [newItemQty, setNewItemQty] = useState("");
  const [newItemUnit, setNewItemUnit] = useState("kg");
  const [newItemCat, setNewItemCat] = useState("prasad");

  // Checked items stored in localStorage
  const [checkedMap, setCheckedMap] = useState(() => {
    try {
      const saved = localStorage.getItem("chhath-checked-items");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("chhath-checked-items", JSON.stringify(checkedMap));
    } catch (e) {
      console.error(e);
    }
  }, [checkedMap]);

  useEffect(() => {
    try {
      localStorage.setItem("chhath-custom-items", JSON.stringify(customItems));
    } catch (e) {
      console.error(e);
    }
  }, [customItems]);

  const calculation = useMemo(() => {
    return calculateComprehensiveSamagri({ vratis, dauras, people });
  }, [vratis, dauras, people]);

  const allCombinedItems = useMemo(() => {
    return [...calculation.allItems, ...customItems];
  }, [calculation, customItems]);

  const filteredItems = useMemo(() => {
    return allCombinedItems.filter((item) => {
      const matchesTab = 
        activeTab === "all" ? true :
        activeTab === "checked" ? !!checkedMap[item.id] :
        activeTab === "pending" ? !checkedMap[item.id] :
        item.category === activeTab;

      const matchesSearch = 
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtext && item.subtext.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.unit && item.unit.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [allCombinedItems, activeTab, searchQuery, checkedMap]);

  const totalItemsCount = allCombinedItems.length;
  const checkedCount = allCombinedItems.filter(it => !!checkedMap[it.id]).length;
  const progressPercent = totalItemsCount ? Math.round((checkedCount / totalItemsCount) * 100) : 0;

  const toggleCheck = (id) => {
    setCheckedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemQty.trim()) return;

    const newItem = {
      id: `custom_${Date.now()}`,
      category: newItemCat,
      name: newItemName.trim(),
      subtext: "Custom added item",
      quantity: newItemQty.trim(),
      unit: newItemUnit,
      icon: "✨",
      baseDesc: `${newItemQty.trim()} ${newItemUnit}`
    };

    setCustomItems(prev => [...prev, newItem]);
    setNewItemName("");
    setNewItemQty("");
  };

  const removeCustomItem = (id) => {
    setCustomItems(prev => prev.filter(x => x.id !== id));
    setCheckedMap(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleWhatsAppShare = () => {
    let text = `🪔 *Chhath Puja Samagri & Prasad List* 🪔\n`;
    text += `👥 Vratis: ${vratis} | 🧺 Dauras: ${dauras} | 👨‍👩‍👧‍👦 Family: ${people}\n\n`;

    const cats = {
      prasad: "🌾 *Prasad & Cooking Ingredients (प्रसाद सामग्री)*:\n",
      fruits: "\n🎋 *Holy Fruits & Offerings (पूजा के फल व अर्घ्य)*:\n",
      rituals: "\n🪔 *Rituals & Utensils (पूजा बर्तन व उपकरण)*:\n"
    };

    allCombinedItems.forEach(it => {
      const status = checkedMap[it.id] ? "✅ [Purchased]" : "⬜ [Need to Buy]";
      const line = `${status} ${it.name} - *${it.quantity} ${it.unit}*\n`;
      if (cats[it.category]) {
        cats[it.category] += line;
      } else {
        cats.rituals += line;
      }
    });

    text += cats.prasad + cats.fruits + cats.rituals;
    text += `\n✨ Generated with Chhath Digital Ghat Portal`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="section samagri-section" id="samagri-calculator">
      <div className="container">
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <Scale size={16} /> Puja Samagri & Prasad Calculator
          </span>
          <h2 className="section-title">
            Smart Quantity Estimator <span>(सामग्री व प्रसाद गणना)</span>
          </h2>
          <p className="section-subtitle">
            Accurately plan exact quantities for Thekua, Kheer, holy fruits, and ritual essentials in kilograms, dozens, and pieces.
          </p>
        </div>

        {/* Dynamic Controls Card */}
        <div className="card calculator-config-card">
          <div className="config-grid">
            {/* Vratis Control */}
            <div className="config-box">
              <div className="config-label">
                <span className="config-icon">🧘</span>
                <div>
                  <h4>Number of Vratis</h4>
                  <small>व्रती (Devotees observing fast)</small>
                </div>
              </div>
              <div className="stepper">
                <button 
                  className="step-btn" 
                  onClick={() => setVratis(v => Math.max(1, v - 1))}
                  aria-label="Decrease Vratis"
                >−</button>
                <span className="step-val">{vratis}</span>
                <button 
                  className="step-btn" 
                  onClick={() => setVratis(v => v + 1)}
                  aria-label="Increase Vratis"
                >+</button>
              </div>
            </div>

            {/* Dauras Control */}
            <div className="config-box">
              <div className="config-label">
                <span className="config-icon">🧺</span>
                <div>
                  <h4>Arghya Dauras / Soops</h4>
                  <small>दौरा / सूप (Offering Baskets)</small>
                </div>
              </div>
              <div className="stepper">
                <button 
                  className="step-btn" 
                  onClick={() => setDauras(d => Math.max(1, d - 1))}
                  aria-label="Decrease Dauras"
                >−</button>
                <span className="step-val">{dauras}</span>
                <button 
                  className="step-btn" 
                  onClick={() => setDauras(d => d + 1)}
                  aria-label="Increase Dauras"
                >+</button>
              </div>
            </div>

            {/* People Control */}
            <div className="config-box">
              <div className="config-label">
                <span className="config-icon">👨‍👩‍👧‍👦</span>
                <div>
                  <h4>Family & Prashad Count</h4>
                  <small>प्रसाद वितरण (People eating prasad)</small>
                </div>
              </div>
              <div className="stepper">
                <button 
                  className="step-btn" 
                  onClick={() => setPeople(p => Math.max(5, p - 5))}
                  aria-label="Decrease People"
                >−</button>
                <span className="step-val">{people}</span>
                <button 
                  className="step-btn" 
                  onClick={() => setPeople(p => p + 5)}
                  aria-label="Increase People"
                >+</button>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="metrics-summary">
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Wheat Flour:</strong> {calculation.categories.prasad[0].quantity} kg
            </div>
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Pure Gur:</strong> {calculation.categories.prasad[1].quantity} kg
            </div>
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Cow Ghee:</strong> {calculation.categories.prasad[2].quantity} kg
            </div>
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Sugarcane:</strong> {calculation.categories.fruits[0].quantity} pcs
            </div>
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Bananas:</strong> {calculation.categories.fruits[2].quantity}
            </div>
            <div className="metric-pill">
              <span className="pill-dot"></span>
              <strong>Diyas:</strong> {calculation.categories.rituals[2].quantity} pcs
            </div>
          </div>
        </div>

        {/* Action & Filter Toolbar */}
        <div className="samagri-toolbar">
          <div className="tabs-wrapper">
            <button 
              className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Items ({totalItemsCount})
            </button>
            <button 
              className={`filter-tab ${activeTab === "prasad" ? "active" : ""}`}
              onClick={() => setActiveTab("prasad")}
            >
              🍚 Prasad & Cooking
            </button>
            <button 
              className={`filter-tab ${activeTab === "fruits" ? "active" : ""}`}
              onClick={() => setActiveTab("fruits")}
            >
              🎋 Holy Fruits
            </button>
            <button 
              className={`filter-tab ${activeTab === "rituals" ? "active" : ""}`}
              onClick={() => setActiveTab("rituals")}
            >
              🪔 Puja Essentials
            </button>
            <button 
              className={`filter-tab ${activeTab === "pending" ? "active" : ""}`}
              onClick={() => setActiveTab("pending")}
            >
              ⏳ To Buy ({totalItemsCount - checkedCount})
            </button>
            <button 
              className={`filter-tab ${activeTab === "checked" ? "active" : ""}`}
              onClick={() => setActiveTab("checked")}
            >
              ✅ Purchased ({checkedCount})
            </button>
          </div>

          <div className="toolbar-actions">
            <div className="search-box">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search items (e.g. ghee, ganna, kheer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn btn-outline" onClick={handleWhatsAppShare} title="Share to WhatsApp">
              <Share2 size={16} /> WhatsApp List
            </button>
            <button className="btn btn-outline" onClick={handlePrint} title="Print Checklist">
              <Printer size={16} /> Print
            </button>
          </div>
        </div>

        {/* Checklist Progress Bar */}
        <div className="progress-banner">
          <div className="progress-info">
            <span>Market Shopping Checklist: <strong>{checkedCount}</strong> of <strong>{totalItemsCount}</strong> items acquired</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="samagri-grid">
          {filteredItems.map((item) => {
            const isChecked = !!checkedMap[item.id];
            return (
              <div 
                key={item.id} 
                className={`samagri-item-card ${isChecked ? "item-checked" : ""}`}
                onClick={() => toggleCheck(item.id)}
              >
                <div className="item-checkbox-container">
                  <div className={`custom-checkbox ${isChecked ? "checked" : ""}`}>
                    {isChecked && <Check size={14} />}
                  </div>
                </div>

                <div className="item-icon-box">{item.icon}</div>

                <div className="item-content">
                  <div className="item-header-row">
                    <h3 className="item-title">{item.name}</h3>
                    {item.id.startsWith("custom_") && (
                      <button 
                        className="delete-custom-btn" 
                        onClick={(e) => { e.stopPropagation(); removeCustomItem(item.id); }}
                        title="Remove custom item"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  <p className="item-desc">{item.subtext}</p>
                </div>

                <div className="item-quantity-badge">
                  <span className="qty-number">{item.quantity}</span>
                  <span className="qty-unit">{item.unit}</span>
                </div>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="empty-state">
              <p>No items found matching your filter or search query.</p>
            </div>
          )}
        </div>

        {/* Add Custom Item Section */}
        <div className="card add-custom-card">
          <div className="card-head">
            <Sparkles size={18} className="gold-text" />
            <div>
              <h3>Add Custom Family Item (अतिरिक्त सामग्री जोड़ें)</h3>
              <p>Have specific items required by your ancestral family tradition? Add them to your checklist here.</p>
            </div>
          </div>
          <form className="add-custom-form" onSubmit={handleAddCustom}>
            <input 
              type="text" 
              placeholder="Item name (e.g. Supari, Pitha, Special Diya)..." 
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="Qty (e.g. 2, 500, 1)" 
              value={newItemQty}
              onChange={(e) => setNewItemQty(e.target.value)}
              className="qty-input"
              required
            />
            <select 
              value={newItemUnit} 
              onChange={(e) => setNewItemUnit(e.target.value)}
              className="unit-select"
            >
              <option value="kg">kg (Kilogram)</option>
              <option value="grams">grams (g)</option>
              <option value="pieces (pcs)">pieces (pcs)</option>
              <option value="dozens">dozens</option>
              <option value="Liters">Liters</option>
              <option value="packets">packets</option>
              <option value="meters">meters</option>
            </select>
            <select 
              value={newItemCat} 
              onChange={(e) => setNewItemCat(e.target.value)}
              className="cat-select"
            >
              <option value="prasad">Prasad</option>
              <option value="fruits">Fruits & Offerings</option>
              <option value="rituals">Ritual Essentials</option>
            </select>
            <button type="submit" className="btn btn-primary">
              <Plus size={16} /> Add Item
            </button>
          </form>
        </div>

        {/* Pro Tip Box */}
        <div className="pro-tip-box">
          <Info size={20} className="gold-text" />
          <p>
            <strong>Purity Tip:</strong> According to ancient tradition, all Thekua and Kharna prasad must be cooked strictly on a clay mud stove (Mitti ka Chulha) using mango wood (Aam ki lakdi) and pure cow ghee in brand new or washed brass/bronze utensils.
          </p>
        </div>
      </div>
    </section>
  );
}
