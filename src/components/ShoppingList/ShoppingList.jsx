import { useEffect, useState } from "react"; import ShoppingItem from "./ShoppingItem"; import "./ShoppingList.css";
const items=[
 {name:"Rice",icon:"🍚"},{name:"Wheat Flour",icon:"🌾"},{name:"Gur",icon:"🍯"},{name:"Ghee",icon:"🧈"},{name:"Chana Dal",icon:"🫘"},
 {name:"Banana",icon:"🍌"},{name:"Coconut",icon:"🥥"},{name:"Sugarcane",icon:"🎋"},{name:"Citrus fruits",icon:"🍊"},{name:"Guava",icon:"🍐"},
 {name:"Thekua",icon:"🍪"},{name:"Soop / Daura",icon:"🧺"},{name:"Diya & wicks",icon:"🪔"},{name:"Ganga Jal",icon:"💧"}
];
export default function ShoppingList(){const [checked,setChecked]=useState(()=>JSON.parse(localStorage.getItem("chhath-shopping")||"{}"));useEffect(()=>localStorage.setItem("chhath-shopping",JSON.stringify(checked)),[checked]);return <section className="section"><div className="container"><span className="pill">🛒 Shopping list</span><h2 className="section-title">Prepare without forgetting anything</h2><div className="shop-grid card">{items.map(x=><ShoppingItem key={x.name} item={x} checked={!!checked[x.name]} onChange={()=>setChecked(c=>({...c,[x.name]:!c[x.name]}))}/>)}</div></div></section>}