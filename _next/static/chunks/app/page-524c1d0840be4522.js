(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4530:function(e,t,a){Promise.resolve().then(a.bind(a,7003)),Promise.resolve().then(a.bind(a,4196)),Promise.resolve().then(a.bind(a,605)),Promise.resolve().then(a.bind(a,3322)),Promise.resolve().then(a.bind(a,1726))},7003:function(e,t,a){"use strict";a.d(t,{default:function(){return n}});var s=a(7437),r=a(2265),l=a(3145);let i=[{id:1,src:"/img/shenyang2024.jpg",alt:"shenyang2024"},{id:2,src:"/img/canada2022.jpg",alt:"canada2022"},{id:3,src:"/img/hawaii2022.jpg",alt:"hawaii2022"},{id:4,src:"/img/muirwood.jpg",alt:"muirwoods2022"},{id:5,src:"/img/fostercity2019.jpg",alt:"fostercity2019"},{id:6,src:"/img/academyofart2019.jpg",alt:"academyofart2019"},{id:7,src:"/img/yosemite2019.jpg",alt:"yosemite2019"},{id:8,src:"/img/seapoint_sf_2019.jpg",alt:"seapoint_sf_2019"}];function n(){let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%i.length)},5e3);return()=>clearInterval(e)},[]),(0,s.jsx)("div",{className:"max-w-6xl mx-auto mt-30 pt-16 min-h-screen",children:(0,s.jsxs)("section",{className:"py-20 px-4 h-full",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-8 text-center text-white font-sans tracking-tight",children:"About Me"}),(0,s.jsxs)("div",{className:"flex flex-col items-center h-full",children:[(0,s.jsxs)("div",{className:"w-full relative h-[400px] md:h-[600px] mb-8",children:[i.map((t,a)=>(0,s.jsx)(l.default,{src:t.src||"/placeholder.svg",alt:t.alt,fill:!0,className:"object-cover rounded-lg transition-opacity duration-1000 ".concat(a===e?"opacity-100":"opacity-0")},t.id)),(0,s.jsxs)("div",{className:"absolute inset-0 flex items-center justify-between p-4",children:[(0,s.jsx)("button",{onClick:()=>{t(e=>(e-1+i.length)%i.length)},className:"bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity","aria-label":"Previous image",children:"❮"}),(0,s.jsx)("button",{onClick:()=>{t(e=>(e+1)%i.length)},className:"bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity","aria-label":"Next image",children:"❯"})]}),(0,s.jsx)("div",{className:"absolute bottom-4 left-0 right-0 flex justify-center space-x-2",children:i.map((a,r)=>(0,s.jsx)("button",{onClick:()=>t(r),className:"w-3 h-3 rounded-full ".concat(r===e?"bg-white":"bg-gray-400"),"aria-label":"Go to image ".concat(r+1)},"dot-".concat(r)))})]}),(0,s.jsxs)("div",{className:"w-full max-w-3xl text-center mb-20",children:[(0,s.jsxs)("p",{className:"text-lg mb-4 text-white font-light leading-relaxed",children:["Hello World! My name is Alex Cho, a multi-disciplinary ",(0,s.jsx)("span",{className:"font-semibold text-blue-300",children:"Product Manager"})," ranging as a ",(0,s.jsx)("span",{className:"font-semibold text-green-300",children:"Self-Taught Developer"}),", Full-Cycle Sales from ",(0,s.jsx)("span",{className:"font-semibold text-gray-300",children:"Lead Generation"})," to ",(0,s.jsx)("span",{className:"font-semibold text-yellow-300",children:"Customer Success"}),", ",(0,s.jsx)("span",{className:"font-semibold text-purple-300",children:"UX Designer"}),", ",(0,s.jsx)("span",{className:"font-semibold text-orange-300",children:"Operations "}),", and ",(0,s.jsx)("span",{className:"font-semibold text-red-300",children:"Marketing"}),"."]}),(0,s.jsxs)("p",{className:"text-lg mb-4 text-white font-light leading-relaxed",children:["I travelled to ",(0,s.jsx)("span",{className:"font-semibold text-pink-300",children:"25+ cities"})," in China and ",(0,s.jsx)("span",{className:"font-semibold text-pink-300",children:"10+ countries"})," around the world."]}),(0,s.jsxs)("p",{className:"text-lg mb-4 text-white font-light leading-relaxed",children:["Current hobbies include ",(0,s.jsx)("span",{className:"font-semibold text-blue-300",children:"music"}),": guitar, piano, lead and harmony vocals, ",(0,s.jsx)("span",{className:"font-semibold text-green-300",children:"video games"}),", and ",(0,s.jsx)("span",{className:"font-semibold text-yellow-300",children:"traveling"}),". Previously a ",(0,s.jsx)("span",{className:"font-semibold text-purple-300",children:"b-boy"})," competing in the Bay Area."]})]})]})]})})}},4196:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var s=a(7437),r=a(2265),l=a(7648),i=a(6840);let n=[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];function o(){let[e,t]=(0,r.useState)(!1),[a,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{o(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(a?"bg-gray-800 shadow-md":"bg-gray-800 bg-opacity-90"),children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,s.jsxs)(l.default,{href:"/",className:"flex items-center",children:[(0,s.jsx)("span",{className:"text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:"Alex Cho"}),(0,s.jsx)("span",{className:"text-2xl text-gray-300 mx-2",children:"-"}),(0,s.jsx)("span",{className:"text-2xl font-semibold text-gray-300",children:"Product Manager"})]}),(0,s.jsx)("nav",{className:"hidden md:flex space-x-8",children:n.map(e=>(0,s.jsx)(l.default,{href:e.href,className:"text-gray-200 hover:text-white transition-colors",children:e.name},e.name))}),(0,s.jsx)("button",{className:"md:hidden text-gray-200 hover:text-white",onClick:()=>t(!e),children:(0,s.jsx)(i.Z,{size:24})})]})})}),(0,s.jsx)("div",{className:"h-16"}),e&&(0,s.jsx)("nav",{className:"md:hidden bg-gray-800",children:n.map(e=>(0,s.jsx)(l.default,{href:e.href,className:"block py-2 px-4 text-gray-200 hover:bg-gray-700",onClick:()=>t(!1),children:e.name},e.name))})]})}},605:function(e,t,a){"use strict";a.d(t,{default:function(){return j}});var s=a(7437),r=a(2265),l=a(3145),i=a(3647),n=a(7495),o=a(535),c=a(4508);let d=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=r.forwardRef((e,t)=>{let{className:a,variant:r,size:l,asChild:i=!1,...o}=e,m=i?n.g7:"button";return(0,s.jsx)(m,{className:(0,c.cn)(d({variant:r,size:l,className:a})),ref:t,...o})});m.displayName="Button";var h=a(9202),x=a(5135),u=a(2451),g=a(407);let p=[{title:"MentorNear",description:"jQuery app: Find and meet with a mentor near you",image:"img/mentornear.png",repo:"https://github.com/alexsjcho/mentor-near-api-capstone",category:"Web",tools:["jQuery","HTML","CSS","JavaScript","Bootstrap","Normalize.css","3rd Party API"]},{title:"Qualified",description:"Allows users to score their sales conversations",image:"img/qualified.png",repo:"https://github.com/alexsjcho/qualified-react-redux-immutable-app",category:"Web",tools:["React","Redux","React-Router","Immutable","Bootstrap","Jest","Enzyme","JavaScript","CSS","3rd Party API"]},{title:"SmartOKR",description:"Automate your goals via everday software tools",image:"/img/sokrapp.png",repo:"https://github.com/alexsjcho/smart-okr-react-redux-app",category:"Web",tools:["React","Redux","JavaScript","3rd Party API"]},{title:"GramPages",description:"GramPages provides engagement analytics for Instagram to empower influencers to make content creation decisions that will yield the greatest impact (no longer hosted, private GitHub repo)",image:"/img/grampages.png",category:"Web",tools:["JavaScript","CSS","3rd Party API","React","Redux","React-Router","Express","Node.js","MongoDB","Mongoose"]},{title:"Rollout System",description:"Internal ByteDance intent-based deployment IaC product",image:"/img/rolloutsystem.png",demo:"https://www.figma.com/proto/NdFRq7UsKkyrfIFddtZitG/RLS-Q32024?node-id=36-27387&t=PDo2dUO7bLGzoPVl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",category:"UX/UI Design",tools:["Figma"]},{title:"ByteGate",description:"Internal ByteDance feature flagging product",image:"/img/bytegate.png",demo:"https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/feature-gate-Q3-2024?node-id=1-52442&node-type=FRAME&t=ghsDeWkF9NHlYaUR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A11",category:"UX/UI Design",tools:["Figma"]},{title:"AI-Driven Financial Forecasting Tool",description:"Developed a machine learning model to predict market trends and provide financial insights with 85% accuracy.",image:"/placeholder.svg?height=200&width=300",demo:"https://example.com/demo5",repo:"https://github.com/example/repo5",category:"AI/ML",tools:["Python","Machine Learning","Data Analysis"]},{title:"AI-Powered Customer Service Chatbot",description:"Developed an intelligent chatbot using NLP to improve customer service efficiency by 40%.",image:"/placeholder.svg?height=200&width=300",demo:"https://example.com/demo1",repo:"https://github.com/example/repo1",category:"AI/ML",tools:["Python","Natural Language Processing","Chatbot Development"]}],f={"AI/ML":"bg-blue-100 text-blue-800",Web:"bg-green-100 text-green-800","UX/UI Design":"bg-orange-100 text-orange-800"};function j(){let[e,t]=(0,r.useState)("All"),[a,n]=(0,r.useState)(1),o=(0,r.useMemo)(()=>"All"===e?p:p.filter(t=>t.category===e),[e]),c=Math.ceil(o.length/9),d=o.slice((a-1)*9,9*a);return(0,s.jsx)("section",{className:"py-20 px-4",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-8 text-center",children:"Projects"}),(0,s.jsx)("div",{className:"mb-8 w-64 mx-auto",children:(0,s.jsxs)(i.Ph,{onValueChange:e=>{t(e),n(1)},children:[(0,s.jsx)(i.i4,{children:(0,s.jsx)(i.ki,{placeholder:"Select a category"})}),(0,s.jsxs)(i.Bw,{children:[(0,s.jsx)(i.Ql,{value:"All",children:"All Projects"}),(0,s.jsx)(i.Ql,{value:"Web",children:"Web"}),(0,s.jsx)(i.Ql,{value:"AI/ML",children:"AI/ML"}),(0,s.jsx)(i.Ql,{value:"UX/UI Design",children:"UX/UI Design"})]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(t=>(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md relative",children:["All"===e&&(0,s.jsx)("span",{className:"absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ".concat(f[t.category]),children:t.category}),(0,s.jsx)(l.default,{src:t.image||"/placeholder.svg",alt:t.title,width:400,height:400,className:"w-[300px] h-[300px] object-contain mx-auto mb-4"}),(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:t.title}),(0,s.jsx)("p",{className:"text-gray-600 mb-4",children:t.description}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mt-4 mb-4",children:t.tools.map(e=>(0,s.jsx)("span",{className:"px-2 py-1 bg-gray-100 rounded-full text-xs",children:e},e))}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[t.demo&&(0,s.jsx)(m,{asChild:!0,children:(0,s.jsxs)("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(h.Z,{className:"w-4 h-4 mr-2"}),"Live Demo"]})}),t.repo&&(0,s.jsx)(m,{variant:"outline",asChild:!0,children:(0,s.jsxs)("a",{href:t.repo,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(x.Z,{className:"w-4 h-4 mr-2"}),"GitHub Repo"]})})]})]},t.title))}),c>1&&(0,s.jsxs)("div",{className:"mt-8 flex justify-center items-center space-x-4",children:[(0,s.jsx)(m,{onClick:()=>{n(e=>Math.max(e-1,1))},disabled:1===a,variant:"outline",size:"sm","aria-label":"Previous page",children:(0,s.jsx)(u.Z,{className:"h-4 w-4"})}),(0,s.jsxs)("span",{className:"text-sm font-medium",children:["Page ",a," of ",c]}),(0,s.jsx)(m,{onClick:()=>{n(e=>Math.min(e+1,c))},disabled:a===c,variant:"outline",size:"sm","aria-label":"Next page",children:(0,s.jsx)(g.Z,{className:"h-4 w-4"})})]})]})})}},3322:function(e,t,a){"use strict";a.d(t,{default:function(){return F}});var s=a(7437),r=a(2265),l=a(3647),i=a(9202),n=a(9291),o=a(2805),c=a(8919),d=a(91),m=a(6076),h=a(8124),x=a(464),u=a(1596),g=a(4925),p=a(4423),f=a(5805),j=a(3420),b=a(6900),y=a(8896),N=a(3247),w=a(2800),v=a(4822),k=a(3417),S=a(5005),P=a(6439),A=a(525),C=a(1769),Z=a(7410),R=a(370),M=a(6818),I=a(3327),D=a(7806),L=a(8768),z=a(7168),_=a(4935),U=a(2909);let Q={"Web Development":{skills:["React","Next.js","JavaScript","HTML","CSS","RESTful API","SQL","NoSQL","CI/CD","Software System Design"],color:"bg-blue-500"},"AI/ML":{skills:["Python","PyTorch","Supervised Learning","Unsupervised Learning","Reinforcement Learning","Data-Analysis","Data-Visualization"],color:"bg-green-500"},Solutions:{skills:["Qualification Frameworks","Prospecting & Lead Generation","Sales Process","Retention & Renewal","Account Management","Solution Proof-of-Concept","Technical Discovery"," Technical Customer Support"],color:"bg-yellow-500"},"UX/UI Design":{skills:["Figma UI Design","Wireframe & Prototype","User Research & Analysis","Information Architecture"],color:"bg-purple-500"},"Product Management":{skills:["Agile/Scrum","Requirement Docs","Decision Making & Prioritization","Product Roadmap & Strategy"],color:"bg-red-500"},"Product Marketing":{skills:["Messaging & Positioning","Go-to-Market Strategy","Market Competitive Analysis","Content Marketing","Competitive Battlecards"],color:"bg-teal-500"}},W={React:(0,s.jsx)(U.QHr,{className:"w-4 h-4 mr-2"}),JavaScript:(0,s.jsx)(U.vl3,{className:"w-4 h-4 mr-2"}),"Next.js":(0,s.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),HTML:(0,s.jsx)(n.Z,{className:"w-4 h-4 mr-2"}),CSS:(0,s.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"RESTful API":(0,s.jsx)(c.Z,{className:"w-4 h-4 mr-2"}),SQL:(0,s.jsx)(d.Z,{className:"w-4 h-4 mr-2"}),NoSQL:(0,s.jsx)(d.Z,{className:"w-4 h-4 mr-2"}),"CI/CD":(0,s.jsx)(m.Z,{className:"w-4 h-4 mr-2"}),"Software System Design":(0,s.jsx)(h.Z,{className:"w-4 h-4 mr-2"}),Python:(0,s.jsx)(U.Cul,{className:"w-4 h-4 mr-2"}),PyTorch:(0,s.jsx)(U.YCd,{className:"w-4 h-4 mr-2"}),TensorFlow:(0,s.jsx)(U.CCE,{className:"w-4 h-4 mr-2"}),"Scikit-learn":(0,s.jsx)(U.ldd,{className:"w-4 h-4 mr-2"}),"Data-Analysis":(0,s.jsx)(x.Z,{className:"w-4 h-4 mr-2"}),"Data-Visualization":(0,s.jsx)(u.Z,{className:"w-4 h-4 mr-2"}),"Figma UI Design":(0,s.jsx)(g.Z,{className:"w-4 h-4 mr-2"}),"Wireframe & Prototype":(0,s.jsx)(p.Z,{className:"w-4 h-4 mr-2"}),"User Research & Analysis":(0,s.jsx)(f.Z,{className:"w-4 h-4 mr-2"}),"Information Architecture":(0,s.jsx)(j.Z,{className:"w-4 h-4 mr-2"}),"Agile/Scrum":(0,s.jsx)(b.Z,{className:"w-4 h-4 mr-2"}),"Product Roadmap & Strategy":(0,s.jsx)(y.Z,{className:"w-4 h-4 mr-2"}),"Market Competitive Analysis":(0,s.jsx)(N.Z,{className:"w-4 h-4 mr-2"}),"Technical Discovery":(0,s.jsx)(w.Z,{className:"w-4 h-4 mr-2"}),"Solution Proof-of-Concept":(0,s.jsx)(v.Z,{className:"w-4 h-4 mr-2"}),"Technical Customer Support":(0,s.jsx)(k.Z,{className:"w-4 h-4 mr-2"}),"Account Management":(0,s.jsx)(S.Z,{className:"w-4 h-4 mr-2"}),"Messaging & Positioning":(0,s.jsx)(P.Z,{className:"w-4 h-4 mr-2"}),"Go-to-Market Strategy":(0,s.jsx)(A.Z,{className:"w-4 h-4 mr-2"}),"Content Marketing":(0,s.jsx)(C.Z,{className:"w-4 h-4 mr-2"}),"Competitive Battlecards":(0,s.jsx)(Z.Z,{className:"w-4 h-4 mr-2"}),"Market Research":(0,s.jsx)(R.Z,{className:"w-4 h-4 mr-2"}),"Sales Analytics":(0,s.jsx)(M.Z,{className:"w-4 h-4 mr-2"}),"Qualification Frameworks":(0,s.jsx)(I.Z,{className:"w-4 h-4 mr-2"}),"Prospecting & Lead Generation":(0,s.jsx)(D.Z,{className:"w-4 h-4 mr-2"}),"Sales Process":(0,s.jsx)(L.Z,{className:"w-4 h-4 mr-2"}),"Retention & Renewal":(0,s.jsx)(z.Z,{className:"w-4 h-4 mr-2"})};function F(){var e;let[t,a]=(0,r.useState)("All");return(0,s.jsx)("section",{className:"py-20 px-4",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-8 text-center",children:"Skills"}),(0,s.jsx)("div",{className:"mb-8 w-64 mx-auto",children:(0,s.jsxs)(l.Ph,{onValueChange:e=>a(e),children:[(0,s.jsx)(l.i4,{children:(0,s.jsx)(l.ki,{placeholder:"Select a category"})}),(0,s.jsxs)(l.Bw,{children:[(0,s.jsx)(l.Ql,{value:"All",children:"All Skills"}),Object.keys(Q).map(e=>(0,s.jsx)(l.Ql,{value:e,children:e},e))]})]})}),"All"===t?(0,s.jsx)("div",{className:"space-y-8",children:Object.entries(Q).map(e=>{let[t,{skills:a,color:r}]=e;return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,s.jsx)("div",{className:"md:w-1/4 flex items-center justify-center",children:(0,s.jsx)("span",{className:"px-4 py-2 rounded-lg ".concat(r," text-white font-semibold"),children:t})}),(0,s.jsx)("div",{className:"md:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:a.map(e=>(0,s.jsxs)("div",{className:"p-4 rounded-lg shadow-md text-center ".concat(r," flex items-center justify-center"),children:[W[e]||(0,s.jsx)(_.Z,{className:"w-4 h-4 mr-2"}),e]},e))})]},t)})}):(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:null===(e=Q[t])||void 0===e?void 0:e.skills.map(e=>(0,s.jsxs)("div",{className:"p-4 rounded-lg shadow-md text-center ".concat(Q[t].color," flex items-center justify-center"),children:[W[e]||(0,s.jsx)(_.Z,{className:"w-4 h-4 mr-2"}),e]},e))})]})})}},3647:function(e,t,a){"use strict";a.d(t,{Bw:function(){return g},Ph:function(){return d},Ql:function(){return p},i4:function(){return h},ki:function(){return m}});var s=a(7437),r=a(2265),l=a(3664),i=a(875),n=a(2135),o=a(401),c=a(4508);let d=l.fC;l.ZA;let m=l.B4,h=r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(l.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...n,children:[r,(0,s.jsx)(l.JO,{asChild:!0,children:(0,s.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});h.displayName=l.xz.displayName;let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(n.Z,{className:"h-4 w-4"})})});x.displayName=l.u_.displayName;let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});u.displayName=l.$G.displayName;let g=r.forwardRef((e,t)=>{let{className:a,children:r,position:i="popper",...n}=e;return(0,s.jsx)(l.h_,{children:(0,s.jsxs)(l.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:i,...n,children:[(0,s.jsx)(x,{}),(0,s.jsx)(l.l_,{className:(0,c.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(u,{})]})})});g.displayName=l.VY.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...r})}).displayName=l.__.displayName;let p=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(l.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.wU,{children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(l.eT,{children:r})]})});p.displayName=l.ck.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=l.Z0.displayName},1726:function(e,t,a){"use strict";a.d(t,{WavyBackground:function(){return n}});var s=a(7437),r=a(4508),l=a(2265),i=a(7610);let n=e=>{let t,a,n,o,c,d,m,{children:h,className:x,containerClassName:u,colors:g,waveWidth:p,backgroundFill:f,blur:j=10,speed:b="fast",waveOpacity:y=.5,...N}=e,w=(0,i.zz)(),v=(0,l.useRef)(null),k=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},S=()=>{t=(d=v.current.getContext("2d")).canvas.width=window.innerWidth,a=d.canvas.height=window.innerHeight,d.filter="blur(".concat(j,"px)"),n=0,window.onresize=function(){t=d.canvas.width=window.innerWidth,a=d.canvas.height=window.innerHeight,d.filter="blur(".concat(j,"px)")},C()},P=null!=g?g:["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"],A=e=>{for(n+=k(),o=0;o<e;o++){for(d.beginPath(),d.lineWidth=p||50,d.strokeStyle=P[o%P.length],c=0;c<t;c+=5){var s=100*w(c/800,.3*o,n);d.lineTo(c,s+.5*a)}d.stroke(),d.closePath()}},C=()=>{d.fillStyle=f||"black",d.globalAlpha=y||.5,d.fillRect(0,0,t,a),A(5),m=requestAnimationFrame(C)};(0,l.useEffect)(()=>(S(),()=>{cancelAnimationFrame(m)}),[]);let[Z,R]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{R(navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))},[]),(0,s.jsxs)("div",{className:(0,r.cn)("h-screen flex flex-col items-center justify-center",u),children:[(0,s.jsx)("canvas",{className:"absolute inset-0 z-0",ref:v,id:"canvas",style:{...Z?{filter:"blur(".concat(j,"px)")}:{}}}),(0,s.jsx)("div",{className:(0,r.cn)("relative z-10",x),...N,children:h})]})}},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var s=a(1994),r=a(3335);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}},function(e){e.O(0,[957,972,337,971,117,744],function(){return e(e.s=4530)}),_N_E=e.O()}]);