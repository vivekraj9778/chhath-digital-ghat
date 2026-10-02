import { useMemo, useState } from "react"; import { calculateKharna, smartUnit } from "../../utils/quantityCalculator"; import IngredientRow from "./IngredientRow"; import "./KharnaCalculator.css";
export default function KharnaCalculator(){
  const [people,setPeople]=useState(10);
  const items=useMemo(()=>calculateKharna(people).map(x=>({...x,display:smartUnit(x.amount,x.unit)})),[people]);
  return <section className="section" id="kharna"><div className="container"><span className="pill">🍚 Kharna planner</span><h2 className="section-title">How much prasad do you need?</h2><p className="section-subtitle">Planning estimates only—serving size and family tradition can change quantities.</p>
  <div className="calculator card"><div className="people-control"><label>Number of people</label><div className="counter"><button onClick={()=>setPeople(p=>Math.max(1,p-1))}>−</button><strong>{people}</strong><button onClick={()=>setPeople(p=>p+1)}>+</button></div></div><div className="ingredients">{items.map(x=><IngredientRow key={x.name} item={x}/>)}</div></div>
  </div></section>
}