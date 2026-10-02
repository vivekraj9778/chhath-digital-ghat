import "./DiyaAnimation.css";
export default function DiyaAnimation({count=8}){return <div className="diyas">{Array.from({length:count},(_,i)=><div className="diya flicker" key={i}>🪔</div>)}</div>}