"use strict";(self.webpackChunkesipl=self.webpackChunkesipl||[]).push([[283],{584:(A,e,t)=>{t.r(e),t.d(e,{default:()=>S});var s=t(5043),a=t(9927),l=t(6587),i=(t(7915),t(579));const n=[{heading:"Welcome to Our Company",image:"https://via.placeholder.com/1200x800?text=Image+1",content:"We are dedicated to providing top-notch services and solutions. Our team is committed to excellence and innovation."},{heading:"Our Vision",image:"https://via.placeholder.com/1200x800?text=Image+2",content:"Our vision is to lead the industry with our cutting-edge technology and customer-first approach. We strive to make a positive impact globally."},{heading:"Meet the Team",image:"https://via.placeholder.com/1200x800?text=Image+3",content:"Our team is composed of highly skilled professionals who bring diverse experiences and expertise to the table. Together, we achieve great results."}],r=()=>{const[A,e]=(0,s.useState)(0),[t,r]=(0,s.useState)((A+1)%n.length),o=(0,a.s)(),c=(0,s.useRef)(null);(0,s.useEffect)((()=>(c.current=setInterval((()=>{d()}),8e3),()=>clearInterval(c.current))),[A]),(0,s.useEffect)((()=>{m()}),[A]);const d=()=>{const t=(A+1)%n.length;r(t),e(t)},m=async()=>{await o.start({x:"-100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}}),o.start({x:"100%",opacity:0,transition:{duration:0}}),o.start({x:"0%",opacity:1,transition:{duration:.5,ease:"easeInOut"}})};return(0,i.jsxs)("div",{className:"h-screen flex flex-col relative overflow-hidden",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-500/50 to-white z-0"}),(0,i.jsx)("header",{className:"w-full bg-white text-center py-4 z-10",children:(0,i.jsx)("h1",{className:"text-4xl font-bold text-orange-600",children:"Who Are We"})}),(0,i.jsxs)("div",{className:"relative flex flex-1 mt-16 overflow-hidden",children:[(0,i.jsxs)("div",{className:"flex flex-col justify-center p-4 w-full md:w-1/2 z-10 relative",children:[(0,i.jsx)("h2",{className:"text-xl font-bold",children:n[A].heading}),(0,i.jsx)("p",{className:"mt-2",children:n[A].content})]}),(0,i.jsx)("div",{className:"relative w-full md:w-1/2 flex items-center justify-center overflow-hidden",children:(0,i.jsxs)(l.P.div,{className:"absolute w-full h-full flex",animate:o,initial:{x:"0%",opacity:1},children:[(0,i.jsx)(l.P.img,{src:n[A].image,alt:"Current Slide",className:"w-full h-auto object-cover",style:{position:"absolute",top:0}}),(0,i.jsx)(l.P.img,{src:n[t].image,alt:"Next Slide",className:"w-full h-auto object-cover",initial:{x:"100%"},animate:{x:"0%"},transition:{duration:.5,ease:"easeInOut"},style:{position:"absolute",top:0}})]})})]}),(0,i.jsxs)("div",{className:"absolute bottom-4 w-full flex justify-center space-x-4 z-20",children:[(0,i.jsx)("button",{className:"bg-orange-600 text-white p-2 rounded-full",onClick:()=>{const t=(A-1+n.length)%n.length;r(t),e(t)},children:"<"}),(0,i.jsx)("button",{className:"bg-orange-600 text-white p-2 rounded-full",onClick:d,children:">"})]})]})};var o=t(2382);const c=function(){const[A,e]=(0,s.useState)(0),t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,beforeChange:(A,t)=>e(t)},a=[{heading:"Heading for Image 1",content:"Content for image 1 with more details here."},{heading:"Heading for Image 2",content:"Content for image 2 with more details here."},{heading:"Heading for Image 3",content:"Content for image 3 with more details here."}];return(0,i.jsxs)("div",{className:"relative w-full h-screen overflow-hidden",children:[(0,i.jsx)("style",{children:"\n    @keyframes slide-in {\n      0% {\n        transform: translateX(-100%);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0);\n        opacity: 1;\n      }\n    }\n    @keyframes slide-out {\n      0% {\n        transform: translateX(0);\n        opacity: 1;\n      }\n      100% {\n        transform: translateX(100%);\n        opacity: 0;\n      }\n    }\n    .animate-slide-in {\n      animation: slide-in 1s ease-out;\n    }\n    .animate-slide-out {\n      animation: slide-out 1s ease-in;\n    }\n  "}),(0,i.jsxs)(o.A,{...t,className:"w-full h-full",children:[(0,i.jsx)("div",{className:"relative w-full h-full",children:(0,i.jsx)("img",{src:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",alt:"image 1",className:"w-full h-full object-cover"})}),(0,i.jsx)("div",{className:"relative w-full h-full",children:(0,i.jsx)("img",{src:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",alt:"image 2",className:"w-full h-full object-cover"})}),(0,i.jsx)("div",{className:"relative w-full h-full",children:(0,i.jsx)("img",{src:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",alt:"image 3",className:"w-full h-full object-cover"})})]}),(0,i.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(255, 165, 0, 0.75)",clipPath:"polygon(0% 0%, 60% 0%, 20% 100%, 0% 100%)",zIndex:1,display:"flex",alignItems:"center"},className:"flex items-center justify-start p-8",children:(0,i.jsxs)("div",{className:"ml-12",children:[(0,i.jsx)("h1",{className:"text-white text-4xl font-bold "+(0===A?"animate-slide-in":"animate-slide-out"),children:a[A].heading}),(0,i.jsx)("p",{className:"text-white text-lg "+(0===A?"animate-slide-in":"animate-slide-out"),children:a[A].content})]})})]})},d="data:image/jpeg;base64,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",m={"MSE/ RE/ RS Wall Construction":{imgSrc:d,content:"Content for MSE/ RE/ RS Wall Construction."},"Reinforced Soil Slopes (RSS)":{imgSrc:d,content:"Content for Reinforced Soil Slopes (RSS)."},"Erosion Control":{imgSrc:d,content:"Content for Erosion Control."},"Concrete Form-liner":{imgSrc:d,content:"Content for Concrete Form-liner."},"Soil Nailing":{imgSrc:d,content:"Content for Soil Nailing."},"Crash Barrier Construction":{imgSrc:d,content:"Content for Crash Barrier Construction."},"RS Wall Repair & Rehabilitation":{imgSrc:d,content:"Content for RS Wall Repair & Rehabilitation."}};const x=function(){const[A,e]=(0,s.useState)("MSE/ RE/ RS Wall Construction");return(0,i.jsxs)("div",{className:"text-center p-9 ",children:[(0,i.jsx)("div",{className:"mb-8",children:(0,i.jsxs)("div",{className:"text-3xl lg:text-5xl font-semibold mb-4",children:[(0,i.jsx)("span",{className:"text-orange-500",children:"What We"}),(0,i.jsx)("span",{className:"text-balck",children:" Do"})]})}),(0,i.jsxs)("div",{className:"w-full flex flex-col lg:flex-row",children:[(0,i.jsx)("div",{className:"lg:w-1/4 bg-orange-600 text-white p-4 lg:p-8 flex flex-col",children:(0,i.jsx)("div",{className:"overflow-x-auto lg:overflow-visible whitespace-nowrap lg:flex lg:flex-col",children:(0,i.jsx)("div",{className:"flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4",children:Object.keys(m).map((t=>(0,i.jsx)("button",{className:"py-2 px-4 mb-2 rounded-lg border-2 transition-all duration-300 ease-in-out transform hover:scale-105 "+(A===t?"bg-white text-black border-black transform scale-105":"bg-orange-700 text-white border-orange-700"),onClick:()=>e(t),children:t},t)))})})}),(0,i.jsx)("div",{className:"lg:w-3/4 p-4 lg:p-8 flex flex-col",children:(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8",children:[(0,i.jsx)("div",{className:"flex-1 animate__animated animate__fadeIn",children:(0,i.jsx)("img",{src:m[A].imgSrc,alt:A,className:"w-full h-auto object-cover rounded-lg"})}),(0,i.jsxs)("div",{className:"flex-1 animate__animated animate__fadeIn",children:[(0,i.jsx)("h2",{className:"text-xl lg:text-2xl font-bold mb-4",children:A}),(0,i.jsx)("p",{className:"text-base lg:text-lg leading-relaxed",children:m[A].content})]})]})})]})]})};var f=t(3204);const h=()=>((0,s.useEffect)((()=>{const A=new IntersectionObserver((A=>{A.forEach((A=>{A.isIntersecting&&A.target.classList.add("animate")}))}),{threshold:.1});return document.querySelectorAll(".timeline-item").forEach((e=>A.observe(e))),()=>A.disconnect()}),[]),(0,i.jsx)("div",{className:"bg-gray-100 min-h-screen py-10",children:(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsxs)("div",{className:"text-center mb-10 flex items-center justify-center",children:[(0,i.jsx)(f.Nhm,{className:"text-orange-500 text-4xl mr-4"}),(0,i.jsx)("h1",{className:"text-5xl font-bold text-orange-500",children:"News"})]}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute inset-0 flex justify-center",children:(0,i.jsx)("div",{className:"w-1 bg-orange-500"})}),(0,i.jsxs)("div",{className:"space-y-12",children:[(0,i.jsx)("div",{className:"timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right",children:(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-orange-500",children:"Soil Nailing Design & Execution work at Mukarba Chowk to Panipat section from Welspun Enterprises Ltd."}),(0,i.jsx)("p",{className:"text-black mt-2",children:"This project involves soil nailing for slope stabilization on a critical highway section."})]})}),(0,i.jsx)("div",{className:"timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left",children:(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-orange-500",children:"ESIPL bags \u201cShored Mechanically Stabilized Earth Wall\u201d project from APCO Infratech Pvt. Ltd. in Doda, Jammu & Kashmir."}),(0,i.jsx)("p",{className:"text-black mt-2",children:"The project focuses on enhancing road safety and stability in a landslide-prone region."})]})}),(0,i.jsx)("div",{className:"timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right",children:(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-orange-500",children:"ESIPL bags \u201cRS Wall work at Cement factory in Assam\u201d from Dalmia Group."}),(0,i.jsx)("p",{className:"text-black mt-2",children:"The project involves constructing RS walls to support the infrastructure at the cement factory."})]})}),(0,i.jsx)("div",{className:"timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left",children:(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-orange-500",children:"Globe Infra/ESIPL bags new projects:"}),(0,i.jsxs)("ul",{className:"list-disc ml-5 mt-2 text-black",children:[(0,i.jsx)("li",{children:"RS Wall works from DRB Infrastructure Pvt. Ltd. in Jammu."}),(0,i.jsx)("li",{children:"RS Wall works (block Fascia) at Kasganj bypass in Uttar Pradesh from GR Infra-projects Pvt ltd."}),(0,i.jsx)("li",{children:"RS Wall works in Ranchi-Kolkata Project (Pkg-10&13) from HG Infrastructure Pvt Ltd."}),(0,i.jsx)("li",{children:"Slope Protection Work at Kamlapuram-Oddanchatram section from DRN Infrastructure Pvt. Ltd. in Tamil Nadu."}),(0,i.jsx)("li",{children:"RS Wall works (Gabion Fascia) at Bangalore-Chennai Expressway (Pkg-01) (Andhra Pradesh) from Montecarlo Ltd."})]})]})})]})]})]})}));var u=t(8696),j=t(5475);const p=t.p+"static/media/client1.27be7ce07ec9db9ea43b.jpg",v=t.p+"static/media/client2.53491c7f79b9fe062455.jpg",w=t.p+"static/media/client3.9ba33bd9a88588fd4165.jpg",g=t.p+"static/media/client4.248fe9d4054b54115593.jpg",N=t.p+"static/media/client5.d98f98f9ef88a1e455c1.jpg",b=t.p+"static/media/client6.5f63ecd1fd6cd20eec92.jpg";const y=function(){const A=[p,v,w,g,N,b],e=[p,v,w,g,N,b],t=(0,u.zh)({from:{transform:"translateX(0%)"},to:{transform:"translateX(-100%)"},config:{duration:3e4},reset:!0,loop:!0}),s=(0,u.zh)({from:{transform:"translateX(100%)"},to:{transform:"translateX(0%)"},config:{duration:3e4},reset:!0,loop:!0,delay:3e3});return(0,i.jsx)("div",{className:"w-screen h-screen flex items-center justify-center bg-white text-black",children:(0,i.jsxs)("div",{className:"w-full max-w-6xl flex flex-col items-center",children:[(0,i.jsx)("div",{className:"text-4xl font-medium text-orange-500 mb-2",children:"Our Clients"}),(0,i.jsx)("div",{className:"text-lg font-light text-gray-600 mb-10",children:"Earthcon Systems (India) Pvt. Ltd."}),(0,i.jsxs)("div",{className:"overflow-hidden w-full relative",children:[(0,i.jsx)(u.CS.div,{className:"flex whitespace-nowrap",style:t,children:A.map(((A,e)=>(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2",children:(0,i.jsx)("img",{src:A,className:"w-40 h-auto rounded-lg shadow-md",alt:`client-${e}`})},e)))}),(0,i.jsx)(u.CS.div,{className:"absolute top-0 left-0 flex whitespace-nowrap",style:s,children:A.map(((A,e)=>(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2",children:(0,i.jsx)("img",{src:A,className:"w-40 h-auto rounded-lg shadow-md",alt:`client-${e}`})},e)))})]}),(0,i.jsxs)("div",{className:"overflow-hidden w-full relative mt-10",children:[(0,i.jsx)(u.CS.div,{className:"flex whitespace-nowrap",style:t,children:e.map(((A,e)=>(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2",children:(0,i.jsx)("img",{src:A,className:"w-40 h-auto rounded-lg shadow-md",alt:`logo-${e}`})},e)))}),(0,i.jsx)(u.CS.div,{className:"absolute top-0 left-0 flex whitespace-nowrap",style:{...s,transform:"translateX(-100%)",from:{transform:"translateX(100%)"},to:{transform:"translateX(0%)"}},children:e.map(((A,e)=>(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2",children:(0,i.jsx)("img",{src:A,className:"w-40 h-auto rounded-lg shadow-md",alt:`logo-${e}`})},e)))})]}),(0,i.jsx)(j.N_,{to:"/more",className:"mt-10 text-blue-600 underline",children:"View More"})]})})},S=()=>(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"py-8",children:(0,i.jsx)(r,{})}),(0,i.jsx)("div",{className:"py-8",children:(0,i.jsx)(h,{})}),(0,i.jsx)("div",{className:"py-8",children:(0,i.jsx)(x,{})}),(0,i.jsx)("div",{className:"py-8",children:(0,i.jsx)(y,{})})]})}}]);
//# sourceMappingURL=283.47d47be5.chunk.js.map