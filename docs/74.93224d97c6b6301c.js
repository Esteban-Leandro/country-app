"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[74],{74:(dt,T,s)=>{s.r(T),s.d(T,{CountriesModule:()=>pt});var u=s(895),P=s(466),d=s(733),t=s(256),A=s(262),_=s(843),j=s(4),O=s(727);class F extends O.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const y={setInterval(n,o,...e){const{delegate:i}=y;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=y;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var J=s(737);const U={now:()=>(U.delegate||Date).now(),delegate:void 0};class g{constructor(o,e=g.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}g.now=U.now;const S=new class N extends g{constructor(o,e=g.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}(class V extends F{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var i;if(this.closed)return this;this.state=o;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(a,this.id,e),this}requestAsyncId(o,e,i=0){return y.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&y.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let r,i=!1;try{this.work(o)}catch(a){i=!0,r=a||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,J.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var q=s(482),M=s(421),E=s(888),w=s(403),L=s(672);const D=(0,E.d)(n=>function(e=null){n(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=e});function k(n){throw new D(n)}var m=s(505),Y=s(529);let f=(()=>{class n{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromSessionStorage()}saveToSessionStorage(){sessionStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromSessionStorage(){sessionStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(sessionStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,A.K)(i=>(0,_._)(()=>i)))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,j.U)(i=>i[0]),(0,A.K)(i=>(0,_._)(()=>i)),function Q(n,o){const{first:e,each:i,with:r=k,scheduler:a=o??S,meta:p=null}=function R(n){return n instanceof Date&&!isNaN(n)}(n)?{first:n}:"number"==typeof n?{each:n}:n;if(null==e&&null==i)throw new TypeError("No timeout provided.");return(0,q.e)((Z,h)=>{let l,c,C=null,b=0;const I=x=>{c=(0,L.f)(h,a,()=>{try{l.unsubscribe(),(0,M.Xf)(r({meta:p,lastValue:C,seen:b})).subscribe(h)}catch(ht){h.error(ht)}},x)};l=Z.subscribe((0,w.x)(h,x=>{c?.unsubscribe(),b++,h.next(C=x),i>0&&I(i)},void 0,void 0,()=>{c?.closed||c?.unsubscribe(),C=null})),!b&&I(null!=e?"number"==typeof e?e:+e-a.now():i)})}(500))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,m.b)(r=>this.cacheStore.byCapital={term:e,countries:r}),(0,m.b)(()=>this.saveToSessionStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,m.b)(r=>this.cacheStore.byCountries={term:e,countries:r}),(0,m.b)(()=>this.saveToSessionStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,m.b)(r=>this.cacheStore.byRegion={region:e,countries:r}),(0,m.b)(()=>this.saveToSessionStorage()))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Y.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["sshared-loading-spinnner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();var K=s(579);let B=(()=>{class n{constructor(){this.debouncer=new K.x,this.initialValue="",this.placeholder="",this.onValue=new t.vpe,this.onDebouncer=new t.vpe}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function X(n,o=S){return(0,q.e)((e,i)=>{let r=null,a=null,p=null;const Z=()=>{if(r){r.unsubscribe(),r=null;const l=a;a=null,i.next(l)}};function h(){const l=p+n,c=o.now();if(c<l)return r=this.schedule(void 0,l-c),void i.add(r);Z()}e.subscribe((0,w.x)(i,l=>{a=l,p=o.now(),r||(r=o.schedule(h,n),i.add(r))},()=>{Z(),i.complete()},void 0,()=>{a=r=null}))})}(300)).subscribe(e=>this.onDebouncer.emit(e))}ngOnDestroy(){this.debouncerSubscription.unsubscribe()}emitValue(e){this.onValue.emit(e.toLowerCase())}onKeyPress(e){this.debouncer.next(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{initialValue:"initialValue",placeholder:"placeholder"},outputs:{onValue:"onValue",onDebouncer:"onDebouncer"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(e,i){if(1&e){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(r);const p=t.MAs(1);return t.KtG(i.onKeyPress(p.value))}),t.qZA()}2&e&&t.Q6J("placeholder",i.placeholder)("value",i.initialValue)},encapsulation:2}),n})();function z(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," No hay pa\xedses que mostrar.\n"),t.qZA())}const H=function(n){return["/countries/by",n]};function G(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Ver m\xe1s"),t.qZA()()()),2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.flag),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.name.common),t.xp6(2),t.Oqu(e.name.common),t.xp6(2),t.Oqu(e.capital),t.xp6(2),t.Oqu(t.lcZ(13,8,e.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(10,H,e.cca2))}}function W(n,o){if(1&n&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,G,17,12,"tr",4),t.qZA()()),2&n){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let v=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],["routerLinkActive","router-link-active",3,"routerLink"]],template:function(e,i){if(1&e&&(t.YNc(0,z,2,0,"div",0),t.YNc(1,W,18,1,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",0===i.countries.length)("ngIfElse",r)}},dependencies:[u.sg,u.O5,d.rH,d.Od,u.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),n})();function tt(n,o){1&n&&t._UZ(0,"sshared-loading-spinnner")}let et=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.subscriptions=[],this.isLoading=!1}ngOnInit(){const e=this.countriesService.cacheStore.byCapital;this.countries=e.countries,this.initialValue=e.term}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(i=>{this.countries=i,this.isLoading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Busqueda por capital...",3,"initialValue","onDebouncer"],[4,"ngIf"],[3,"countries"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebouncer",function(a){return i.searchByCapital(a)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,tt,1,0,"sshared-loading-spinnner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",i.initialValue),t.xp6(4),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("countries",i.countries))},dependencies:[u.O5,$,B,v],encapsulation:2}),n})(),nt=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.subscriptions=[]}ngOnInit(){const e=this.countriesService.cacheStore.byCountries;this.countries=e.countries,this.initialValue=e.term}searchByCountry(e){this.countriesService.searchCountry(e).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Busqueda por pais...",3,"initialValue","onDebouncer"],[3,"countries"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebouncer",function(a){return i.searchByCountry(a)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",i.initialValue),t.xp6(4),t.Q6J("countries",i.countries))},dependencies:[B,v],encapsulation:2}),n})();const ot=function(n){return{"btn-outline-primary":n}};function it(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.searchByRegion(a))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(2,ot,i.selectedRegion===e)),t.xp6(1),t.hij(" ",e," ")}}let rt=(()=>{class n{constructor(e){this.countriesService=e,this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.countries=[],this.subscriptions=[]}ngOnInit(){const e=this.countriesService.cacheStore.byRegion;this.countries=e.countries,this.selectedRegion=e.region}searchByRegion(e){this.selectedRegion=e,this.countriesService.searchRegion(e).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["type","button","class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],["type","button",1,"btn","mx-2",3,"ngClass","click"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,it,2,4,"button",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",3),t._UZ(8,"hr")(9,"countries-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",i.regions),t.xp6(4),t.Q6J("countries",i.countries))},dependencies:[u.mk,u.sg,v],encapsulation:2}),n})();var st=s(900);function at(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor. "),t.qZA())}function ct(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informaci\xf3n"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19,"Poblaci\xf3n:"),t.qZA(),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"li",9)(23,"strong"),t._uU(24,"C\xf3digo:"),t.qZA(),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",10)(27,"div",7)(28,"h3"),t._uU(29,"Traducciones"),t.qZA(),t.TgZ(30,"div",11)(31,"span",12),t._uU(32),t.qZA(),t.TgZ(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA(),t.TgZ(49,"span",12),t._uU(50),t.qZA(),t.TgZ(51,"span",12),t._uU(52),t.qZA(),t.TgZ(53,"span",12),t._uU(54),t.qZA(),t.TgZ(55,"span",12),t._uU(56),t.qZA(),t.TgZ(57,"span",12),t._uU(58),t.qZA(),t.TgZ(59,"span",12),t._uU(60),t.qZA(),t.TgZ(61,"span",12),t._uU(62),t.qZA(),t.TgZ(63,"span",12),t._uU(64),t.qZA(),t.TgZ(65,"span",12),t._uU(66),t.qZA(),t.TgZ(67,"span",12),t._uU(68),t.qZA(),t.TgZ(69,"span",12),t._uU(70),t.qZA(),t.TgZ(71,"span",12),t._uU(72),t.qZA(),t.TgZ(73,"span",12),t._uU(74),t.qZA(),t.TgZ(75,"span",12),t._uU(76),t.qZA(),t.TgZ(77,"span",12),t._uU(78),t.qZA(),t.TgZ(79,"span",12),t._uU(80),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.country.name.common),t.xp6(6),t.Q6J("src",e.country.flags.svg,t.LSH)("alt",e.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(21,30,e.country.population)," "),t.xp6(5),t.hij(" ",e.country.cca3," "),t.xp6(7),t.hij(" ",e.country.translations.ara.common," "),t.xp6(2),t.hij(" ",e.country.translations.bre.common," "),t.xp6(2),t.hij(" ",e.country.translations.ces.common," "),t.xp6(2),t.hij(" ",e.country.translations.cym.common," "),t.xp6(2),t.hij(" ",e.country.translations.deu.common," "),t.xp6(2),t.hij(" ",e.country.translations.est.common," "),t.xp6(2),t.hij(" ",e.country.translations.fin.common," "),t.xp6(2),t.hij(" ",e.country.translations.fra.common," "),t.xp6(2),t.hij(" ",e.country.translations.hrv.common," "),t.xp6(2),t.hij(" ",e.country.translations.hun.common," "),t.xp6(2),t.hij(" ",e.country.translations.ita.common," "),t.xp6(2),t.hij(" ",e.country.translations.jpn.common," "),t.xp6(2),t.hij(" ",e.country.translations.kor.common," "),t.xp6(2),t.hij(" ",e.country.translations.nld.common," "),t.xp6(2),t.hij(" ",e.country.translations.per.common," "),t.xp6(2),t.hij(" ",e.country.translations.pol.common," "),t.xp6(2),t.hij(" ",e.country.translations.por.common," "),t.xp6(2),t.hij(" ",e.country.translations.rus.common," "),t.xp6(2),t.hij(" ",e.country.translations.slk.common," "),t.xp6(2),t.hij(" ",e.country.translations.spa.common," "),t.xp6(2),t.hij(" ",e.country.translations.srp.common," "),t.xp6(2),t.hij(" ",e.country.translations.swe.common," "),t.xp6(2),t.hij(" ",e.country.translations.tur.common," "),t.xp6(2),t.hij(" ",e.country.translations.urd.common," "),t.xp6(2),t.hij(" ",e.country.translations.zho.common," ")}}const ut=[{path:"by-capital",component:et},{path:"by-country",component:nt},{path:"by-region",component:rt},{path:"by/:id",component:(()=>{class n{constructor(e,i,r){this.router=e,this.route=i,this.countriesService=r}ngOnInit(){this.route.params.pipe((0,st.w)(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>{this.country=e},()=>this.router.navigateByUrl(""))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(e,i){if(1&e&&(t.YNc(0,at,2,0,"ng-template",null,0,t.W1O),t.YNc(2,ct,81,32,"div",1)),2&e){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",i.country)("ngIfElse",r)}},dependencies:[u.O5,u.JJ],encapsulation:2}),n})()},{path:"**",redirectTo:"by-capital"}];let lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(ut),d.Bz]}),n})(),pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,lt,P.m]}),n})()}}]);