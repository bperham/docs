"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4981:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return w},default:function(){return M},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return f}});var n=a(3117),o=a(102),l=a(7294),i=a(3905),r=a(2389),s=a(9575),d=a(6010),u="tabItem_LplD";function c(e){var t,a,o,i=e.lazy,r=e.block,c=e.defaultValue,p=e.values,m=e.groupId,k=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.UB)(),f=v.tabGroupChoices,N=v.setTabGroupChoices,b=(0,l.useState)(y),M=b[0],T=b[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=f[m];null!=P&&P!==M&&h.some((function(e){return e.value===P}))&&T(P)}var O=function(e){var t=e.currentTarget,a=C.indexOf(t),n=h[a].value;n!==M&&(x(t),T(n),null!=m&&N(m,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;a=C[o]||C[C.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":r},k)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,d.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function p(e){var t=(0,r.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}var m,k=a(4996),g=["components"],h={id:"suggested-wallets",title:"Suggested Wallets",sidebar_label:"Suggested Wallets",slug:"/suggested-wallet"},w="Suggested Wallets",y={unversionedId:"project/suggested-wallets",id:"project/suggested-wallets",title:"Suggested Wallets",description:"As we are still in testnet, we connecting a MetaMask wallet with WeatherXM. That is because by following",source:"@site/docs/project/suggested-wallets.mdx",sourceDirName:"project",slug:"/suggested-wallet",permalink:"/suggested-wallet",editUrl:"https://github.com/weatherxm/docs/docs/project/suggested-wallets.mdx",tags:[],version:"current",frontMatter:{id:"suggested-wallets",title:"Suggested Wallets",sidebar_label:"Suggested Wallets",slug:"/suggested-wallet"},sidebar:"docs",previous:{title:"Introduction",permalink:"/project"},next:{title:"Reward Algorithm",permalink:"/reward-algorithm"}},v={},f=[{value:"MetaMask",id:"metamask",level:2},{value:"Installing and setting up MetaMask",id:"installing-and-setting-up-metamask",level:3},{value:"Add Polygon network",id:"add-polygon-network",level:2},{value:"Using Polygonscan",id:"using-polygonscan",level:3},{value:"Add the Polygon network manually",id:"add-the-polygon-network-manually",level:3},{value:"Add WXM in MetaMask",id:"add-wxm-in-metamask",level:2}],N=(m="TabItem",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:f};function M(e){var t=e.components,a=(0,o.Z)(e,g);return(0,i.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"suggested-wallets"},"Suggested Wallets"),(0,i.kt)("p",null,"As we are still in testnet, we connecting a ",(0,i.kt)("strong",{parentName:"p"},"MetaMask")," wallet with WeatherXM. That is because by following\nour guide is fairly easy to use the Polygon's testnet on MetaMask and add a custom token (in our case, the WXM)."),(0,i.kt)("h2",{id:"metamask"},"MetaMask"),(0,i.kt)("p",null,"MetaMask is a crypto wallet app and browser extension."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Download this wallet only from the ",(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/download/"},"official MetaMask website"),"!"))),(0,i.kt)("h3",{id:"installing-and-setting-up-metamask"},"Installing and setting up MetaMask"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"MetaMask is available to download and install on Chrome, iOS, or Android through the ",(0,i.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"MetaMask website"),".\nAlways check if you are using the official website to make sure you\u2019re downloading the real MetaMask extension."),(0,i.kt)("li",{parentName:"ol"},"After downloading and installing the extension, you\u2019ll be greeted with the MetaMask welcome page. Click ","[Get Started]"," to begin."),(0,i.kt)("li",{parentName:"ol"},"If you\u2019re creating a new wallet, click the ","[Create a Wallet]"," button. You can also import an existing wallet using its seed phrase with the ","[Import wallet]"," option."),(0,i.kt)("li",{parentName:"ol"},"MetaMask will ask you if you\u2019d like to share anonymous usage data with them to help improve the extension. Accepting or refusing this will not affect your MetaMask usage."),(0,i.kt)("li",{parentName:"ol"},"Choose a secure password to log in to your wallet from your browser. Note that this is not your seed phrase. The password is a security measure to prevent anyone using your device from accessing your wallet.\nIf you forget your password, you can always access your crypto with your seed phrase."),(0,i.kt)("li",{parentName:"ol"},"After choosing your password, MetaMask will present you with information regarding your wallet\u2019s seed phrase. Make sure to read through it if you aren\u2019t familiar with how a crypto wallet works."),(0,i.kt)("li",{parentName:"ol"},"You\u2019ll now be presented with your seed phrase. Click the lock to view the words and take note of them in the correct order. Keep the phrase in a secure place (preferably offline) and never share it with anyone.\nThis string of words is the final backup of your wallet and its contents. Click ","[Next]"," to continue."),(0,i.kt)("li",{parentName:"ol"},"You\u2019ll now have to repeat your seed phrase by selecting the words at the bottom of the screen in the right order. Click ","[Confirm]"," once this is complete."),(0,i.kt)("li",{parentName:"ol"},"Your MetaMask wallet will now be set up ready to use. Click ","[All Done]"," to view your wallet.")),(0,i.kt)("h2",{id:"add-polygon-network"},"Add Polygon network"),(0,i.kt)("p",null,"Adding Polygon support to MetaMask is a mandatory step if you want to add the WXM token, view the activity and do some transactions.\nMake sure you follow our step-by-step guide below for adding Polygon Network to MetaMask."),(0,i.kt)("p",null,"We will provide guidance for both Polygon Mainnet and Mumbai Testnet but\nas we are currently in testnet, ",(0,i.kt)("strong",{parentName:"p"},"you need to add the Mumbai Testnet network.")),(0,i.kt)("p",null,"There are two ways to do it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/suggested-wallet#using-polygonscan"},"Using Polygonscan")," ",(0,i.kt)("strong",{parentName:"li"},"(Only for Desktop with MetaMask browser extension already installed)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/suggested-wallet#add-the-polygon-network-manually"},"Add the Polygon network manually"))),(0,i.kt)("h3",{id:"using-polygonscan"},"Using Polygonscan"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure you have already installed ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"Metamask")),"!"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"This solution works only in Desktop with the MetaMask browser extension already installed.")))),(0,i.kt)(p,{defaultValue:"mumbai",values:[{label:"Polygon-Mainnet",value:"mainnet"},{label:"Mumbai-Testnet",value:"mumbai"}],mdxType:"Tabs"},(0,i.kt)(N,{value:"mainnet",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is just for informational purposes. At this stage we are currently in testnet so ",(0,i.kt)("strong",{parentName:"p"},"you need to add the Mumbai Testnet network.")))),(0,i.kt)("p",null,"Please follow the steps to add Polygon\u2019s Mainnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://polygonscan.com/"},"polygonscan.com")),(0,i.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Polygon Network"))),(0,i.kt)("img",{class:"marginTopBottomNormal",src:(0,k.Z)("img/project/suggested-wallets/polygonscan-mainnet.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you click the button you will see a Metamask Notification, now click on ",(0,i.kt)("strong",{parentName:"li"},"Approve"),".\nYou will be directly switched to Polygon\u2019s Mainnet now in the network dropdown list. You can now close the dialog.")),(0,i.kt)("img",{class:"marginTopBottomNormal",src:(0,k.Z)("img/project/suggested-wallets/mainnet-addnetwork.png")})),(0,i.kt)(N,{value:"mumbai",mdxType:"TabItem"},(0,i.kt)("p",null,"Please follow the steps to add Polygon's Mumbai-Testnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/"},"mumbai.polygonscan.com")),(0,i.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Mumbai Network"))),(0,i.kt)("img",{class:"marginTopBottomNormal",src:(0,k.Z)("img/project/suggested-wallets/polygonscan-mumbai.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you click the button you will see a Metamask Notification, now click on ",(0,i.kt)("strong",{parentName:"li"},"Approve"),".\nYou will be directly switched to Polygon\u2019s Mainnet now in the network dropdown list. You can now close the dialog.")),(0,i.kt)("img",{class:"marginTopBottomNormal",src:(0,k.Z)("img/project/suggested-wallets/mumbai-addnetwork.png")}))),(0,i.kt)("p",null,"If you are facing any issue, ",(0,i.kt)("strong",{parentName:"p"},"Add the Network Manually(steps given below)")),(0,i.kt)("h3",{id:"add-the-polygon-network-manually"},"Add the Polygon network manually"),(0,i.kt)(p,{defaultValue:"mumbai",values:[{label:"Polygon-Mainnet",value:"mainnet"},{label:"Mumbai-Testnet",value:"mumbai"}],mdxType:"Tabs"},(0,i.kt)(N,{value:"mainnet",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is just for informational purposes. At this stage we are currently in testnet so ",(0,i.kt)("strong",{parentName:"p"},"you need to add the Mumbai Testnet network.")))),(0,i.kt)("p",null,"To add Polygon\u2019s Mainnet, click on the Network selection dropdown and then click on Custom RPC."),(0,i.kt)("img",{src:(0,k.Z)("img/project/suggested-wallets/select-network.png")}),(0,i.kt)("p",null,"It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"Polygon Mainnet")," in the Network Name field, URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://polygon-rpc.com/")," in the New RPC URL field, ",(0,i.kt)("inlineCode",{parentName:"p"},"137")," in Chain ID field, ",(0,i.kt)("inlineCode",{parentName:"p"},"MATIC")," in Currency Symbol field and ",(0,i.kt)("inlineCode",{parentName:"p"},"https://polygonscan.com/")," in Block Explorer URL field."),(0,i.kt)("img",{src:(0,k.Z)("img/project/suggested-wallets/metamask-settings-mainnet.png")}),(0,i.kt)("p",null,"Once you\u2019ve added the information click on Save. You will be directly switched to Polygon\u2019s Mainnet now in the network dropdown list. You can now close the dialog.")),(0,i.kt)(N,{value:"mumbai",mdxType:"TabItem"},"To add Polygon's Mumbai-Testnet, click on the Network selection dropdown and then click on Custom RPC.",(0,i.kt)("img",{src:(0,k.Z)("img/project/suggested-wallets/select-network.png")}),(0,i.kt)("p",null,"It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"Matic Mumbai")," in the Network Name field, URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://rpc-mumbai.maticvigil.com/")," in the New RPC URL field, ",(0,i.kt)("inlineCode",{parentName:"p"},"80001")," in Chain ID field, ",(0,i.kt)("inlineCode",{parentName:"p"},"MATIC")," in Currency Symbol field and ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mumbai.polygonscan.com/")," in Block Explorer URL field."),(0,i.kt)("img",{src:(0,k.Z)("img/project/suggested-wallets/metamask-settings-mumbai.png")}),(0,i.kt)("p",null,"Once you\u2019ve added the URL in the New Network field, click on Save. You will be directly switched to Polygon\u2019s Mumbai-Testnet now in the network dropdown list. You can now close the dialog."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You have successfully added Polygon Network to your Metamask!")),(0,i.kt)("h2",{id:"add-wxm-in-metamask"},"Add WXM in MetaMask"),(0,i.kt)("p",null,"For the WXM token to appear on the wallet UI, you will need to add them manually.\nNote that your wallet can still receive tokens that haven\u2019t been imported."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMPORTANT NOTE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure you have already added the ",(0,i.kt)("strong",{parentName:"p"},"Mumbai-Testnet")," and you are connected to it by following the guide above!"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, you will need the following details of the WXM token in order to add it:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Token Contract Address:")," 0xeCbbbF304fdf91cdDDA6C6643ED1300A552b691A"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Token Symbol:")," WXM"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Token Decimal:")," 18")))),(0,i.kt)("p",null,"You can verify those details on ",(0,i.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/token/0xecbbbf304fdf91cddda6c6643ed1300a552b691a"},"PolygonScan"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"On MetaMask and click ",(0,i.kt)("strong",{parentName:"li"},"[Import tokens]"),".")),(0,i.kt)("img",{src:(0,k.Z)("img/project/suggested-wallets/metamask-import-tokens.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy in the WXM\u2019s contract address and MetaMask should automatically fill in the rest of the details. If not, add them manually. To finish, click ",(0,i.kt)("strong",{parentName:"p"},"[Add Custom Token]"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"[Import Tokens]"),"."))),(0,i.kt)("p",null,"You have now successfully added the WXM token in your MetaMask wallet."))}M.isMDXComponent=!0}}]);