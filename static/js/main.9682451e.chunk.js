(this["webpackJsonpfrau-rx"]=this["webpackJsonpfrau-rx"]||[]).push([[0],{149:function(e){e.exports=JSON.parse('{"caperesult":"[center][url=http://www1.flightrising.com/forums/art/2335577]Please click here to go to the CAPE thread![/url][br][br]Keywords selected: ","gaspresult":"[center][url=http://www1.flightrising.com/forums/skin/2480522]Please click here to go to the GASP thread![/url][br][br]Keywords selected: ","result1":"[/center][br][br][size=1]","result2":"[/size]"}')},181:function(e,t,a){e.exports=a(332)},186:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},208:function(e,t,a){},330:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),l=a.n(s),c=(a(186),a(145)),o=a(146),u=a(168),i=a(147),p=a(169),d=a(50),h=(a(189),a(190),a(40)),m=(a(191),a(192),a(148)),f=a.n(m),g=a(15),v=a.n(g);var b=function(e){var t=[];return v.a.forEach(e.ruleset,(function(e,a){var n=r.a.createElement("span",{key:"rule"+a},f.a.toReact(e),r.a.createElement("br",null));return t.push(n)})),r.a.createElement("div",{className:"Rules"},t)},E=(a(208),a(149));function y(e){return E[e]}var j=a(150);var O=function(e){var t=Object(g.join)(Object(g.map)(e.list,(function(e){return"@"+e}))," "),a=Object(g.join)(e.keywords,", "),n=e.text+a+y("result1")+t+y("result2");return r.a.createElement("div",{className:"Results"},r.a.createElement(j.CopyToClipboard,{text:n},r.a.createElement("button",null,"Copy")),r.a.createElement("div",null,n))},k=a(345),w=a(344),S=a(343),C=a(333);function N(e){return new Set(e)}function I(e,t){return N(e[t].split(", "))}var x=function(e){var t,a,s,l,c,o,u=Object(n.useState)(null),i=Object(h.a)(u,2),p=i[0],d=i[1],m=Object(n.useState)(null),f=Object(h.a)(m,2),v=f[0],E=f[1],j=Object(n.useState)(!1),x=Object(h.a)(j,2),A=x[0],D=x[1],R=Object(n.useState)({keywords:{}}),G=Object(h.a)(R,2),K=G[0],B=G[1],W=!0,L=function(e,t){var a=t.value;return E(a)},P=function(e,t){var a=t.value,n=Object(g.clone)(K);n.keywords[a]?delete n.keywords[a]:n.keywords[a]=a,B(n)},M=[];if(e.strings&&e.sheet){W=!1;var U=e.sheet.filters;M=function(e){var t=[];return Object(g.map)(["rules","gasprulenote","gaspcredit","gaspincomplete","gaspthread","gaspqueue","duplicateremover","gasprule1","gasprule2","gasprule3","gasprule4","gasprule5","gasprule6","gasprule7","gasprule8"],(function(a){t.push(e[a])})),t}(e.strings.en);var q=(o=U.Breed,Object(g.map)(o,(function(e){return{key:e,value:e,text:e}}))),F=U.Type,Q=U.Keywords;t=r.a.createElement("div",{className:"BreedGenderDropdown"},r.a.createElement(k.a,{placeholder:e.strings.en.gaspbg,fluid:!0,selection:!0,options:q,onChange:function(e,t){var a=t.value;return d(a)}})),a=r.a.createElement(w.a,{className:"Type"},r.a.createElement("div",{className:"Label"},"What are you selling?"),r.a.createElement("div",{className:"RadioGroup"},Object(g.map)(F,(function(e){return r.a.createElement(S.a,{className:"Radio",key:e,label:e,name:"typeGroup",value:e,checked:v===e,onChange:L})})))),s=r.a.createElement(C.a,{className:"Resell",toggle:!0,label:"Are you reselling?",checked:A,onChange:function(e,t){t.value;return D(!A)}}),l=r.a.createElement("div",{className:"CheckboxWrapper"},r.a.createElement(w.a,{className:"Keywords CheckboxContainer"},Object(g.map)(Q,(function(e){return r.a.createElement(C.a,{className:"Checkbox",key:e,label:e,name:"keywordGroup",value:e,checked:K[e],onChange:P})}))))}var T=p&&v&&null!==A&&Object(g.keys)(K.keywords).length>0,Z=(r.a.createElement("div",null),r.a.createElement("div",null));return!W&&T&&(r.a.createElement("div",{className:"Refresh"},r.a.createElement("button",{onClick:e.refresh},"refresh data and clear search terms")),c=function(e,t,a,n,r){var s=N(Object(g.keys)(r)),l=Object(g.map)(Object(g.filter)(e,(function(e){var r=e.blacklist?e.blacklist.split(", "):[],l=e.whitelist.split(", ");return I(e,"type").has(a)&&I(e,"breed").has(t)&&Object(g.filter)(l,(function(e){return"no preference"===e||s.has(e)})).length>0&&!(n&&N(r).has("resell"))&&0===Object(g.filter)(r,(function(e){return s.has(e)})).length})),"user");return console.log(l),l}(e.sheet.users,p,v,A,K.keywords),Z=r.a.createElement(O,{className:"Results",visible:!0,text:y("gaspresult"),keywords:{},list:c})),r.a.createElement("div",{className:"Gasp"},r.a.createElement(b,{className:"Left Rules",ruleset:M}),r.a.createElement("div",{className:"Right"},r.a.createElement("div",{className:"GaspFormContainer"},t,s,a,l),Z))};a(330);var A=function(e){var t,a=Object(n.useState)({}),s=Object(h.a)(a,2),l=s[0],c=s[1];null!=l&&(c(null),t=Object(g.flatten)(Object.values(l)));var o=[];return e.strings&&(o=function(e){console.log(e);var t=[];return Object(g.map)(["rules","gasprulenote","capecredit","capeincomplete","capethread","capediscord","duplicateremover","caperule1","caperule2","caperule3","caperule4","caperule5","caperule6","caperule7"],(function(a){t.push(e[a])})),t}(e.strings.en)),r.a.createElement("div",{className:"Cape"},r.a.createElement(b,{ruleset:o}),r.a.createElement("div",{className:"cape-form-container"}),r.a.createElement(O,{visible:!0,text:y("caperesult"),keywords:t,list:[]}))},D={apiKey:"AIzaSyDjbBMTI_W6UAC1Bh1pcoxlZn3qKvENvKQ",discoverDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],capeSheetId:"11hQSIUxyRx9wSgvemEX7Abn5g1hytODVp8v2tcmJxWA",gaspSheetId:"1eX0iu8pFksHIqu66dFc3HjsGwLg6c8ZZ9Q-67MuAQPk",tlSheetId:"1nW8XSGGoMUOlD-OlPuy91BR_4n57ZkmESFgnqKRIL9Q",clientId:"461039101973-t8pg545k5n470tnr39g1t4mhtci3ih9q.apps.googleusercontent.com",spreadsheetId:"1KTArYwDWrn52fnc7B12KvjRb6nmcEaU6gXYehWfsZSo"},R=a(23);function G(e,t){return e(!1,t.result.error)}function K(e,t){Object(g.map)(e,(function(e){return t[e.shift()]=e}))}var B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).initClient=function(){R.a.client.init({apiKey:D.apiKey,discoveryDocs:D.discoveryDocs,clientId:D.clientId,scope:"https://www.googleapis.com/auth/spreadsheets.readonly"}).then((function(){e.loadData()}),(function(e){return console.log(e)}))},e.loadData=function(){var t;t=e.setGasp,R.a.client.load("sheets","v4",(function(){var e=R.a.client.sheets.spreadsheets.values,a={filters:{}};e.get({spreadsheetId:D.gaspSheetId,range:"all keywords!A1:c200",majorDimension:"COLUMNS"}).then((function(n){K(n.result.values,a.filters),e.get({spreadsheetId:D.gaspSheetId,range:"masterlist!A1:e"}).then((function(e){var n=e.result.values.shift();a.users=Object(g.map)(e.result.values,(function(e){var t={};return t[n[0]]=e[0],t[n[1]]=e[1],t[n[2]]=e[2],t[n[3]]=e[3],t[n[4]]=e[4],t})),t(a)}),(function(e){return G(t,e)}))}),(function(e){return G(t,e)}))})),function(e){R.a.client.load("sheets","v4",(function(){var t=R.a.client.sheets.spreadsheets.values,a={filters:{}};t.get({spreadsheetId:D.capeSheetId,range:"all keywords!A1:F100",majorDimension:"COLUMNS"}).then((function(n){K(n.result.values,a.filters),t.get({spreadsheetId:D.capeSheetId,range:"masterlist!A1:g"}).then((function(t){a.users=t.result.values,e(a)}),(function(t){return G(e,t)}))}),(function(t){return G(e,t)}))}))}(e.setCape),function(e){R.a.client.load("sheets","v4",(function(){var t=R.a.client.sheets.spreadsheets.values,a={};t.get({spreadsheetId:D.tlSheetId,range:"BBCode!A1:8"}).then((function(t){var n=(t=t.result.values).shift();Object(g.map)(t,(function(e){var t=e[2].toLowerCase();a[t]={},Object(g.forEach)(e,(function(e,r){a[t][n[r]]=e}))})),e(a)}),(function(t){return G(e,t)}))}))}(e.setStrings)},e.setGasp=function(t,a){console.log(a),a?console.log(a):e.setState({gasp:t})},e.setCape=function(t,a){a?console.log(a):e.setState({cape:t})},e.setStrings=function(t,a){a?console.log(a):e.setState({strings:t})},e.state={gasp:null,cape:null,strings:null},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){R.a.load("client",this.initClient)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.d,null,r.a.createElement(d.b,null,r.a.createElement(d.a,null,"GASP")),r.a.createElement(d.c,null,r.a.createElement(x,{refresh:this.loadData,sheet:this.state.gasp,strings:this.state.strings})),r.a.createElement(d.c,null,r.a.createElement(A,{sheet:this.state.cape,strings:this.state.strings}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[181,1,2]]]);
//# sourceMappingURL=main.9682451e.chunk.js.map