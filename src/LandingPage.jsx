import { useState, useEffect, useRef } from "react";

const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost/dogood-v4/api").replace(/\/+$/, "");
const apiUrl = (path) => `${API_BASE}/${path.replace(/^\/+/, "")}`;

const C = {
  beige:"#F3EFEF", beigedk:"#E1DADB", beigelt:"#FCFAFA",
  cafe:"#1653BB", cafeMd:"#0F45A2", cafeLt:"#F0C21D", cafeXlt:"#F8D868",
  cream:"#FFFFFF", ink:"#121212", sub:"#3B3B3B", muted:"#6F6B6B", faint:"#B7B1B1",
  gray:"#6A6762", grayLt:"#D4CECF", graySoft:"#EDE7E8", black:"#111111",
  white:"#FFFFFF", shadow:"rgba(22,83,187,.12)", shadowMd:"rgba(22,83,187,.22)",
};
const BRAND = {
  logoPrimary:"/brand/logo-primary-trim.png",
  logoYellow:"/brand/logo-yellow-trim.png",
  logoBlack:"/brand/logo-black-trim.png",
  isotypeBlueYellow:"/brand/isotype-blueyellow-trim.png",
  isotypeYellow:"/brand/isotype-yellow-trim.png",
  handBlue:"/brand/graphic-hand-blue.jpg",
};

const E = {
  dog:"\uD83D\uDC15",
  cat:"\uD83D\uDC08",
  poodle:"\uD83D\uDC29",
  catFace:"\uD83D\uDC31",
  guideDog:"\uD83E\uDDAE",
  smileCat:"\uD83D\uDE38",
  dogFace:"\uD83D\uDC36",
  blackCat:"\uD83D\uDC08\u200D\u2B1B",
  serviceDog:"\uD83D\uDC15\u200D\uD83E\uDDBA",
  mapPin:"\uD83D\uDCCD",
  map:"\uD83D\uDDFA\uFE0F",
  paw:"\uD83D\uDC3E",
  house:"\uD83C\uDFE1",
  heart:"\u2764\uFE0F",
  clipboard:"\uD83D\uDCCB",
  check:"\u2705",
  email:"\uD83D\uDCE7",
  leaf:"\uD83C\uDF3F",
  donate:"\uD83D\uDCB8",
  volunteer:"\uD83E\uDD1D",
  homeCare:"\uD83C\uDFE0",
  phone:"\uD83D\uDCF1",
  clock:"\u23F0",
  shield:"\uD83D\uDEE1\uFE0F",
  sparkle:"\u2728",
  bath:"\uD83D\uDEC1",
  vet:"\u2695\uFE0F",
  train:"\uD83C\uDF93",
  toy:"\uD83E\uDDF8",
  food:"\uD83E\uDDB4",
  bed:"\uD83D\uDEE5\uFE0F",
  book:"\uD83D\uDCD6",
  calendar:"\uD83D\uDCC5",
};

const DOG_DOODLE = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240' fill='none' stroke='#1F1B18' stroke-width='1.1' stroke-linecap='round' stroke-linejoin='round'>
    <g opacity='.12'>
      <circle cx='24' cy='26' r='6'/><circle cx='16' cy='37' r='4'/><circle cx='29' cy='39' r='4'/><circle cx='37' cy='29' r='4'/><path d='M16 48c6-7 18-7 24 0'/>
      <path d='M70 24h20c4 0 6 2 6 6s-2 6-6 6H70c-4 0-6-2-6-6s2-6 6-6Z'/><circle cx='62' cy='27' r='4'/><circle cx='62' cy='35' r='4'/><circle cx='98' cy='27' r='4'/><circle cx='98' cy='35' r='4'/>
      <path d='M146 30l6-7 6 7'/><path d='M158 30l6-7 6 7'/><circle cx='159' cy='42' r='11'/><circle cx='155' cy='40' r='1.2' fill='#1F1B18'/><circle cx='163' cy='40' r='1.2' fill='#1F1B18'/><path d='M157 45h4'/>
      <circle cx='32' cy='118' r='10'/><circle cx='28' cy='115' r='1.2' fill='#1F1B18'/><circle cx='36' cy='115' r='1.2' fill='#1F1B18'/><path d='M29 121h6'/><path d='M22 109l4-4'/><path d='M42 109l-4-4'/>
      <path d='M84 112h24c4 0 6 2 6 6s-2 6-6 6H84c-4 0-6-2-6-6s2-6 6-6Z'/><circle cx='76' cy='114' r='4'/><circle cx='76' cy='122' r='4'/><circle cx='116' cy='114' r='4'/><circle cx='116' cy='122' r='4'/>
      <circle cx='170' cy='112' r='5'/><circle cx='162' cy='124' r='3.5'/><circle cx='174' cy='126' r='3.5'/><circle cx='181' cy='118' r='3.5'/><path d='M162 136c4-5 12-5 16 0'/>
      <path d='M118 186h18c3 0 5 2 5 4s-2 4-5 4h-18c-3 0-5-2-5-4s2-4 5-4Z'/><circle cx='112' cy='188' r='3'/><circle cx='112' cy='194' r='3'/><circle cx='144' cy='188' r='3'/><circle cx='144' cy='194' r='3'/>
      <circle cx='46' cy='182' r='2'/><circle cx='58' cy='176' r='1.8'/><circle cx='72' cy='184' r='2.2'/><circle cx='132' cy='176' r='2'/><circle cx='158' cy='182' r='1.8'/>
      <circle cx='205' cy='74' r='2.2'/><circle cx='214' cy='68' r='1.5'/><circle cx='224' cy='77' r='2'/>
      <path d='M198 152h20c3 0 5 2 5 4s-2 4-5 4h-20c-3 0-5-2-5-4s2-4 5-4Z'/><circle cx='192' cy='154' r='3'/><circle cx='192' cy='160' r='3'/><circle cx='224' cy='154' r='3'/><circle cx='224' cy='160' r='3'/>
      <circle cx='198' cy='198' r='8'/><circle cx='194' cy='195' r='1.2' fill='#1F1B18'/><circle cx='202' cy='195' r='1.2' fill='#1F1B18'/><path d='M195 201h6'/>
    </g>
  </svg>`
)}`;

const PAW_CURSOR = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
    <circle cx='13' cy='15.5' r='5.1' fill='#6B4426'/>
    <circle cx='7.5' cy='8.2' r='2.6' fill='#6B4426'/>
    <circle cx='11.4' cy='5.6' r='2.3' fill='#6B4426'/>
    <circle cx='15.7' cy='5.9' r='2.3' fill='#6B4426'/>
    <circle cx='19.1' cy='9' r='2.5' fill='#6B4426'/>
  </svg>`
)}`;

const sectionTexture = (base)=>({
  backgroundColor:base,
  backgroundImage:`
    linear-gradient(180deg, rgba(255,255,255,.08) 0%, rgba(23,21,19,.02) 100%),
    radial-gradient(circle at 86% 14%, ${C.cafeLt}22 0, transparent 38%),
    radial-gradient(circle at 13% 84%, ${C.beigedk}42 0, transparent 36%)
  `,
  backgroundSize:"100% 100%, 720px 720px, 640px 640px",
  backgroundRepeat:"no-repeat, no-repeat, no-repeat",
  backgroundPosition:"center top, 84% 12%, 13% 86%",
});

const G = `
  @font-face{
    font-family:'Fredoka';
    src:url('/brand/AddenRegular.ttf') format('truetype');
    font-weight:400 900;
    font-style:normal;
    font-display:swap;
  }
  @font-face{
    font-family:'Nunito';
    src:url('/brand/Futura.ttc') format('truetype-collection');
    font-weight:300 900;
    font-style:normal;
    font-display:swap;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'Nunito','Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;
    background:
      linear-gradient(180deg, rgba(255,255,255,.42) 0%, rgba(26,80,184,.08) 100%),
      radial-gradient(circle at 9% 16%, rgba(225,218,219,.9) 0, transparent 40%),
      radial-gradient(circle at 90% 82%, rgba(22,83,187,.12) 0, transparent 40%),
      radial-gradient(circle at 45% 45%, rgba(240,194,29,.14) 0, transparent 50%),
      url("${BRAND.handBlue}"),
      url("${BRAND.handBlue}"),
      #F5F0F1;
    background-size:100% 100%, 780px 780px, 820px 820px, 980px 980px, 520px 290px, 680px 380px, auto;
    background-repeat:no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat, repeat;
    background-position:center top, 0 0, 100% 100%, center center, 0 0, 260px 170px, 0 0;
    background-attachment:fixed, fixed, fixed, fixed, scroll, scroll, scroll;
    color:#2C1A0E;
    overflow-x:hidden;
    cursor:url("${PAW_CURSOR}") 4 2, auto;
  }
  button,input,select,textarea{font-family:'Nunito','Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;}
  button,a,[role="button"]{
    cursor:url("${PAW_CURSOR}") 4 2, pointer;
    transition:transform .22s ease,box-shadow .22s ease,filter .22s ease,background-color .22s ease,border-color .22s ease,color .22s ease;
    will-change:transform;
  }
  button:hover,a:hover,[role="button"]:hover{filter:saturate(1.08);transform:translateY(-2px) scale(1.015)}
  button:active,a:active,[role="button"]:active{transform:translateY(1px) scale(.98)}
  @keyframes splashFadeIn{from{opacity:0}to{opacity:1}}
  @keyframes splashOut{from{opacity:1}to{opacity:0;pointer-events:none}}
  @keyframes logoPop{0%{opacity:0;transform:scale(.5)}70%{transform:scale(1.1)}100%{opacity:1;transform:scale(1)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-12px) rotate(2deg)}}
  @keyframes floatSlow{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
  @keyframes pinBounce{0%,100%{transform:translateY(0)}40%{transform:translateY(-8px)}60%{transform:translateY(-4px)}}
  @keyframes blobIn{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
  @keyframes pulseDot{0%,100%{box-shadow:0 0 0 0 rgba(92,61,30,.4)}70%{box-shadow:0 0 0 8px rgba(92,61,30,0)}}
  @keyframes slideInfinite{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}
  @keyframes navDown{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
  @keyframes dotPulse{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(1.5);opacity:1}}
  @keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes shimmerSweep{0%{transform:translateX(-130%) skewX(-16deg)}100%{transform:translateX(130%) skewX(-16deg)}}
  @keyframes orbitSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes bobSoft{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
  @keyframes driftGlow{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(14px,-10px) scale(1.05)}}
  @keyframes pawBurst{0%{opacity:0;transform:translate(12px,12px) scale(.5) rotate(0deg)}40%{opacity:.45}100%{opacity:0;transform:translate(-10px,-14px) scale(1.2) rotate(-24deg)}}
  @keyframes btnBounce{0%{transform:translateY(0) scale(1)}50%{transform:translateY(-3px) scale(1.03)}100%{transform:translateY(0) scale(1)}}
  @keyframes petBubbleRise{0%{opacity:0;transform:translateY(8px) scale(.6)}20%{opacity:1}100%{opacity:0;transform:translateY(-26px) scale(1.08)}}
  @keyframes floatCardA{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes floatCardB{0%,100%{transform:translateY(-3px)}50%{transform:translateY(6px)}}
  @keyframes floatCardC{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-6px) rotate(.4deg)}}
  .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease;}
  .reveal.visible{opacity:1;transform:none;}
  .reveal-left{opacity:0;transform:translateX(-30px);transition:opacity .7s ease,transform .7s ease;}
  .reveal-left.visible{opacity:1;transform:none;}
  .reveal-right{opacity:0;transform:translateX(30px);transition:opacity .7s ease,transform .7s ease;}
  .reveal-right.visible{opacity:1;transform:none;}
  .paw-btn{position:relative;overflow:hidden;isolation:isolate}
  .paw-btn::after{
    content:"\\1F43E";
    position:absolute;
    right:12px;
    bottom:8px;
    font-size:1rem;
    opacity:0;
    pointer-events:none;
    transform:translate(12px,12px) scale(.5) rotate(0deg);
  }
  .paw-btn:hover{animation:btnBounce .38s ease}
  .paw-btn:hover::after{animation:pawBurst .75s ease forwards}
  .float-card{will-change:transform,box-shadow}
  .float-card.reveal.visible{animation:floatCardA 5.3s ease-in-out infinite}
  .float-card.alt.reveal.visible{animation:floatCardB 6.1s ease-in-out infinite}
  .float-card.soft.reveal.visible{animation:floatCardC 5.7s ease-in-out infinite}
  .pet-bubble{
    position:fixed;
    z-index:99999;
    pointer-events:none;
    background:rgba(44,26,14,.9);
    color:#fff;
    border:1px solid rgba(255,255,255,.18);
    border-radius:999px;
    font-size:.72rem;
    font-weight:800;
    padding:4px 10px;
    box-shadow:0 8px 18px rgba(0,0,0,.2);
    animation:petBubbleRise .85s ease forwards;
  }
  .landing-shell.hc{filter:contrast(1.12) saturate(1.06)}
  .landing-shell.hc .hc-chip{background:${C.ink} !important;color:${C.white} !important;border-color:${C.white}55 !important}
  .landing-shell.rm *{animation:none !important;transition:none !important}
  .hero-section,.video-section,.map-section,.match-section,.process-section,.services-section,.help-section,.products-section{position:relative}
  @media (prefers-reduced-motion: reduce){
    *{animation:none !important;transition:none !important}
  }
  @media (max-width: 1100px){
    .nav-main-inner{padding-top:8px !important;padding-bottom:8px !important}
    .nav-main-head{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px}
    .nav-actions{display:flex;align-items:center;gap:8px;margin-left:auto}
    .nav-links{width:100%;justify-content:flex-start;gap:2px;overflow-x:auto;white-space:nowrap;padding-bottom:2px !important}
    .nav-links a{flex:0 0 auto}
    .hero-grid,.video-grid,.map-grid,.match-grid,.about-grid{grid-template-columns:1fr !important;gap:22px !important}
    .steps-grid,.services-grid,.help-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}
    .metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}
  }
  @media (max-width: 780px){
    .nav-top-inner{height:auto !important;padding-top:6px !important;padding-bottom:6px !important}
    .nav-top-inner>div{font-size:.68rem !important}
    .hero-section{padding-top:132px !important}
    .hero-copy h1{font-size:clamp(2rem,10vw,3rem) !important;line-height:1.05 !important}
    .hero-copy p{font-size:.98rem !important;max-width:100% !important}
    .hero-kpis{display:grid !important;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px !important}
    .hero-kpis>div{padding-right:0 !important;margin-right:0 !important;border-right:none !important;background:rgba(255,253,249,.75);border:1px solid #E8DFD0;border-radius:14px;padding:10px 8px !important}
    .hero-art{height:340px !important}
    .hero-pin{display:none !important}
    .nav-actions .nav-demo-btn{display:none !important}
    .nav-login{padding:8px 14px !important;font-size:.8rem !important}
    .steps-grid,.services-grid,.help-grid{grid-template-columns:1fr !important}
    .products-head{gap:10px !important}
    .products-tabs{width:100%;justify-content:flex-start}
    .faq-grid{grid-template-columns:1fr !important}
    .footer-grid{grid-template-columns:1fr !important;gap:22px !important}
  }
  @media (max-width: 560px){
    .nav-links a:nth-of-type(n+4){display:none}
    .nav-links{overflow-x:auto;padding-bottom:2px !important}
    .brand-text{width:132px !important;height:46px !important}
    .nav-login{padding:8px 12px !important}
    .hero-art{display:none !important}
    .hero-section{min-height:auto !important;padding-bottom:34px !important}
    .video-card{min-height:260px !important}
    .match-grid{gap:12px !important}
    .match-card,.match-result{padding:14px !important;border-radius:18px !important}
    .process-section,.services-section,.help-section,.products-section{padding-top:66px !important;padding-bottom:66px !important}
    .a11y-dock{right:12px !important;bottom:92px !important}
    .landing-toast{right:12px !important;left:12px !important;bottom:84px !important}
  }
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-thumb{background:#F0C21D;border-radius:5px}
`;

function useReveal(){
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
    },{threshold:.12});
    const run=()=>document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>obs.observe(el));
    run();
    const t=setTimeout(run,500);
    return()=>{obs.disconnect();clearTimeout(t);};
  },[]);
}

const floatCardAnim=(i=0)=>({
  animation:`${i%3===0?"floatCardA":i%3===1?"floatCardB":"floatCardC"} ${5.1+i*.25}s ease-in-out infinite`,
  animationDelay:`${(i%5)*.14}s`,
});

const LogoSVG=({size=40,color="#5C3D1E"})=>{
  const wordmark=size>=64;
  let src=wordmark?BRAND.logoPrimary:BRAND.isotypeBlueYellow;
  if(color===C.white||color===C.cafeXlt)src=wordmark?BRAND.logoYellow:BRAND.isotypeYellow;
  if(color===C.ink)src=wordmark?BRAND.logoBlack:BRAND.isotypeBlueYellow;
  return(
    <img
      src={src}
      alt="DoGood"
      style={{
        width:wordmark?size*2.5:size,
        height:wordmark?size*1.95:size,
        objectFit:"contain",
        display:"block",
      }}
    />
  );
};

function BoneShape({w=86,h=22,color=`${C.cafeXlt}26`,style={}}){
  const r=Math.max(6,Math.round(h*.33));
  return(
    <div style={{position:"absolute",width:w,height:h,borderRadius:999,background:color,...style}}>
      <span style={{position:"absolute",left:-r,top:-r,width:r*2,height:r*2,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",left:-r,bottom:-r,width:r*2,height:r*2,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",right:-r,top:-r,width:r*2,height:r*2,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",right:-r,bottom:-r,width:r*2,height:r*2,borderRadius:"50%",background:color}}/>
    </div>
  );
}

function PawPrint({size=34,color=`${C.cafeXlt}33`,style={}}){
  const toe=Math.max(5,Math.round(size*.18));
  const padW=Math.max(14,Math.round(size*.46));
  const padH=Math.max(11,Math.round(size*.34));
  return(
    <div style={{position:"absolute",width:size,height:size,...style}}>
      <span style={{position:"absolute",left:size*.08,top:size*.28,width:toe,height:toe,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",left:size*.32,top:size*.12,width:toe,height:toe,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",left:size*.56,top:size*.18,width:toe,height:toe,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",left:size*.74,top:size*.36,width:toe,height:toe,borderRadius:"50%",background:color}}/>
      <span style={{position:"absolute",left:size*.26,top:size*.52,width:padW,height:padH,borderRadius:"60% 60% 48% 48% / 65% 65% 35% 35%",background:color}}/>
    </div>
  );
}

function AmbientBackdrop(){
  return(
    <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,opacity:.11,backgroundImage:`radial-gradient(circle, ${C.beigedk} 1px, transparent 1px)`,backgroundSize:"42px 42px"}}/>
      <div style={{position:"absolute",top:"7%",left:"5%",width:160,height:160,borderRadius:"50%",background:`${C.beigedk}72`,animation:"driftGlow 13s ease-in-out infinite"}}/>
      <div style={{position:"absolute",top:"22%",right:"8%",width:220,height:220,borderRadius:"50%",background:`${C.cafeXlt}42`,animation:"driftGlow 16s ease-in-out infinite",animationDelay:".7s"}}/>
      <div style={{position:"absolute",top:"47%",left:"7%",width:140,height:140,borderRadius:"50%",background:`${C.beigedk}66`,animation:"driftGlow 14s ease-in-out infinite",animationDelay:".3s"}}/>
      <div style={{position:"absolute",top:"64%",right:"12%",width:170,height:170,borderRadius:"50%",background:`${C.cafeXlt}33`,animation:"driftGlow 15s ease-in-out infinite",animationDelay:".9s"}}/>
      <div style={{position:"absolute",bottom:"8%",left:"18%",width:130,height:130,borderRadius:"50%",background:`${C.beigedk}5f`,animation:"driftGlow 12s ease-in-out infinite",animationDelay:".4s"}}/>
      <div style={{position:"absolute",bottom:"26%",right:"32%",width:105,height:105,borderRadius:"50%",background:`${C.cafeXlt}2B`,animation:"driftGlow 11s ease-in-out infinite",animationDelay:".2s"}}/>
      <div style={{position:"absolute",top:"30%",left:"43%",width:76,height:76,borderRadius:"50%",background:`${C.grayLt}40`,animation:"driftGlow 10.5s ease-in-out infinite",animationDelay:".5s"}}/>
      <div style={{position:"absolute",top:"76%",left:"62%",width:94,height:94,borderRadius:"50%",background:`${C.beigedk}4A`,animation:"driftGlow 11.2s ease-in-out infinite",animationDelay:".6s"}}/>
      <div style={{position:"absolute",top:"12%",right:"42%",width:58,height:58,borderRadius:"50%",background:`${C.cafeXlt}2A`,animation:"driftGlow 9.8s ease-in-out infinite",animationDelay:".25s"}}/>

      <BoneShape color={`${C.cafeXlt}22`} style={{top:"14%",right:"30%",transform:"rotate(-18deg)"}}/>
      <BoneShape color={`${C.cafeXlt}20`} w={74} h={20} style={{top:"34%",left:"9%",transform:"rotate(20deg)"}}/>
      <BoneShape color={`${C.cafeXlt}21`} w={96} h={24} style={{top:"52%",right:"18%",transform:"rotate(-12deg)"}}/>
      <BoneShape color={`${C.cafeXlt}1F`} w={78} h={20} style={{top:"74%",left:"12%",transform:"rotate(-10deg)"}}/>
      <BoneShape color={`${C.cafeXlt}23`} w={90} h={22} style={{bottom:"9%",right:"24%",transform:"rotate(18deg)"}}/>
      <BoneShape color={`${C.cafeXlt}20`} w={76} h={19} style={{top:"86%",left:"34%",transform:"rotate(8deg)"}}/>
      <BoneShape color={`${C.cafeXlt}1D`} w={66} h={18} style={{top:"26%",right:"45%",transform:"rotate(-26deg)"}}/>
      <BoneShape color={`${C.grayLt}2A`} w={70} h={18} style={{top:"41%",left:"42%",transform:"rotate(11deg)"}}/>
      <BoneShape color={`${C.grayLt}26`} w={62} h={17} style={{bottom:"22%",left:"57%",transform:"rotate(-16deg)"}}/>

      <PawPrint color={`${C.cafeXlt}2F`} size={40} style={{top:"18%",left:"22%",transform:"rotate(-14deg)"}}/>
      <PawPrint color={`${C.cafeXlt}2B`} size={36} style={{top:"41%",right:"9%",transform:"rotate(12deg)"}}/>
      <PawPrint color={`${C.cafeXlt}2A`} size={32} style={{top:"58%",left:"20%",transform:"rotate(-8deg)"}}/>
      <PawPrint color={`${C.cafeXlt}2F`} size={38} style={{top:"80%",right:"14%",transform:"rotate(16deg)"}}/>
      <PawPrint color={`${C.grayLt}30`} size={30} style={{top:"28%",left:"56%",transform:"rotate(8deg)"}}/>
      <PawPrint color={`${C.grayLt}2B`} size={34} style={{bottom:"15%",left:"40%",transform:"rotate(-12deg)"}}/>
    </div>
  );
}

function Splash({onDone}){
  const [out,setOut]=useState(false);
  useEffect(()=>{
    const t1=setTimeout(()=>setOut(true),2400);
    const t2=setTimeout(()=>onDone(),2900);
    return()=>{clearTimeout(t1);clearTimeout(t2);};
  },[]);
  return(
    <div style={{position:"fixed",inset:0,zIndex:9999,background:C.beige,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,overflow:"hidden",
      animation:out?"splashOut .5s ease forwards":"splashFadeIn .3s ease"}}>
      <div style={{position:"absolute",inset:0,background:`linear-gradient(180deg, rgba(255,255,255,.55), rgba(22,83,187,.08)), url('${BRAND.handBlue}') center/cover no-repeat`,opacity:.22}}/>
      <div style={{animation:"logoPop .9s .2s ease both",opacity:0}}>
        <LogoSVG size={126} color={C.cafe}/>
      </div>
      <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"3rem",color:C.cafe,animation:"fadeUp .6s .7s ease both",opacity:0,position:"relative",zIndex:1}}>DOGOOD</div>
      <div style={{fontSize:".95rem",color:C.sub,fontWeight:700,animation:"fadeUp .6s 1s ease both",opacity:0,position:"relative",zIndex:1}}>amor peludo</div>
      <div style={{marginTop:16,display:"flex",gap:8,animation:"fadeUp .4s 1.3s ease both",opacity:0}}>
        {[0,1,2].map(i=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:C.cafeLt,animation:`dotPulse 1.2s ${i*.2}s infinite`}}/>)}
      </div>
    </div>
  );
}

function Navbar({onLoginClick,onDemoClick}){
  const [scrolled,setScrolled]=useState(false);
  const [compact,setCompact]=useState(false);
  const [mobile,setMobile]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    const rs=()=>{
      const w=window.innerWidth;
      setCompact(w<1024);
      setMobile(w<700);
    };
    window.addEventListener("scroll",fn);
    window.addEventListener("resize",rs);
    rs();
    return()=>{window.removeEventListener("scroll",fn);window.removeEventListener("resize",rs);};
  },[]);
  const links=mobile
    ?[["Conocenos","#conocenos"],["Video","#video-preview"],["Adoptar","#adoptar"]]
    :compact
    ?[["Conocenos","#conocenos"],["Video","#video-preview"],["Adoptar","#adoptar"],["¿Tienes dudas?","#faq"]]
    :[["Conocenos","#conocenos"],["Video","#video-preview"],["Como funciona","#como-funciona"],["Servicios","#servicios"],["Productos","#productos"],["Adoptar","#adoptar"],["Guias","#recursos"],["¿Tienes dudas?","#faq"]];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:120,animation:"navDown .5s ease"}}>
      <div style={{background:`linear-gradient(90deg, ${C.ink}, ${C.cafe})`,borderBottom:"1px solid rgba(255,255,255,.08)"}}>
        <div className="nav-top-inner" style={{maxWidth:1240,margin:"0 auto",padding:"0 5%",height:34,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
          <div style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,.86)",fontSize:".74rem",fontWeight:700}}>
            <span style={{width:7,height:7,borderRadius:"50%",background:"#B6B6B6",display:"inline-block"}}/>
            Ciudad de Mexico, MX
          </div>
          {!compact&&<div className="nav-top-right" style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={onDemoClick} className="paw-btn" style={{padding:"4px 10px",borderRadius:50,border:"1px solid rgba(255,255,255,.25)",background:"rgba(255,255,255,.08)",color:"#FFFFFF",fontSize:".7rem",fontWeight:700,cursor:"pointer",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.18)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.08)";}}>
              Demo guiada
            </button>
            {[["Instagram","#"],["Facebook","#"],["TikTok","#"]].map(([n,h])=>(
              <a key={n} href={h} style={{textDecoration:"none",padding:"4px 10px",borderRadius:50,background:"rgba(255,255,255,.08)",color:"#FFFFFF",fontSize:".7rem",fontWeight:700,transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.18)";e.currentTarget.style.color="#FFFFFF";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.08)";e.currentTarget.style.color="#FFFFFF";}}>
                {n}
              </a>
            ))}
          </div>}
        </div>
      </div>

      <div style={{
        background:scrolled?"rgba(250,247,242,.97)":C.beigelt,backdropFilter:"blur(16px)",
        borderBottom:scrolled?`1.5px solid ${C.beigedk}`:"1.5px solid transparent",
        boxShadow:scrolled?`0 4px 24px ${C.shadow}`:"none",transition:"all .35s"
      }}>
        <div className="nav-main-inner" style={{maxWidth:1240,margin:"0 auto",padding:"0 5%",height:compact?"auto":72,minHeight:62,display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:compact?"wrap":"nowrap"}}>
          {compact?(
            <>
              <div className="nav-main-head">
                <a href="#" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
                  <img src={BRAND.logoPrimary} alt="DoGood" className="brand-text" style={{width:144,height:50,objectFit:"contain",display:"block"}}/>
                </a>
                <div className="nav-actions">
                  <button onClick={onDemoClick} className="paw-btn nav-demo-btn" style={{padding:"8px 12px",border:"1px solid #D9C2A8",borderRadius:50,background:C.cream,color:C.cafe,fontWeight:800,fontSize:".78rem",cursor:"pointer"}}>
                    Demo
                  </button>
                  <button onClick={onLoginClick} className="paw-btn nav-login" style={{padding:"9px 16px",border:"none",borderRadius:50,background:C.cafe,color:C.white,fontWeight:800,fontSize:".84rem",cursor:"pointer",transition:"all .2s",boxShadow:`0 4px 14px ${C.shadowMd}`}}
                    onMouseEnter={e=>{e.currentTarget.style.background=C.ink;e.currentTarget.style.transform="translateY(-1px)";}}
                    onMouseLeave={e=>{e.currentTarget.style.background=C.cafe;e.currentTarget.style.transform="none";}}>
                    Entrar
                  </button>
                </div>
              </div>
              <div className="nav-links" style={{display:"flex",alignItems:"center",gap:4,overflowX:"auto",maxWidth:"100%",paddingBottom:4}}>
                {links.map(([l,h])=>(
                  <a key={l} href={h} style={{padding:"8px 14px",borderRadius:50,fontWeight:700,fontSize:".88rem",color:"#5E5E5E",textDecoration:"none",transition:"all .2s"}}
                    onMouseEnter={e=>{e.currentTarget.style.background="#EFE7DC";e.currentTarget.style.color=C.cafe}}
                    onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#5E5E5E";}}>
                    {l}
                  </a>
                ))}
              </div>
            </>
          ):(
            <>
              <a href="#" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
                <img src={BRAND.logoPrimary} alt="DoGood" style={{width:160,height:56,objectFit:"contain",display:"block"}}/>
              </a>
              <div className="nav-links" style={{display:"flex",alignItems:"center",gap:4}}>
                {links.map(([l,h])=>(
                  <a key={l} href={h} style={{padding:"8px 14px",borderRadius:50,fontWeight:700,fontSize:".88rem",color:"#5E5E5E",textDecoration:"none",transition:"all .2s"}}
                    onMouseEnter={e=>{e.currentTarget.style.background="#EFE7DC";e.currentTarget.style.color=C.cafe}}
                    onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#5E5E5E";}}>
                    {l}
                  </a>
                ))}
              </div>
              <button onClick={onLoginClick} className="paw-btn nav-login" style={{padding:"9px 22px",border:"none",borderRadius:50,background:C.cafe,color:C.white,fontWeight:800,fontSize:".88rem",cursor:"pointer",transition:"all .2s",boxShadow:`0 4px 14px ${C.shadowMd}`}}
                onMouseEnter={e=>{e.currentTarget.style.background=C.ink;e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background=C.cafe;e.currentTarget.style.transform="none";}}>
                Iniciar sesion
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function Hero({onLoginClick,onDemoClick}){
  const pins=[
    {emoji:E.dog,top:"10%",left:"14%",delay:0,size:62},
    {emoji:E.cat,top:"6%",right:"12%",delay:.4,size:56},
    {emoji:E.poodle,bottom:"30%",left:"6%",delay:.8,size:50},
    {emoji:E.catFace,bottom:"18%",right:"8%",delay:.2,size:58},
    {emoji:E.guideDog,top:"44%",left:"1%",delay:.6,size:48},
  ];
  return(
    <section className="hero-section" style={{...sectionTexture(C.beigelt),minHeight:"100vh",display:"flex",alignItems:"center",padding:"122px 5% 40px",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle, ${C.beigedk} 1px, transparent 1px)`,backgroundSize:"32px 32px",opacity:.35,pointerEvents:"none"}}/>
      <div className="hero-grid" style={{maxWidth:1240,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center",position:"relative"}}>
        <div className="hero-copy">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:C.beigedk,border:`1.5px solid ${C.cafeXlt}`,borderRadius:50,padding:"6px 18px",marginBottom:22,animation:"fadeUp .6s ease both"}}>
            <span style={{width:8,height:8,borderRadius:"50%",background:C.cafe,display:"block",animation:"pulseDot 1.8s infinite"}}/>
            <span style={{fontSize:".76rem",fontWeight:800,color:C.cafeMd,textTransform:"uppercase",letterSpacing:1.2}}>Adopcion responsable Mexico</span>
          </div>
          <h1 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(2.6rem,4.5vw,4.2rem)",color:C.cafe,lineHeight:1.08,marginBottom:18,animation:"fadeUp .7s .1s ease both",opacity:0}}>
            Encuentra a tu<br/><span style={{color:C.cafeLt}}>peludo</span> companero<br/>de vida
          </h1>
          <p style={{fontSize:"1.05rem",color:C.sub,lineHeight:1.8,marginBottom:30,maxWidth:440,animation:"fadeUp .7s .2s ease both",opacity:0}}>
            Conectamos animales rescatados con familias que los esperan. Adopta de forma responsable y dale un hogar a quien mas lo necesita.
          </p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",animation:"fadeUp .7s .3s ease both",opacity:0}}>
            <button onClick={onLoginClick} className="paw-btn" style={{padding:"14px 36px",border:"none",borderRadius:50,background:C.cafe,color:C.white,fontWeight:800,fontSize:"1rem",cursor:"pointer",boxShadow:`0 8px 28px ${C.shadowMd}`,transition:"all .25s"}}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="none"}>
              Quiero adoptar
            </button>
            <button onClick={onDemoClick} className="paw-btn" style={{padding:"14px 28px",border:`2px solid ${C.cafeXlt}`,borderRadius:50,background:C.cream,color:C.cafe,fontWeight:800,fontSize:".95rem",cursor:"pointer",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.borderColor=C.cafe;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.borderColor=C.cafeXlt;}}>
              Ver demo guiada
            </button>
            <a href="#conocenos" style={{padding:"14px 32px",border:`2.5px solid ${C.cafeXlt}`,borderRadius:50,background:"transparent",color:C.cafeMd,fontWeight:700,fontSize:"1rem",textDecoration:"none",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=C.cafe;e.currentTarget.style.color=C.cafe}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.cafeXlt;e.currentTarget.style.color=C.cafeMd}}>
              Conocenos
            </a>
          </div>
          <div className="hero-kpis" style={{display:"flex",gap:0,marginTop:40,animation:"fadeUp .7s .4s ease both",opacity:0}}>
            {[["100+","Animales rescatados"],["50+","Familias felices"],["10+","Refugios aliados"]].map(([n,l],i)=>(
              <div key={l} style={{flex:1,paddingRight:i<2?24:0,marginRight:i<2?24:0,borderRight:i<2?`1.5px solid ${C.beigedk}`:"none"}}>
                <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"2.2rem",color:C.cafe,lineHeight:1}}>{n}</div>
                <div style={{fontSize:".76rem",color:C.muted,marginTop:3,fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-art" style={{position:"relative",height:520,animation:"blobIn .9s .2s ease both",opacity:0}}>
          <div style={{position:"absolute",top:"50%",right:"-8%",transform:"translateY(-50%)",width:"92%",height:"88%",
            background:`linear-gradient(145deg,${C.cafe},${C.cafeMd},${C.cafeLt})`,
            borderRadius:"62% 38% 46% 54% / 60% 44% 56% 40%",
            boxShadow:`0 24px 64px ${C.shadowMd}`}}/>
          <div style={{position:"absolute",bottom:"4%",right:"6%",fontSize:"10rem",lineHeight:1,filter:"drop-shadow(0 8px 24px rgba(0,0,0,.25))",zIndex:2,animation:"floatSlow 4s ease-in-out infinite"}}>{E.cat}</div>
          <div style={{position:"absolute",bottom:"6%",right:"34%",fontSize:"9rem",lineHeight:1,filter:"drop-shadow(0 8px 24px rgba(0,0,0,.2))",zIndex:2,animation:"floatSlow 4.5s ease-in-out infinite",animationDelay:".5s"}}>{E.dog}</div>
          {pins.map((p,i)=>(
            <div key={i} className="hero-pin" style={{position:"absolute",zIndex:3,...(p.top?{top:p.top}:{}),...(p.bottom?{bottom:p.bottom}:{}),...(p.left!==undefined?{left:p.left}:{}),...(p.right!==undefined?{right:p.right}:{}),animation:`pinBounce ${2.2+i*.3}s ease-in-out infinite`,animationDelay:`${p.delay}s`}}>
              <div style={{width:p.size,height:p.size,borderRadius:"50% 50% 50% 50% / 60% 60% 40% 40%",background:C.cream,boxShadow:`0 6px 20px ${C.shadowMd}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:p.size*.4+"px",border:`3px solid ${C.white}`}}>{p.emoji}</div>
              <div style={{width:6,height:6,background:C.cafe,borderRadius:"50%",margin:"-2px auto 0",boxShadow:`0 0 0 3px ${C.cafeXlt}66`}}/>
            </div>
          ))}
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}} viewBox="0 0 400 520">
            <path d="M 80 120 Q 180 80 260 160 Q 320 220 200 300 Q 120 360 180 420" stroke="white" strokeWidth="2.5" strokeDasharray="8 6" fill="none" opacity=".3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

function VideoSection(){
  useReveal();
  const [videoError,setVideoError]=useState(false);
  return(
    <section id="video-preview" className="video-section" style={{...sectionTexture(C.beigelt),padding:"74px 5% 60px",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:20,right:"10%",width:120,height:120,borderRadius:"50%",background:`${C.cafeXlt}44`,animation:"driftGlow 8s ease-in-out infinite"}}/>
      <div style={{position:"absolute",bottom:20,left:"6%",width:90,height:90,borderRadius:"50%",background:`${C.beigedk}66`,animation:"driftGlow 10s ease-in-out infinite",animationDelay:".8s"}}/>
      <BoneShape w={78} h={20} style={{top:44,left:"34%",transform:"rotate(18deg)"}}/>
      <PawPrint size={36} style={{top:40,right:"30%",transform:"rotate(-10deg)"}}/>
      <div className="video-grid" style={{maxWidth:1240,margin:"0 auto",display:"grid",gridTemplateColumns:"1.05fr 1.2fr",gap:30,alignItems:"start"}}>
        <div className="reveal-left">
          <div style={{fontSize:".74rem",fontWeight:800,color:"#7A5230",textTransform:"uppercase",letterSpacing:1.6,marginBottom:10}}>Historias reales</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3.2vw,2.9rem)",color:C.ink,lineHeight:1.1,marginBottom:14}}>
            Mira como comienza<br/>una nueva vida
          </h2>
          <p style={{fontSize:".96rem",color:"#666666",lineHeight:1.8,maxWidth:470}}>
            Antes de explorar el carrusel, conoce la energia de una adopcion responsable.
            Reproduce automaticamente para inspirarte.
          </p>
        </div>

        <div className="reveal-right video-card" style={{position:"relative",borderRadius:26,overflow:"hidden",border:`2px solid ${C.white}`,boxShadow:`0 22px 56px ${C.shadowMd}`,background:"#121212",minHeight:340}}>
          {!videoError?(
            <video autoPlay muted loop playsInline preload="metadata" onError={()=>setVideoError(true)} style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}}>
              <source src="https://cdn.coverr.co/videos/coverr-dog-running-in-a-meadow-1579/1080p.mp4" type="video/mp4"/>
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"/>
            </video>
          ):(
            <div style={{height:"100%",minHeight:340,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12,overflow:"hidden",background:`linear-gradient(140deg, ${C.ink}, ${C.cafe} 45%, ${C.cafeMd} 75%, ${C.cafeXlt})`,backgroundSize:"180% 180%",animation:"gradientShift 10s ease infinite",color:C.white}}>
              <div style={{position:"absolute",top:-38,left:-26,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,.08)"}}/>
              <div style={{position:"absolute",bottom:-46,right:-18,width:210,height:210,borderRadius:"50%",background:"rgba(255,255,255,.06)"}}/>
              {[{emoji:E.dog,t:"15%",l:"18%",d:0},{emoji:E.cat,t:"26%",r:"15%",d:.35},{emoji:E.paw,b:"22%",l:"20%",d:.2},{emoji:E.heart,b:"16%",r:"18%",d:.5}].map((p,i)=>(
                <div key={i} style={{position:"absolute",...(p.t?{top:p.t}:{}),...(p.b?{bottom:p.b}:{}),...(p.l?{left:p.l}:{}),...(p.r?{right:p.r}:{}),fontSize:"1.5rem",opacity:.42,animation:`bobSoft ${3.2+i*.5}s ease-in-out infinite`,animationDelay:`${p.d}s`}}>
                  {p.emoji}
                </div>
              ))}
              <div style={{position:"relative",zIndex:2,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.26)",backdropFilter:"blur(6px)",borderRadius:18,padding:"18px 28px",textAlign:"center",boxShadow:"0 16px 38px rgba(0,0,0,.26)"}}>
                <LogoSVG size={68} color={C.white}/>
                <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.52rem",letterSpacing:.5,marginTop:8}}>DOGOOD</div>
                <div style={{fontSize:".93rem",fontWeight:800,opacity:.9,marginTop:4}}>Video temporalmente no disponible</div>
                <div style={{marginTop:10,fontSize:".78rem",opacity:.75}}>Mientras tanto, explora peluditos disponibles abajo</div>
              </div>
            </div>
          )}
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(18,18,18,.55) 0%, rgba(18,18,18,0) 56%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:0,bottom:0,left:"-24%",width:"36%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent)",animation:"shimmerSweep 7s linear infinite",pointerEvents:"none"}}/>
          <div style={{position:"absolute",left:14,bottom:12,display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.13)",backdropFilter:"blur(8px)",border:`1px solid rgba(255,255,255,.25)`,borderRadius:50,padding:"7px 12px",animation:"bobSoft 3.4s ease-in-out infinite"}}>
            <span style={{width:8,height:8,borderRadius:"50%",background:"#D6D6D6",display:"block",animation:"pulseDot 1.8s infinite"}}/>
            <span style={{fontSize:".74rem",fontWeight:800,color:C.white,letterSpacing:.6}}>Reproduccion automatica</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveMetricsSection({onLoginClick}){
  useReveal();
  const [mode,setMode]=useState("live");
  const [stats,setStats]=useState({
    disponibles:92,
    adoptados:54,
    refugios:12,
    publicaciones:146,
  });

  useEffect(()=>{
    let alive=true;
    fetch(apiUrl("animales.php?action=public"))
      .then(r=>r.json())
      .then(d=>{
        if(!alive) return;
        if(d.ok&&Array.isArray(d.animals)&&d.animals.length){
          const adoptados=d.animals.filter(a=>a.estatus==="Adoptado").length;
          const disponibles=d.animals.filter(a=>a.estatus!=="Adoptado").length;
          const refugios=new Set(d.animals.map(a=>String(a.rescatista_id||a.rescatista_nombre||"ref"))).size;
          setStats({
            disponibles,
            adoptados,
            refugios:Math.max(1,refugios),
            publicaciones:d.animals.length,
          });
          setMode("live");
          return;
        }
        setMode("demo");
      })
      .catch(()=>setMode("demo"));
    return()=>{alive=false;};
  },[]);

  return(
    <section style={{...sectionTexture(C.graySoft),padding:"24px 5% 68px",position:"relative",overflow:"hidden"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,flexWrap:"wrap",marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:".75rem",fontWeight:800,textTransform:"uppercase",letterSpacing:1.6,color:C.cafeLt}}>Pulso DoGood</span>
            <span style={{padding:"4px 10px",borderRadius:999,fontSize:".68rem",fontWeight:800,background:mode==="live"?`${C.cafe}14`:"#FDE68A55",color:mode==="live"?C.cafe:"#7A5200",border:`1px solid ${mode==="live"?C.cafeXlt:"#F5D48B"}`}}>
              {mode==="live"?"Datos en vivo":"Modo demo activo"}
            </span>
          </div>
          <button onClick={onLoginClick} className="paw-btn" style={{padding:"8px 14px",border:"none",borderRadius:999,background:C.cafe,color:C.white,fontWeight:800,fontSize:".8rem",cursor:"pointer"}}>
            Entrar al panel
          </button>
        </div>
        <div className="metrics-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
          {[
            ["Disponibles",stats.disponibles,E.paw],
            ["Adoptados",stats.adoptados,E.heart],
            ["Refugios activos",stats.refugios,E.house],
            ["Publicaciones",stats.publicaciones,E.clipboard],
          ].map(([label,val,icon],i)=>(
            <div key={label} className="reveal" style={{background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:16,padding:"14px 14px",boxShadow:`0 8px 18px ${C.shadow}`,animationDelay:`${i*.05}s`}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:".78rem",fontWeight:800,color:C.sub}}>{label}</span>
                <span style={{fontSize:"1.1rem"}}>{icon}</span>
              </div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"2rem",lineHeight:1,color:C.cafe,marginTop:8}}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Carousel(){
  const [animals,setAnimals]=useState([]);
  const [loading,setLoading]=useState(true);
  const [mode,setMode]=useState("live");
  const fallback=[
    {emoji:E.dog,nombre:"Max",raza:"Labrador",color:`linear-gradient(135deg,${C.cafe},${C.cafeMd})`},
    {emoji:E.cat,nombre:"Mochi",raza:"Mestizo",color:`linear-gradient(135deg,${C.cafeMd},${C.cafeLt})`},
    {emoji:E.poodle,nombre:"Luna",raza:"Poodle",color:`linear-gradient(135deg,${C.cafeLt},${C.cafeXlt})`},
    {emoji:E.catFace,nombre:"Canela",raza:"Siames",color:`linear-gradient(135deg,#8B4513,${C.cafeMd})`},
    {emoji:E.guideDog,nombre:"Thor",raza:"Pastor Aleman",color:`linear-gradient(135deg,${C.cafe},#A0522D)`},
    {emoji:E.smileCat,nombre:"Mina",raza:"Ragdoll",color:`linear-gradient(135deg,${C.cafeLt},${C.cafe})`},
    {emoji:E.dogFace,nombre:"Coco",raza:"Chihuahua",color:`linear-gradient(135deg,${C.cafeXlt},${C.cafeMd})`},
    {emoji:E.blackCat,nombre:"Noche",raza:"British",color:`linear-gradient(135deg,#3A2010,${C.cafe})`},
    {emoji:E.serviceDog,nombre:"Rex",raza:"Golden",color:`linear-gradient(135deg,${C.cafeMd},${C.cafeXlt})`},
  ];
  useEffect(()=>{
    setLoading(true);
    fetch(apiUrl("animales.php?action=public"))
      .then(r=>r.json())
      .then(d=>{
        if(d.ok&&d.animals.length>0){
          const liveAnimals=d.animals.filter(a=>a.estatus!=="Adoptado");
          if(liveAnimals.length){
            setAnimals(liveAnimals);
            setMode("live");
            setLoading(false);
            return;
          }
        }
        setAnimals(fallback);
        setMode("demo");
        setLoading(false);
      })
      .catch(()=>{
        setAnimals(fallback);
        setMode("demo");
        setLoading(false);
      });
  },[]);

  const items=animals.length>0?animals:fallback;

  // Distribuir animales en 3 filas: idx%3===0 -> fila1, idx%3===1 -> fila2, idx%3===2 -> fila3
  const row1=items.filter((_,i)=>i%3===0);
  const row2=items.filter((_,i)=>i%3===1);
  const row3=items.filter((_,i)=>i%3===2);

  // Rellena cada fila para que el collage siempre ocupe bien el ancho
  const buildBaseRow=(arr,min=8)=>{
    const source=arr.length>0?arr:items.slice(0,Math.min(3,items.length));
    if(source.length===0)return [];
    const out=[...source];
    while(out.length<min)out.push(...source);
    return out.slice(0,Math.max(min,source.length));
  };

  const b1=buildBaseRow(row1);
  const b2=buildBaseRow(row2);
  const b3=buildBaseRow(row3);

  const r1=[...b1,...b1,...b1];
  const r2=[...b2,...b2,...b2];
  const r3=[...b3,...b3,...b3];

  const getWaitingDays=(a,idx)=>{
    if(typeof a?.dias_espera==="number")return Math.max(1,a.dias_espera);
    if(typeof a?.dias_en_refugio==="number")return Math.max(1,a.dias_en_refugio);
    const dateRaw=a?.fecha_ingreso||a?.created_at||a?.fecha_creacion||null;
    if(dateRaw){
      const d=new Date(dateRaw);
      if(!Number.isNaN(d.getTime())){
        const diff=Math.floor((Date.now()-d.getTime())/(1000*60*60*24));
        return Math.max(1,diff);
      }
    }
    return 9+((idx*7)%54);
  };

  const Card=({a,w=220,h=208,rot=0,waitDays=0})=>(
    <div style={{width:w,height:h,flexShrink:0,borderRadius:26,overflow:"hidden",
      background:a.color||`linear-gradient(135deg,${C.cafe},${C.cafeMd})`,
      boxShadow:`0 8px 26px ${C.shadowMd}`,
      transform:`rotate(${rot}deg)`,
      transition:"transform .3s,box-shadow .3s",
      cursor:"pointer",position:"relative",
      border:`4px solid ${C.white}`}}
      onMouseEnter={e=>{e.currentTarget.style.transform="rotate(0deg) scale(1.06)";e.currentTarget.style.boxShadow=`0 18px 42px ${C.shadowMd}`;e.currentTarget.style.zIndex="10";}}
      onMouseLeave={e=>{e.currentTarget.style.transform=`rotate(${rot}deg)`;e.currentTarget.style.boxShadow=`0 8px 26px ${C.shadowMd}`;e.currentTarget.style.zIndex="1";}}>
      {a.foto_url
        ?<img src={a.foto_url} alt={a.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}/>
        :<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:w*.24+"px"}}>{a.emoji}</div>
      }
      <div style={{position:"absolute",top:10,left:10,background:"rgba(23,21,19,.7)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,.25)",color:C.white,padding:"5px 10px",borderRadius:999,fontSize:".68rem",fontWeight:800,letterSpacing:.3}}>
        Lleva {waitDays} dias esperando
      </div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,
        background:"linear-gradient(to top,rgba(44,26,14,.92) 2%,rgba(44,26,14,.35) 45%,transparent 100%)",
        padding:"28px 14px 14px"}}>
        <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.05rem,1.4vw,1.45rem)",color:C.white,lineHeight:1}}>{a.nombre}</div>
        <div style={{fontSize:"clamp(.88rem,1vw,1.05rem)",color:"rgba(255,255,255,.82)",marginTop:4}}>{a.raza}</div>
      </div>
    </div>
  );

  // Alturas y velocidad por fila para look tipo collage continuo
  const rowConfigs=[
    {h:206,gap:18,speed:32},
    {h:224,gap:18,speed:38},
    {h:206,gap:18,speed:35},
  ];

  return(
    <section id="adoptar" style={{...sectionTexture(C.beige),padding:"80px 0",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:24,left:"8%",width:110,height:110,borderRadius:"50%",background:`${C.beigedk}70`,animation:"driftGlow 10s ease-in-out infinite"}}/>
      <div style={{position:"absolute",bottom:26,right:"7%",width:140,height:140,borderRadius:"50%",background:`${C.cafeXlt}2a`,animation:"driftGlow 12s ease-in-out infinite",animationDelay:".6s"}}/>
      <BoneShape w={82} h={21} style={{top:30,right:"23%",transform:"rotate(14deg)"}}/>
      <PawPrint size={34} style={{bottom:34,left:"16%",transform:"rotate(-12deg)"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 5%",marginBottom:40,display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
        <div className="reveal">
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Peluditos disponibles</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe,lineHeight:1.1}}>Te estan esperando</h2>
        </div>
        <div className="reveal" style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"flex-end"}}>
          <p style={{fontSize:".92rem",color:C.sub,maxWidth:340,lineHeight:1.75}}>Cada uno tiene una historia unica. Quizas el tuyo esta aqui.</p>
          <span style={{padding:"5px 10px",borderRadius:999,fontSize:".68rem",fontWeight:800,border:`1px solid ${mode==="live"?C.cafeXlt:"#F5D48B"}`,background:mode==="live"?`${C.cafe}12`:"#FFF7D6",color:mode==="live"?C.cafe:"#7A5200"}}>
            {mode==="live"?"Catalogo en vivo":"Catalogo demo"}
          </span>
        </div>
      </div>

      {/* 3 filas de collage */}
      <div style={{display:"flex",flexDirection:"column",gap:18,padding:"2px 0 12px"}}
        onMouseEnter={e=>Array.from(e.currentTarget.querySelectorAll(".row-track")).forEach(r=>r.style.animationPlayState="paused")}
        onMouseLeave={e=>Array.from(e.currentTarget.querySelectorAll(".row-track")).forEach(r=>r.style.animationPlayState="running")}>
        {loading&&(
          <div style={{maxWidth:1240,margin:"0 auto",padding:"0 5%"}}>
            <div style={{background:C.cream,border:`1.5px dashed ${C.beigedk}`,borderRadius:16,padding:"14px 16px",fontSize:".85rem",fontWeight:700,color:C.muted}}>
              Cargando collage de adopcion...
            </div>
          </div>
        )}
        {[r1,r2,r3].map((row,ri)=>{
          const cfg=rowConfigs[ri];
          const animName=`slideInfinite${ri}`;
          return(
            <div key={ri} style={{overflow:"hidden"}}>
              <style>{`@keyframes ${animName}{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}`}</style>
              <div className="row-track" style={{
                display:"flex",gap:cfg.gap,
                animation:`${animName} ${cfg.speed}s linear infinite`,
                width:"max-content",
                alignItems:"center",
                // filas alternas van en direccion contraria
                animationDirection:ri===1?"reverse":"normal",
                transform:ri===1?"translateX(-36px)":"none"}}>
                {row.map((a,i)=>(
                  <Card key={`${ri}-${i}`} a={a} w={212+(i%2)*16} h={cfg.h} rot={i%2===0?-2.2:2.2} waitDays={getWaitingDays(a,i+ri*3)}/>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MapSection({onLoginClick}){
  useReveal();
  const refugios=[
    {name:"Refugio Patitas",query:"Refugio Patitas Ciudad de Mexico",zone:"Roma Norte"},
    {name:"Casa Huellitas",query:"Casa Huellitas Ciudad de Mexico",zone:"Del Valle"},
    {name:"Hogar Peludo",query:"Hogar Peludo Ciudad de Mexico",zone:"Coyoacan"},
    {name:"Amigos Peludos",query:"Amigos Peludos Ciudad de Mexico",zone:"Narvarte"},
  ];
  const [active,setActive]=useState(0);
  const embedSrc=`https://www.google.com/maps?q=${encodeURIComponent(refugios[active].query)}&output=embed`;

  return(
    <section className="map-section" style={{...sectionTexture(C.beigelt),padding:"90px 5%",overflow:"hidden"}}>
      <div className="map-grid" style={{maxWidth:1240,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div className="reveal-left" style={{position:"relative",height:420,borderRadius:28,overflow:"hidden",boxShadow:`0 20px 56px ${C.shadowMd}`,border:`2px solid ${C.beigedk}`,background:C.cream}}>
          <iframe title="Mapa de refugios cercanos" src={embedSrc} loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0,filter:"grayscale(18%) contrast(1.04) saturate(.95)"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(242,237,228,.28) 0%, rgba(242,237,228,0) 35%, rgba(242,237,228,.12) 100%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:12,left:12,right:12,display:"flex",flexWrap:"wrap",gap:8}}>
            {refugios.map((r,i)=>(
              <button key={r.name} onClick={()=>setActive(i)} style={{padding:"6px 12px",borderRadius:999,border:`1.5px solid ${i===active?C.cafe:C.beigedk}`,background:i===active?C.cafe:C.cream,color:i===active?C.white:C.sub,fontSize:".72rem",fontWeight:800,cursor:"pointer",boxShadow:i===active?`0 6px 14px ${C.shadowMd}`:"none"}}>
                {r.name}
              </button>
            ))}
          </div>
          <div style={{position:"absolute",bottom:12,left:12,right:12,display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,background:"rgba(255,253,249,.9)",backdropFilter:"blur(8px)",border:`1px solid ${C.beigedk}`,borderRadius:14,padding:"8px 12px"}}>
            <div style={{fontSize:".78rem",fontWeight:800,color:C.cafe}}>{refugios[active].name}</div>
            <div style={{fontSize:".72rem",color:C.muted,fontWeight:700}}>{refugios[active].zone}</div>
          </div>
        </div>
        <div className="reveal-right">
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:12}}>Mapa de refugios</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.6rem)",color:C.cafe,lineHeight:1.15,marginBottom:16}}>Refugios cerca de ti</h2>
          <p style={{fontSize:".95rem",color:C.sub,lineHeight:1.8,marginBottom:28}}>Activa tu ubicacion y descubre que animales estan disponibles en refugios cerca de donde vives.</p>
          {[[E.mapPin,"Localizacion automatica"],[E.map,"Ver animales en el mapa"],[E.paw,"Aparta en un clic"]].map(([ic,t])=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
              <div style={{width:42,height:42,borderRadius:12,background:C.beigedk,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0}}>{ic}</div>
              <span style={{fontSize:".92rem",color:C.sub,fontWeight:700}}>{t}</span>
            </div>
          ))}
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:8}}>
            <button onClick={onLoginClick} className="paw-btn" style={{padding:"12px 24px",border:"none",borderRadius:50,background:C.cafe,color:C.white,fontWeight:800,fontSize:".92rem",cursor:"pointer",transition:"all .2s",boxShadow:`0 6px 20px ${C.shadowMd}`}}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="none"}>
              Ver mapa de refugios
            </button>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(refugios[active].query)}`} target="_blank" rel="noreferrer" style={{padding:"12px 18px",borderRadius:50,border:`1.5px solid ${C.beigedk}`,textDecoration:"none",color:C.sub,fontWeight:800,fontSize:".86rem",background:C.cream}}>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MatchQuizSection({onLoginClick}){
  useReveal();
  const questions=[
    {q:"Tu ritmo ideal de convivencia?",opts:[["Activo y salgo mucho","dog"],["Tranquilo en casa","cat"]]},
    {q:"Espacio disponible en casa?",opts:[["Amplio o con patio","dog"],["Departamento pequeno","cat"]]},
    {q:"Tiempo diario para juego?",opts:[["Mas de 60 min","dog"],["20-40 min","cat"]]},
    {q:"Que energia prefieres?",opts:[["Muy sociable y expresiva","dog"],["Independiente y serena","cat"]]},
  ];
  const [answers,setAnswers]=useState({});
  const total=Object.keys(answers).length;
  const dogScore=Object.values(answers).filter(v=>v==="dog").length;
  const catScore=total-dogScore;
  const done=total===questions.length;
  const result=dogScore>=catScore
    ?{title:"Match ideal: Perro",emoji:E.dog,desc:"Te puede ir excelente con un perrito sociable y activo."}
    :{title:"Match ideal: Gato",emoji:E.cat,desc:"Tu estilo encaja muy bien con un gatito tranquilo e independiente."};

  return(
    <section className="match-section" style={{...sectionTexture(C.graySoft),padding:"86px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Comparador rapido</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.7rem)",color:C.ink,lineHeight:1.15}}>Que peludito va contigo?</h2>
        </div>
        <div className="match-grid" style={{display:"grid",gridTemplateColumns:"1.2fr .8fr",gap:18,alignItems:"start"}}>
          <div className="reveal-left match-card" style={{background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:24,padding:20,boxShadow:`0 10px 28px ${C.shadow}`}}>
            {questions.map((it,qi)=>(
              <div key={it.q} style={{marginBottom:14,paddingBottom:14,borderBottom:qi<questions.length-1?`1px dashed ${C.beigedk}`:"none"}}>
                <div style={{fontWeight:800,color:C.sub,fontSize:".95rem",marginBottom:8}}>{qi+1}. {it.q}</div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {it.opts.map(([label,val])=>(
                    <button key={label} onClick={()=>setAnswers(prev=>({...prev,[qi]:val}))} className="paw-btn"
                      style={{padding:"8px 14px",borderRadius:999,border:`1.5px solid ${answers[qi]===val?C.cafe:C.beigedk}`,background:answers[qi]===val?C.cafe:C.white,color:answers[qi]===val?C.white:C.sub,fontWeight:700,fontSize:".82rem",cursor:"pointer"}}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal-right match-result" style={{background:`linear-gradient(155deg,${C.ink},${C.cafe})`,borderRadius:24,padding:22,color:C.white,border:`1.5px solid ${C.cafeLt}`,boxShadow:`0 14px 34px ${C.shadowMd}`}}>
            <div style={{fontSize:".74rem",textTransform:"uppercase",letterSpacing:1.2,color:"rgba(255,255,255,.66)",fontWeight:800}}>Resultado</div>
            {done?(
              <>
                <div style={{fontSize:"3rem",marginTop:10}}>{result.emoji}</div>
                <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.6rem",lineHeight:1.1}}>{result.title}</div>
                <p style={{fontSize:".9rem",color:"rgba(255,255,255,.75)",lineHeight:1.7,marginTop:8}}>{result.desc}</p>
                <button onClick={onLoginClick} className="paw-btn" style={{marginTop:14,width:"100%",padding:"11px 16px",border:"none",borderRadius:14,background:C.white,color:C.cafe,fontWeight:800,cursor:"pointer"}}>
                  Ver recomendados
                </button>
              </>
            ):(
              <>
                <div style={{fontSize:"2rem",marginTop:12}}>{E.sparkle}</div>
                <div style={{fontWeight:800,fontSize:"1.02rem",marginTop:8}}>Contesta {questions.length-total} preguntas mas</div>
                <div style={{height:8,borderRadius:999,background:"rgba(255,255,255,.18)",marginTop:12,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${(total/questions.length)*100}%`,background:C.cafeXlt,transition:"width .3s"}}/>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoriesSection(){
  useReveal();
  const stories=[
    {name:"Luna",kind:"Perrita",before:"Rescatada con miedo al contacto.",after:"Ahora duerme tranquila con su nueva familia.",img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"},
    {name:"Milo",kind:"Gatito",before:"Llego con bajo peso y sin hogar.",after:"Hoy vive en depa y ama su rascador.",img:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80"},
    {name:"Thor",kind:"Perrito",before:"Estuvo meses esperando adopcion.",after:"Ya tiene rutina de paseo y juegos diarios.",img:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80"},
  ];
  return(
    <section style={{...sectionTexture(C.beigelt),padding:"84px 5%"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{display:"flex",justifyContent:"space-between",gap:20,alignItems:"flex-end",flexWrap:"wrap",marginBottom:22}}>
          <div>
            <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Historias reales</div>
            <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe}}>Antes y despues de adoptar</h2>
          </div>
          <p style={{fontSize:".9rem",maxWidth:360,color:C.sub,lineHeight:1.7}}>Pequenos cambios que transforman dos vidas: la del peludito y la de su nueva familia.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14}}>
          {stories.map((s,i)=>(
            <div key={s.name} className="reveal" style={{background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:20,overflow:"hidden",boxShadow:`0 8px 20px ${C.shadow}`,animationDelay:`${i*.08}s`}}>
              <div style={{height:190,position:"relative"}}>
                <img src={s.img} alt={s.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(23,21,19,.68), transparent 52%)"}}/>
                <div style={{position:"absolute",left:12,bottom:10,color:C.white}}>
                  <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.3rem"}}>{s.name}</div>
                  <div style={{fontSize:".78rem",opacity:.84}}>{s.kind}</div>
                </div>
              </div>
              <div style={{padding:"14px 14px 16px"}}>
                <div style={{fontSize:".76rem",fontWeight:800,color:C.muted,textTransform:"uppercase"}}>Antes</div>
                <p style={{fontSize:".84rem",color:C.sub,lineHeight:1.6,margin:"4px 0 10px"}}>{s.before}</p>
                <div style={{fontSize:".76rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase"}}>Despues</div>
                <p style={{fontSize:".84rem",color:C.sub,lineHeight:1.6,marginTop:4}}>{s.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection(){
  useReveal();
  const steps=[
    ["1", "Explora el catalogo", "2 min", "Filtra por especie, talla y estatus para encontrar match rapido."],
    ["2", "Solicita y valida", "24-48 h", "El rescatista revisa tu perfil y confirma compatibilidad."],
    ["3", "Recibe y acompana", "7-30 dias", "Hacemos seguimiento para una adopcion estable y feliz."],
  ];
  return(
    <section id="como-funciona" className="process-section" style={{...sectionTexture(C.beige),padding:"84px 5%"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{textAlign:"center",marginBottom:24}}>
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Confianza DoGood</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe}}>Como funciona en 3 pasos</h2>
        </div>
        <div className="steps-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
          {steps.map(([n,t,time,d],i)=>(
            <div key={n} className={`reveal float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:18,padding:"18px 16px",boxShadow:`0 8px 20px ${C.shadow}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <span style={{width:30,height:30,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",background:C.cafe,color:C.white,fontWeight:800,fontSize:".85rem"}}>{n}</span>
                <span className="hc-chip" style={{fontSize:".68rem",fontWeight:800,color:C.cafe,border:`1px solid ${C.beigedk}`,padding:"3px 8px",borderRadius:999,background:C.white}}>{time}</span>
              </div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.02rem",color:C.ink,lineHeight:1.2}}>{t}</div>
              <p style={{marginTop:8,fontSize:".82rem",lineHeight:1.6,color:C.sub}}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HelpSection({onLoginClick}){
  useReveal();
  const items=[
    {icon:E.donate,title:"Donar",desc:"Apoya alimento, vacunas y esterilizacion.",cta:"Donar ahora"},
    {icon:E.volunteer,title:"Voluntariado",desc:"Ayuda en traslados, ferias y difusion.",cta:"Quiero ayudar"},
    {icon:E.homeCare,title:"Hogar temporal",desc:"Recibe por dias a un peludito en transicion.",cta:"Ser hogar temporal"},
  ];
  return(
    <section className="help-section" style={{...sectionTexture(C.beigelt),padding:"84px 5%"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{textAlign:"center",marginBottom:24}}>
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Quiero ayudar</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe}}>Tambien puedes cambiar vidas sin adoptar</h2>
        </div>
        <div className="help-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
          {items.map((it,i)=>(
            <div key={it.title} className={`reveal float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:20,padding:"20px 18px",boxShadow:`0 8px 20px ${C.shadow}`}}>
              <div style={{fontSize:"2rem",marginBottom:8}}>{it.icon}</div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.2rem",color:C.ink}}>{it.title}</div>
              <p style={{marginTop:8,fontSize:".86rem",lineHeight:1.7,color:C.sub,minHeight:56}}>{it.desc}</p>
              <button className="paw-btn" onClick={onLoginClick} style={{marginTop:10,width:"100%",padding:"11px 14px",borderRadius:12,border:"none",background:i===1?C.ink:C.cafe,color:C.white,fontWeight:800,cursor:"pointer"}}>
                {it.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({onLoginClick}){
  useReveal();
  const services=[
    {icon:E.vet,title:"Consulta veterinaria",desc:"Revision general, esquema de vacunas y plan preventivo.",time:"30-45 min",tag:"Salud"},
    {icon:E.bath,title:"Bano y grooming",desc:"Bano, corte de unas y limpieza para piel y pelaje saludable.",time:"40-70 min",tag:"Higiene"},
    {icon:E.train,title:"Entrenamiento basico",desc:"Rutina de obediencia, socializacion y habitos en casa.",time:"4 sesiones",tag:"Conducta"},
  ];
  return(
    <section id="servicios" className="services-section" style={{...sectionTexture(C.graySoft),padding:"86px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"flex-end",flexWrap:"wrap",marginBottom:24}}>
          <div>
            <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Servicios petcare</div>
            <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe,lineHeight:1.12}}>Todo para su bienestar</h2>
          </div>
          <p style={{maxWidth:370,fontSize:".9rem",lineHeight:1.7,color:C.sub}}>Integramos servicios aliados para que la adopcion tenga seguimiento y resultados reales.</p>
        </div>
        <div className="services-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
          {services.map((s,i)=>(
            <div key={s.title} className={`reveal float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:20,padding:"20px 18px",boxShadow:`0 8px 20px ${C.shadow}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={{fontSize:"2rem"}}>{s.icon}</div>
                <span className="hc-chip" style={{fontSize:".68rem",fontWeight:800,color:C.cafe,border:`1px solid ${C.beigedk}`,padding:"4px 9px",borderRadius:999,background:C.white}}>{s.tag}</span>
              </div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.15rem",color:C.ink,lineHeight:1.2}}>{s.title}</div>
              <p style={{marginTop:8,fontSize:".85rem",lineHeight:1.7,color:C.sub,minHeight:56}}>{s.desc}</p>
              <div style={{fontSize:".76rem",fontWeight:800,color:C.muted,marginBottom:10}}>Duracion estimada: {s.time}</div>
              <button className="paw-btn" onClick={onLoginClick} style={{width:"100%",padding:"11px 14px",borderRadius:12,border:"none",background:i===1?C.ink:C.cafe,color:C.white,fontWeight:800,cursor:"pointer"}}>
                Agendar servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({onLoginClick}){
  useReveal();
  const [tab,setTab]=useState("perro");
  const products=[
    {type:"perro",name:"Croquetas digestivas",icon:E.food,price:"$549",desc:"Formula balanceada para energia y digestion estable."},
    {type:"perro",name:"Kit paseo",icon:E.toy,price:"$399",desc:"Correa, placa y bolsitas para rutina diaria."},
    {type:"perro",name:"Cama ortopedica",icon:E.bed,price:"$899",desc:"Soporte comodo para descanso y articulaciones."},
    {type:"gato",name:"Arena premium",icon:E.check,price:"$289",desc:"Control de olor y mayor absorcion para depa."},
    {type:"gato",name:"Rascador vertical",icon:E.toy,price:"$699",desc:"Protege muebles y activa su comportamiento natural."},
    {type:"gato",name:"Snack saludable",icon:E.heart,price:"$149",desc:"Premios suaves con vitaminas y taurina."},
  ];
  const filtered=products.filter(p=>p.type===tab);
  return(
    <section id="productos" className="products-section" style={{...sectionTexture(C.beige),padding:"86px 5%"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal products-head" style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"flex-end",flexWrap:"wrap",marginBottom:18}}>
          <div>
            <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Recomendados</div>
            <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe}}>Productos segun su perfil</h2>
          </div>
          <div className="products-tabs" style={{display:"flex",gap:8}}>
            {[["perro","Perros"],["gato","Gatos"]].map(([v,l])=>(
              <button key={v} onClick={()=>setTab(v)} className="paw-btn" style={{padding:"8px 14px",borderRadius:999,border:`1.5px solid ${tab===v?C.cafe:C.beigedk}`,background:tab===v?C.cafe:C.cream,color:tab===v?C.white:C.sub,fontWeight:800,fontSize:".82rem",cursor:"pointer"}}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
          {!filtered.length&&(
            <div style={{gridColumn:"1 / -1",background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:16,padding:"14px 16px",fontSize:".86rem",fontWeight:700,color:C.sub}}>
              No hay productos para este perfil por ahora.
            </div>
          )}
          {filtered.map((p,i)=>(
            <div key={p.name} className={`float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:18,padding:"16px 14px",boxShadow:`0 8px 18px ${C.shadow}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <span style={{fontSize:"1.8rem"}}>{p.icon}</span>
                <span style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.2rem",color:C.cafe}}>{p.price}</span>
              </div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.05rem",color:C.ink,lineHeight:1.2}}>{p.name}</div>
              <p style={{marginTop:7,fontSize:".83rem",lineHeight:1.65,color:C.sub,minHeight:54}}>{p.desc}</p>
              <button className="paw-btn" onClick={onLoginClick} style={{marginTop:8,width:"100%",padding:"10px 12px",border:"none",borderRadius:11,background:i===1?C.ink:C.cafe,color:C.white,fontWeight:800,cursor:"pointer"}}>
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection(){
  useReveal();
  const posts=[
    {title:"Checklist para adoptar en departamento",meta:"Guia rapida - 6 min",desc:"Lo basico para preparar espacios, horarios y rutina en depa.",tag:"Guia"},
    {title:"Primeros 30 dias: adaptacion sin estres",meta:"Bienestar - 8 min",desc:"Senales de ansiedad y como ayudar al nuevo integrante.",tag:"Salud"},
    {title:"Plan de visitas al veterinario",meta:"Prevencion - 5 min",desc:"Calendario sugerido para vacunas y desparasitacion.",tag:"Veterinaria"},
  ];
  return(
    <section id="recursos" style={{...sectionTexture(C.beigelt),padding:"86px 5%"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"flex-end",flexWrap:"wrap",marginBottom:20}}>
          <div>
            <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:8}}>Guias y recursos</div>
            <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe}}>Aprende antes de adoptar</h2>
          </div>
          <a href="#faq" style={{textDecoration:"none",fontWeight:800,color:C.cafe,fontSize:".86rem"}}>Ver preguntas frecuentes</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
          {posts.map((p,i)=>(
            <article key={p.title} className={`reveal float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,border:`1.5px solid ${C.beigedk}`,borderRadius:18,padding:"16px 14px",boxShadow:`0 8px 18px ${C.shadow}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9}}>
                <span className="hc-chip" style={{fontSize:".66rem",fontWeight:800,color:C.cafe,border:`1px solid ${C.beigedk}`,padding:"4px 9px",borderRadius:999,background:C.white}}>{p.tag}</span>
                <span style={{fontSize:".8rem"}}>{E.book}</span>
              </div>
              <h3 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.06rem",lineHeight:1.2,color:C.ink}}>{p.title}</h3>
              <div style={{marginTop:6,fontSize:".74rem",fontWeight:800,color:C.muted}}>{p.meta}</div>
              <p style={{marginTop:8,fontSize:".83rem",lineHeight:1.66,color:C.sub,minHeight:54}}>{p.desc}</p>
              <a href="#faq" style={{display:"inline-flex",marginTop:8,fontSize:".82rem",fontWeight:800,color:C.cafe,textDecoration:"none"}}>Leer guia</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConocenosSection(){
  useReveal();
  const cards=[
    {icon:E.paw,title:"Adopcion responsable",desc:"Cada proceso es supervisado. Conectamos rescatistas verificados con adoptantes comprometidos con el bienestar animal."},
    {icon:E.house,title:"Refugios aliados",desc:"Trabajamos con refugios y rescatistas independientes de todo Mexico."},
    {icon:E.heart,title:"Post-adopcion",desc:"No terminamos con la adopcion. Acompanamos al adoptante y al animal en su adaptacion."},
    {icon:E.clipboard,title:"Proceso sencillo",desc:"Registrate, busca, aparta y sigue el proceso desde tu perfil. Simple y transparente."},
  ];
  return(
    <section id="conocenos" style={{...sectionTexture(C.beige),padding:"90px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-40,right:-40,fontSize:"20rem",opacity:.025,pointerEvents:"none",lineHeight:1}}>{E.paw}</div>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="reveal" style={{textAlign:"center",marginBottom:56}}>
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.8,marginBottom:10}}>Nuestra mision</div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(1.9rem,3vw,2.8rem)",color:C.cafe,lineHeight:1.1,marginBottom:14}}>Por que DoGood?</h2>
          <p style={{fontSize:".95rem",color:C.sub,maxWidth:480,margin:"0 auto",lineHeight:1.8}}>Creemos que cada animal merece una familia y cada familia merece encontrar a su companero ideal.</p>
        </div>
        <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
            {cards.map((c,i)=>(
              <div key={i} className={`reveal float-card ${i%3===1?"alt":"soft"}`} style={{...floatCardAnim(i),background:C.cream,borderRadius:22,padding:"22px 20px",boxShadow:`0 4px 20px ${C.shadow}`,border:`1.5px solid ${C.beigedk}`,transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow=`0 16px 36px ${C.shadowMd}`;e.currentTarget.style.borderColor=C.cafeXlt}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=`0 4px 20px ${C.shadow}`;e.currentTarget.style.borderColor=C.beigedk}}>
                <div style={{width:48,height:48,borderRadius:14,background:C.beigedk,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",marginBottom:14}}>{c.icon}</div>
                <h3 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.05rem",color:C.cafe,marginBottom:8,lineHeight:1.2}}>{c.title}</h3>
                <p style={{fontSize:".82rem",color:C.sub,lineHeight:1.65}}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal-right" style={{position:"relative",height:400}}>
            <div style={{position:"absolute",inset:0,background:`linear-gradient(145deg,${C.cafe},${C.cafeMd})`,borderRadius:"40% 60% 55% 45% / 50% 45% 55% 50%",boxShadow:`0 20px 56px ${C.shadowMd}`}}/>
            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12}}>
              <div style={{fontSize:"7rem",lineHeight:1,filter:"drop-shadow(0 8px 20px rgba(0,0,0,.2))",animation:"floatSlow 4s ease-in-out infinite"}}>{E.dog}</div>
              <div style={{fontSize:"5rem",lineHeight:1,filter:"drop-shadow(0 6px 16px rgba(0,0,0,.15))",animation:"floatSlow 4.5s ease-in-out infinite",animationDelay:".7s"}}>{E.cat}</div>
            </div>
            {[{n:"100+",l:"rescatados",pos:{top:16,right:-16}},{n:"50+",l:"adoptados",pos:{bottom:32,left:-20}}].map((s,i)=>(
              <div key={i} style={{position:"absolute",...s.pos,background:C.cream,borderRadius:16,padding:"12px 18px",textAlign:"center",boxShadow:`0 8px 24px ${C.shadowMd}`,border:`1.5px solid ${C.beigedk}`}}>
                <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.7rem",color:C.cafe,lineHeight:1}}>{s.n}</div>
                <div style={{fontSize:".72rem",color:C.muted,fontWeight:700}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection(){
  useReveal();
  const [open,setOpen]=useState(null);
  const bannerRef=useRef();
  const [bannerVisible,setBannerVisible]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setBannerVisible(true);},{threshold:.15});
    if(bannerRef.current)obs.observe(bannerRef.current);
    return()=>obs.disconnect();
  },[]);
  const faqs=[
    {q:"Como funciona el proceso de adopcion?",a:"Registrate en DoGood, explora los animales disponibles, aparta al que te llame y el rescatista coordinara los siguientes pasos contigo."},
    {q:"Es gratuito adoptar a traves de DoGood?",a:"Si, usar DoGood es completamente gratuito para adoptantes. Algunos refugios pueden pedir un donativo simbolico para gastos veterinarios."},
    {q:"Como se que los rescatistas son confiables?",a:"Todos los rescatistas pasan por verificacion. Puedes ver su historial y resenas de otros adoptantes en su perfil."},
    {q:"Puedo adoptar si vivo en departamento?",a:"Si. Al crear tu perfil indicas tu situacion de vivienda y el rescatista te ayuda a encontrar un animal compatible."},
    {q:"Que pasa si la adopcion no funciona?",a:"Lo mas importante es el bienestar del animal. El rescatista puede orientarte. Nunca abandones al animal."},
    {q:"Como registro mi refugio en DoGood?",a:"Registrate con el rol de Rescatista, completa tu perfil y podras subir animales al catalogo de inmediato."},
  ];
  return(
    <section id="faq" style={{...sectionTexture(C.beigelt),padding:"80px 0 90px"}}>
      <div ref={bannerRef} style={{
        background:`linear-gradient(135deg,${C.beige} 0%,${C.beigedk} 40%,${C.cafeXlt}55 100%)`,
        margin:"0 0 60px",padding:"0 5%",position:"relative",overflow:"hidden",height:220,
        display:"flex",alignItems:"center",
        opacity:bannerVisible?1:0,
        transform:bannerVisible?"none":"translateY(40px) scale(.97)",
        transition:"opacity .8s ease, transform .8s ease",
        borderTop:`2px solid ${C.beigedk}`,borderBottom:`2px solid ${C.beigedk}`}}>
        <div style={{position:"absolute",top:-20,right:"35%",width:90,height:55,background:C.cafeXlt,borderRadius:50,opacity:.5}}/>
        <div style={{position:"absolute",bottom:-18,right:"48%",width:65,height:42,background:C.cafeXlt,borderRadius:50,opacity:.4}}/>
        <div style={{position:"absolute",top:12,right:"14%",width:55,height:38,background:C.beigedk,borderRadius:50,opacity:.8}}/>
        <div style={{position:"absolute",top:0,bottom:0,left:"-30%",width:"24%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)",animation:"shimmerSweep 9s linear infinite",opacity:.35}}/>
        <div style={{maxWidth:400,position:"relative",zIndex:2}}>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(2.2rem,4vw,3rem)",color:C.cafe,lineHeight:1.05,
            opacity:bannerVisible?1:0,transform:bannerVisible?"none":"translateX(-20px)",transition:"opacity .6s .2s ease,transform .6s .2s ease"}}>
            Preguntas<br/>frecuentes
          </h2>
          <p style={{fontSize:".88rem",color:C.sub,marginTop:8,fontWeight:700,
            opacity:bannerVisible?1:0,transform:bannerVisible?"none":"translateX(-20px)",transition:"opacity .6s .4s ease,transform .6s .4s ease"}}>
            Todo lo que necesitas saber
          </p>
        </div>
        <div style={{position:"absolute",right:"2%",bottom:0,display:"flex",alignItems:"flex-end",zIndex:2}}>
          <div style={{position:"relative",width:175,height:160,marginRight:4,opacity:bannerVisible?1:0,transition:"opacity .7s .3s ease",animation:"orbitSlow 18s linear infinite"}}>
            <div style={{position:"absolute",inset:8,borderRadius:"50%",border:`2.5px dashed ${C.cafe}55`}}/>
            {[E.dog,E.cat,E.poodle,E.catFace,E.guideDog,E.smileCat].map((e,i)=>(
              <div key={i} style={{position:"absolute",
                top:["0%","15%","52%","60%","-5%","35%"][i],
                left:["35%","68%","70%","8%","12%","88%"][i],
                fontSize:["2.2rem","1.7rem","1.8rem","1.5rem","1.4rem","1.3rem"][i],
                animation:`float ${2.8+i*.35}s ease-in-out infinite`,animationDelay:`${i*.25}s`,
                opacity:bannerVisible?1:0,transition:`opacity .5s ${.3+i*.08}s ease`}}>
                {e}
              </div>
            ))}
          </div>
          <div style={{fontSize:"7.5rem",lineHeight:1,opacity:bannerVisible?1:0,transition:"opacity .7s .1s ease",animation:"bobSoft 4s ease-in-out infinite"}}>{E.cat}</div>
          <div style={{fontSize:"6rem",lineHeight:1,marginBottom:8,opacity:bannerVisible?1:0,transition:"opacity .7s .05s ease",animation:"bobSoft 3.6s ease-in-out infinite",animationDelay:".3s"}}>{E.dog}</div>
        </div>
        <div style={{position:"absolute",bottom:10,left:18,display:"flex",alignItems:"center",gap:6,opacity:.4}}>
          <LogoSVG size={20} color={C.cafe}/>
          <span style={{fontFamily:"'Fredoka',sans-serif",fontSize:".75rem",color:C.cafe,fontWeight:700}}>DOGOOD</span>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 5%"}}>
        <div className="faq-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {faqs.map((f,i)=>(
            <div key={i} className="reveal" onClick={()=>setOpen(open===i?null:i)}
              style={{background:open===i?C.cafe:C.cream,borderRadius:20,padding:"22px 24px",cursor:"pointer",
                boxShadow:open===i?`0 16px 48px ${C.shadowMd}`:`0 2px 12px ${C.shadow}`,
                border:`2px solid ${open===i?C.cafe:C.beigedk}`,
                transition:"all .3s ease",transform:open===i?"translateY(-4px)":"none"}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:14}}>
                <div style={{width:38,height:38,borderRadius:12,
                  background:open===i?"rgba(255,255,255,.2)":C.beigedk,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
                  fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1rem",
                  color:open===i?C.white:C.cafe,transition:"all .3s"}}>
                  {i+1}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:800,fontSize:".9rem",color:open===i?C.white:C.ink,lineHeight:1.4,marginBottom:open===i?10:0,transition:"color .3s"}}>
                    {f.q}
                  </div>
                  {open===i&&(
                    <div style={{fontSize:".86rem",color:"rgba(255,255,255,.85)",lineHeight:1.75,animation:"fadeUp .25s ease",paddingTop:2}}>
                      {f.a}
                    </div>
                  )}
                </div>
                <div style={{width:26,height:26,borderRadius:"50%",
                  background:open===i?"rgba(255,255,255,.2)":C.beigedk,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
                  transition:"all .3s",transform:open===i?"rotate(45deg)":"none"}}>
                  <span style={{color:open===i?C.white:C.cafe,fontSize:"1rem",fontWeight:300,lineHeight:1}}>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({onLoginClick}){
  useReveal();
  const stats=[
    {n:"100+",l:"Animales rescatados",icon:E.paw},
    {n:"50+",l:"Familias felices",icon:E.heart},
    {n:"10+",l:"Refugios aliados",icon:E.house},
    {n:"$0",l:"Costo para adoptantes",icon:E.check},
  ];
  return(
    <section style={{padding:"90px 5%",background:`linear-gradient(160deg,${C.ink} 0%,${C.cafe} 60%,${C.cafeMd} 100%)`,backgroundSize:"180% 180%",animation:"gradientShift 14s ease infinite",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-100,right:-100,width:400,height:400,borderRadius:"50%",background:"rgba(255,255,255,.04)"}}/>
      <div style={{position:"absolute",bottom:-80,left:-80,width:320,height:320,borderRadius:"50%",background:"rgba(255,255,255,.03)"}}/>
      <div style={{position:"absolute",top:0,bottom:0,left:"-35%",width:"26%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,.09), transparent)",animation:"shimmerSweep 10s linear infinite"}}/>
      <div style={{position:"absolute",top:"20%",right:"8%",fontSize:"8rem",opacity:.06,lineHeight:1,animation:"float 5s ease-in-out infinite"}}>{E.dog}</div>
      <div style={{position:"absolute",bottom:"15%",left:"5%",fontSize:"6rem",opacity:.05,lineHeight:1,animation:"float 4s ease-in-out infinite",animationDelay:"1s"}}>{E.cat}</div>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div className="reveal" style={{textAlign:"center",marginBottom:64}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:50,padding:"6px 18px",marginBottom:20}}>
            <span style={{width:8,height:8,borderRadius:"50%",background:C.cafeXlt,display:"block",animation:"pulseDot 1.8s infinite"}}/>
            <span style={{fontSize:".76rem",fontWeight:800,color:C.cafeXlt,textTransform:"uppercase",letterSpacing:1.2}}>Unete hoy, es gratis</span>
          </div>
          <h2 style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"clamp(2.2rem,4vw,3.5rem)",color:C.white,lineHeight:1.1,marginBottom:16,animation:"bobSoft 5.2s ease-in-out infinite"}}>
            Un animal te esta<br/><span style={{color:C.cafeXlt}}>esperando ahora</span>
          </h2>
          <p style={{fontSize:"1rem",color:"rgba(255,255,255,.65)",lineHeight:1.8,maxWidth:500,margin:"0 auto 36px"}}>
            Adopta de forma responsable y dale un hogar a quien mas lo necesita. Cada adopcion cambia dos vidas.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={onLoginClick} className="paw-btn" style={{padding:"15px 40px",border:"none",borderRadius:50,background:C.white,color:C.cafe,fontWeight:800,fontSize:"1rem",cursor:"pointer",transition:"all .25s",boxShadow:"0 8px 32px rgba(0,0,0,.2)",animation:"bobSoft 3.8s ease-in-out infinite"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(0,0,0,.3)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,.2)"}}>
              Quiero adoptar
            </button>
            <button onClick={onLoginClick} className="paw-btn" style={{padding:"15px 36px",border:"2px solid rgba(255,255,255,.35)",borderRadius:50,background:"transparent",color:C.white,fontWeight:700,fontSize:"1rem",cursor:"pointer",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.1)";e.currentTarget.style.borderColor="rgba(255,255,255,.7)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="rgba(255,255,255,.35)"}}>
              Registrar mi refugio
            </button>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {stats.map((s,i)=>(
            <div key={i} className="reveal" style={{background:"rgba(255,255,255,.07)",backdropFilter:"blur(10px)",borderRadius:20,padding:"24px 20px",textAlign:"center",border:"1px solid rgba(255,255,255,.1)",transition:"all .3s",animation:`bobSoft ${4.2+i*.25}s ease-in-out infinite`,animationDelay:`${i*.15}s`}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.14)";e.currentTarget.style.transform="translateY(-6px)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.07)";e.currentTarget.style.transform="none"}}>
              <div style={{fontSize:"2.5rem",marginBottom:10}}>{s.icon}</div>
              <div style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"2.4rem",color:C.cafeXlt,lineHeight:1,marginBottom:6}}>{s.n}</div>
              <div style={{fontSize:".8rem",color:"rgba(255,255,255,.55)",fontWeight:600,lineHeight:1.4}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return(
    <footer style={{background:C.ink,padding:"48px 5% 28px"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:40,marginBottom:40,paddingBottom:32,borderBottom:"1px solid rgba(255,255,255,.08)"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <LogoSVG size={32} color={C.cafeXlt}/>
              <span style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.4rem",color:C.cafeXlt}}>DOGOOD</span>
            </div>
            <p style={{fontSize:".85rem",color:"rgba(255,255,255,.4)",lineHeight:1.75,maxWidth:280}}>
              Plataforma de adopcion responsable que conecta animales rescatados con familias amorosas en Mexico.
            </p>
            <div style={{display:"flex",gap:10,marginTop:18}}>
              {[["Instagram","https://instagram.com"],["Facebook","https://facebook.com"],["TikTok","https://tiktok.com"]].map(([label,href],i)=>(
                <a key={i} href={href} target="_blank" rel="noreferrer" style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".72rem",fontWeight:800,cursor:"pointer",transition:"background .2s",color:"rgba(255,255,255,.8)",textDecoration:"none"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.12)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.06)"}>
                  {label.slice(0,2)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:".72rem",fontWeight:800,color:C.cafeXlt,textTransform:"uppercase",letterSpacing:1.5,marginBottom:16}}>Navegacion</div>
            {[["Conocenos","#conocenos"],["Video","#video-preview"],["Servicios","#servicios"],["Productos","#productos"],["Adoptar","#adoptar"],["Guias","#recursos"],["FAQ","#faq"]].map(([l,h])=>(
              <a key={l} href={h} style={{display:"block",fontSize:".85rem",color:"rgba(255,255,255,.45)",marginBottom:10,cursor:"pointer",transition:"color .2s",textDecoration:"none"}}
                onMouseEnter={e=>e.currentTarget.style.color=C.cafeXlt}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.45)"}>
                {l}
              </a>
            ))}
          </div>
          <div>
            <div style={{fontSize:".72rem",fontWeight:800,color:C.cafeXlt,textTransform:"uppercase",letterSpacing:1.5,marginBottom:16}}>Contacto</div>
            {[
              [E.phone,"WhatsApp: +52 55 1234 5678"],
              [E.email,"hola@dogood.mx"],
              [E.mapPin,"Av. Insurgentes Sur, CDMX"],
              [E.clock,"Lun a Sab 9:00 - 19:00"],
            ].map(([ic,t])=>(
              <div key={t} style={{display:"flex",alignItems:"center",gap:8,fontSize:".84rem",color:"rgba(255,255,255,.4)",marginBottom:10}}>
                <span>{ic}</span><span>{t}</span>
              </div>
            ))}
            <a href="https://wa.me/525512345678" target="_blank" rel="noreferrer" style={{display:"inline-flex",marginTop:8,padding:"8px 14px",borderRadius:999,border:"1px solid rgba(255,255,255,.2)",color:C.white,textDecoration:"none",fontSize:".78rem",fontWeight:800,background:"rgba(255,255,255,.07)"}}>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <span style={{fontSize:".78rem",color:"rgba(255,255,255,.25)"}}>2026 DoGood - Todos los derechos reservados</span>
          <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
            <a href="#faq" style={{fontSize:".78rem",color:"rgba(255,255,255,.35)",textDecoration:"none"}}>Ayuda</a>
            <a href="#" style={{fontSize:".78rem",color:"rgba(255,255,255,.35)",textDecoration:"none"}}>Aviso de privacidad</a>
            <a href="#" style={{fontSize:".78rem",color:"rgba(255,255,255,.35)",textDecoration:"none"}}>Terminos y condiciones</a>
            <span style={{fontSize:".78rem",color:"rgba(255,255,255,.25)"}}>Hecho con amor para los animales de Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AccessibilityDock({fontScale,setFontScale,highContrast,setHighContrast,reduceMotion,setReduceMotion}){
  const [open,setOpen]=useState(false);
  const bump=(delta)=>setFontScale(v=>Math.max(92,Math.min(118,v+delta)));
  return(
    <div className="a11y-dock" style={{position:"fixed",right:16,bottom:16,zIndex:180,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
      {open&&(
        <div style={{width:260,background:"rgba(255,253,249,.96)",backdropFilter:"blur(10px)",border:`1.5px solid ${C.beigedk}`,borderRadius:16,padding:"12px 12px 10px",boxShadow:`0 14px 34px ${C.shadowMd}`}}>
          <div style={{fontSize:".74rem",fontWeight:800,color:C.cafeLt,textTransform:"uppercase",letterSpacing:1.2,marginBottom:8}}>Accesibilidad</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
            <span style={{fontSize:".82rem",color:C.sub,fontWeight:700}}>Tamano de texto</span>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <button onClick={()=>bump(-2)} style={{width:24,height:24,borderRadius:8,border:`1px solid ${C.beigedk}`,background:C.white,cursor:"pointer",fontWeight:800}}>-</button>
              <span style={{fontSize:".76rem",fontWeight:800,color:C.cafe,minWidth:40,textAlign:"center"}}>{fontScale}%</span>
              <button onClick={()=>bump(2)} style={{width:24,height:24,borderRadius:8,border:`1px solid ${C.beigedk}`,background:C.white,cursor:"pointer",fontWeight:800}}>+</button>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <label style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:".82rem",color:C.sub,fontWeight:700}}>
              Contraste alto
              <input type="checkbox" checked={highContrast} onChange={e=>setHighContrast(e.target.checked)} style={{accentColor:C.cafe}}/>
            </label>
            <label style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:".82rem",color:C.sub,fontWeight:700}}>
              Reducir movimiento
              <input type="checkbox" checked={reduceMotion} onChange={e=>setReduceMotion(e.target.checked)} style={{accentColor:C.cafe}}/>
            </label>
          </div>
        </div>
      )}
      <button className="paw-btn" onClick={()=>setOpen(v=>!v)} style={{padding:"10px 14px",borderRadius:999,border:`1.5px solid ${C.beigedk}`,background:C.cafe,color:C.white,fontWeight:800,fontSize:".82rem",cursor:"pointer",boxShadow:`0 10px 24px ${C.shadowMd}`}}>
        {open?"Cerrar ajustes":"A11y"}
      </button>
    </div>
  );
}

function LandingToast({msg,type="info"}){
  if(!msg)return null;
  const bg=type==="success"?C.cafe:type==="error"?"#B91C1C":"#2C1A0E";
  return(
    <div className="landing-toast" style={{position:"fixed",right:18,bottom:18,zIndex:360,background:bg,color:C.white,padding:"11px 16px",borderRadius:12,fontSize:".82rem",fontWeight:800,boxShadow:`0 12px 28px ${C.shadowMd}`,animation:"fadeUp .25s ease"}}>
      {msg}
    </div>
  );
}

function LoginModal({onClose,onLogin,onNotify}){
  const [tab,setTab]=useState("login");
  const [email,setEmail]=useState(""); const [pass,setPass]=useState("");
  const [nombre,setNombre]=useState(""); const [regEmail,setRegEmail]=useState("");
  const [regPass,setRegPass]=useState(""); const [rol,setRol]=useState("usuario");
  const [tel,setTel]=useState(""); const [abierto,setAbierto]=useState(false);
  const [loading,setLoading]=useState(false); const [err,setErr]=useState("");
  const doLogin=async()=>{
    setLoading(true);setErr("");
    try{const r=await fetch(apiUrl("auth.php?action=login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password:pass})});const d=await r.json();if(d.ok){onNotify?.("Inicio de sesion exitoso","success");onLogin(d.user);}else {const m=d.error||"Credenciales incorrectas";setErr(m);onNotify?.(m,"error");}}
    catch{const m="No se puede conectar. Verifica que XAMPP este corriendo.";setErr(m);onNotify?.(m,"error");}
    setLoading(false);
  };
  const quickLogin=async type=>{
    const m={admin:{e:"admin@dogood.mx",p:"admin123"},rescatista:{e:"refugio@dogood.mx",p:"refugio123"},usuario:{e:"carlos@gmail.com",p:"carlos123"}}[type];
    setLoading(true);setErr("");
    try{const r=await fetch(apiUrl("auth.php?action=login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m.e,password:m.p})});const d=await r.json();if(d.ok){onNotify?.(`Bienvenido ${d.user?.nombre?.split(" ")[0]||""}`,"success");onLogin(d.user);}else {setErr(d.error);onNotify?.(d.error,"error");}}
    catch{const m="No se puede conectar al servidor.";setErr(m);onNotify?.(m,"error");}
    setLoading(false);
  };
  const doRegister=async()=>{
    if(!nombre||!regEmail||!regPass){const m="Completa todos los campos";setErr(m);onNotify?.(m,"error");return;}
    setLoading(true);setErr("");
    try{const r=await fetch(apiUrl("auth.php?action=register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre,email:regEmail,password:regPass,rol,telefono:tel,abierto_a_opciones:rol==="usuario"?abierto:false})});const d=await r.json();if(d.ok){onNotify?.("Cuenta creada correctamente","success");onLogin(d.user);}else {const m=d.error||"Error al registrar";setErr(m);onNotify?.(m,"error");}}
    catch{const m="No se puede conectar al servidor.";setErr(m);onNotify?.(m,"error");}
    setLoading(false);
  };
  return(
    <div onClick={e=>{if(e.target===e.currentTarget)onClose();}} style={{position:"fixed",inset:0,background:"rgba(44,26,14,.65)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(10px)"}}>
      <div style={{background:C.cream,borderRadius:28,width:"100%",maxWidth:480,boxShadow:"0 32px 80px rgba(0,0,0,.3)",overflow:"hidden",animation:"fadeUp .3s ease"}}>
        <div style={{background:`linear-gradient(135deg,${C.cafe},${C.cafeMd})`,padding:"26px 28px 22px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:-24,bottom:-24,fontSize:"9rem",opacity:.08,lineHeight:1}}>{E.paw}</div>
          <button onClick={onClose} style={{position:"absolute",top:12,right:12,width:30,height:30,background:"rgba(255,255,255,.15)",border:"none",borderRadius:"50%",color:C.white,cursor:"pointer",fontSize:".9rem",display:"flex",alignItems:"center",justifyContent:"center"}}>X</button>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <LogoSVG size={34} color={C.white}/>
            <span style={{fontFamily:"'Fredoka',sans-serif",fontWeight:700,fontSize:"1.6rem",color:C.white}}>DOGOOD</span>
          </div>
          <div style={{fontSize:".84rem",color:"rgba(255,255,255,.6)",marginTop:2}}>Adopcion responsable para todos</div>
        </div>
        <div style={{padding:"22px 28px 28px"}}>
          <div style={{display:"flex",background:C.beige,borderRadius:12,padding:4,marginBottom:20,gap:4}}>
            {[["login","Iniciar sesion"],["register","Registrarme"]].map(([t,l])=>(
              <button key={t} onClick={()=>{setTab(t);setErr("");}} style={{flex:1,padding:"9px",fontWeight:800,fontSize:".85rem",cursor:"pointer",background:tab===t?C.white:"transparent",color:tab===t?C.cafe:C.muted,border:"none",borderRadius:10,transition:"all .2s",boxShadow:tab===t?`0 2px 8px ${C.shadow}`:"none"}}>{l}</button>
            ))}
          </div>
          {err&&<div style={{background:"#FEE2E2",border:"1px solid #FECACA",borderRadius:10,padding:"10px 14px",fontSize:".84rem",color:"#C0392B",marginBottom:14,fontWeight:700}}>{err}</div>}
          {tab==="login"?(
            <>
              {[["Correo","email",email,setEmail,"tu@correo.com"],["Contrasena","password",pass,setPass,"........"]].map(([l,t,v,fn,ph])=>(
                <div key={l} style={{marginBottom:14}}>
                  <label style={{display:"block",fontSize:".76rem",fontWeight:800,color:C.sub,textTransform:"uppercase",letterSpacing:.6,marginBottom:6}}>{l}</label>
                  <input type={t} value={v} onChange={e=>fn(e.target.value)} placeholder={ph} onKeyDown={e=>e.key==="Enter"&&doLogin()}
                    style={{width:"100%",padding:"12px 14px",border:`1.5px solid ${C.beigedk}`,borderRadius:12,fontSize:".9rem",color:C.ink,outline:"none",background:C.white}}
                    onFocus={e=>e.target.style.borderColor=C.cafe} onBlur={e=>e.target.style.borderColor=C.beigedk}/>
                </div>
              ))}
              <button onClick={doLogin} disabled={loading} style={{width:"100%",padding:"13px",border:"none",borderRadius:12,background:loading?C.muted:C.cafe,color:C.white,fontWeight:800,fontSize:".95rem",cursor:loading?"default":"pointer",marginTop:4}}>
                {loading?"Entrando...":"Entrar"}
              </button>
              <div style={{marginTop:16,background:C.beige,borderRadius:12,padding:"12px 14px"}}>
                <div style={{fontSize:".68rem",fontWeight:800,color:C.muted,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Cuentas de prueba</div>
                {[["admin","Admin - admin@dogood.mx"],["rescatista","Rescatista - refugio@dogood.mx"],["usuario","Adoptante - carlos@gmail.com"]].map(([t,l])=>(
                  <button key={t} onClick={()=>quickLogin(t)} style={{display:"flex",width:"100%",padding:"8px 10px",marginBottom:5,background:C.white,border:`1px solid ${C.beigedk}`,borderRadius:9,fontSize:".79rem",cursor:"pointer",color:C.ink,fontWeight:600,transition:"border-color .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=C.cafe}
                    onMouseLeave={e=>e.currentTarget.style.borderColor=C.beigedk}>{l}</button>
                ))}
              </div>
            </>
          ):(
            <>
              {[["Nombre completo","text",nombre,setNombre,"Tu nombre"],["Correo","email",regEmail,setRegEmail,"tu@correo.com"],["Telefono","tel",tel,setTel,"55 1234 5678"],["Contrasena","password",regPass,setRegPass,"........"]].map(([l,t,v,fn,ph])=>(
                <div key={l} style={{marginBottom:12}}>
                  <label style={{display:"block",fontSize:".76rem",fontWeight:800,color:C.sub,textTransform:"uppercase",letterSpacing:.6,marginBottom:6}}>{l}</label>
                  <input type={t} value={v} onChange={e=>fn(e.target.value)} placeholder={ph}
                    style={{width:"100%",padding:"12px 14px",border:`1.5px solid ${C.beigedk}`,borderRadius:12,fontSize:".9rem",color:C.ink,outline:"none",background:C.white}}
                    onFocus={e=>e.target.style.borderColor=C.cafe} onBlur={e=>e.target.style.borderColor=C.beigedk}/>
                </div>
              ))}
              <div style={{marginBottom:12}}>
                <label style={{display:"block",fontSize:".76rem",fontWeight:800,color:C.sub,textTransform:"uppercase",letterSpacing:.6,marginBottom:6}}>Tipo de cuenta</label>
                <select value={rol} onChange={e=>setRol(e.target.value)} style={{width:"100%",padding:"12px 14px",border:`1.5px solid ${C.beigedk}`,borderRadius:12,fontSize:".9rem",color:C.ink,outline:"none",background:C.white}}>
                  <option value="usuario">Soy adoptante</option>
                  <option value="rescatista">Soy rescatista</option>
                </select>
              </div>
              {rol==="usuario"&&(
                <label style={{display:"flex",gap:10,marginBottom:14,cursor:"pointer",padding:"10px 12px",background:C.beige,borderRadius:10,border:`1px solid ${C.beigedk}`}}>
                  <input type="checkbox" checked={abierto} onChange={e=>setAbierto(e.target.checked)} style={{marginTop:2,accentColor:C.cafe,width:15,height:15,flexShrink:0}}/>
                  <span style={{fontSize:".83rem",color:C.sub,lineHeight:1.5}}>Estoy abierto a adoptar mas de un animal</span>
                </label>
              )}
              <button onClick={doRegister} disabled={loading} style={{width:"100%",padding:"13px",border:"none",borderRadius:12,background:loading?C.muted:C.cafe,color:C.white,fontWeight:800,fontSize:".95rem",cursor:loading?"default":"pointer"}}>
                {loading?"Creando cuenta...":"Crear cuenta"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage({onLogin}){
  const [splashDone,setSplashDone]=useState(false);
  const [showLogin,setShowLogin]=useState(false);
  const [fontScale,setFontScale]=useState(100);
  const [highContrast,setHighContrast]=useState(false);
  const [reduceMotion,setReduceMotion]=useState(false);
  const [toast,setToast]=useState(null);
  const demoTimers=useRef([]);
  useReveal();

  const notify=(msg,type="info")=>{
    setToast({msg,type});
    setTimeout(()=>setToast(null),2600);
  };

  const runGuidedDemo=()=>{
      const steps=[
      ["video-preview","Video de impacto"],
      ["como-funciona","Proceso de adopcion"],
      ["adoptar","Collage de peluditos"],
      ["servicios","Servicios"],
      ["productos","Productos"],
      ["faq","Preguntas frecuentes"],
    ];
    demoTimers.current.forEach(clearTimeout);
    demoTimers.current=[];
    notify("Iniciando demo guiada (aprox. 60s)","success");
    steps.forEach(([id,label],i)=>{
      const t=setTimeout(()=>{
        const el=document.getElementById(id);
        if(el)el.scrollIntoView({behavior:"smooth",block:"start"});
        notify(`Paso ${i+1}: ${label}`,"info");
      },i*8500);
      demoTimers.current.push(t);
    });
  };

  useEffect(()=>{
    const prev=document.documentElement.style.fontSize;
    document.documentElement.style.fontSize=`${fontScale}%`;
    return()=>{document.documentElement.style.fontSize=prev||"100%";};
  },[fontScale]);

  useEffect(()=>()=>demoTimers.current.forEach(clearTimeout),[]);

  return(
    <>
      <style>{G}</style>
      {!splashDone&&<Splash onDone={()=>setSplashDone(true)}/>}
      {splashDone&&(
        <div className={`landing-shell${highContrast?" hc":""}${reduceMotion?" rm":""}`} style={{position:"relative"}}>
          <AmbientBackdrop/>
          <div style={{position:"relative",zIndex:1}}>
            <Navbar onLoginClick={()=>setShowLogin(true)} onDemoClick={runGuidedDemo}/>
            <Hero onLoginClick={()=>setShowLogin(true)} onDemoClick={runGuidedDemo}/>
            <VideoSection/>
            <LiveMetricsSection onLoginClick={()=>setShowLogin(true)}/>
            <MatchQuizSection onLoginClick={()=>setShowLogin(true)}/>
            <Carousel/>
            <StoriesSection/>
            <MapSection onLoginClick={()=>setShowLogin(true)}/>
            <ProcessSection/>
            <ConocenosSection/>
            <ServicesSection onLoginClick={()=>setShowLogin(true)}/>
            <ProductsSection onLoginClick={()=>setShowLogin(true)}/>
            <ResourcesSection/>
            <FAQSection/>
            <HelpSection onLoginClick={()=>setShowLogin(true)}/>
            <CTASection onLoginClick={()=>setShowLogin(true)}/>
            <Footer/>
            {showLogin&&<LoginModal onClose={()=>setShowLogin(false)} onNotify={notify} onLogin={u=>{setShowLogin(false);onLogin(u);}}/>}
          </div>
          <AccessibilityDock
            fontScale={fontScale}
            setFontScale={setFontScale}
            highContrast={highContrast}
            setHighContrast={setHighContrast}
            reduceMotion={reduceMotion}
            setReduceMotion={setReduceMotion}
          />
          <LandingToast msg={toast?.msg} type={toast?.type}/>
        </div>
      )}
    </>
  );
}
