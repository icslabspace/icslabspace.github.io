// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.app');
goog.require('cljs.core');
goog.require('intolambda.dom_utils');
goog.require('intolambda.footer');
goog.require('intolambda.header');
goog.require('cljsjs.material');
goog.require('reagent.core');
goog.require('intolambda.socials');
goog.require('intolambda.data');
goog.require('intolambda.http_utils');
goog.require('intolambda.sections');
goog.require('intolambda.state');
intolambda.app.mdl = (function intolambda$app$mdl(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10575 = arguments.length;
var i__7514__auto___10576 = (0);
while(true){
if((i__7514__auto___10576 < len__7513__auto___10575)){
args__7520__auto__.push((arguments[i__7514__auto___10576]));

var G__10577 = (i__7514__auto___10576 + (1));
i__7514__auto___10576 = G__10577;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"mdl-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return intolambda.dom_utils.upgrade_dom.call(null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return intolambda.dom_utils.upgrade_dom.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__10578__delegate = function (children__$1){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),children__$1);
};
var G__10578 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__10579__i = 0, G__10579__a = new Array(arguments.length -  0);
while (G__10579__i < G__10579__a.length) {G__10579__a[G__10579__i] = arguments[G__10579__i + 0]; ++G__10579__i;}
  children__$1 = new cljs.core.IndexedSeq(G__10579__a,0);
} 
return G__10578__delegate.call(this,children__$1);};
G__10578.cljs$lang$maxFixedArity = 0;
G__10578.cljs$lang$applyTo = (function (arglist__10580){
var children__$1 = cljs.core.seq(arglist__10580);
return G__10578__delegate(children__$1);
});
G__10578.cljs$core$IFn$_invoke$arity$variadic = G__10578__delegate;
return G__10578;
})()
], null));
});

intolambda.app.mdl.cljs$lang$maxFixedArity = (0);

intolambda.app.mdl.cljs$lang$applyTo = (function (seq10574){
return intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10574));
});
intolambda.app.load_initial_challenge = (function intolambda$app$load_initial_challenge(link){
var callback = (function (response){
var display = document.getElementById("initial-ch");
return intolambda.state.update_app_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-challenge","initial-challenge",129309182)], null),"initial-ch");
});
var error_handler = ((function (callback){
return (function (p__10584){
var map__10585 = p__10584;
var map__10585__$1 = ((((!((map__10585 == null)))?((((map__10585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10585):map__10585);
var status = cljs.core.get.call(null,map__10585__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__10585__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return alert([cljs.core.str("ERR "),cljs.core.str(status),cljs.core.str(status_text)].join(''));
});})(callback))
;
return intolambda.http_utils.call_get.call(null,link,callback,error_handler);
});
intolambda.app.main = (function intolambda$app$main(){
intolambda.app.load_initial_challenge.call(null,intolambda.data.initial_challenge_link);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.dom_utils.mdl,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-layout.mdl-js-layout.dark-primary-color","div.mdl-layout.mdl-js-layout.dark-primary-color",-801781947),intolambda.header.header_component.call(null),intolambda.header.drawer_component.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.mdl-layout__content","main.mdl-layout__content",1993331121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),intolambda.header.close_drawer], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-content.mdl-color--white","div.page-content.mdl-color--white",1606958301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.sections.home], null),intolambda.socials.social_menu.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.sections.the_challenge], null),intolambda.sections.registration.call(null,intolambda.data.registration_form_fields,intolambda.state.read_app_state.call(null,new cljs.core.Keyword(null,"initial-challenge","initial-challenge",129309182)),intolambda.data.opened_registration_QMARK_),intolambda.sections.speakers.call(null,intolambda.data.speaker_list),intolambda.sections.sponsors.call(null,intolambda.data.sponsor_list),intolambda.sections.contributors.call(null,intolambda.data.contribution_roles,intolambda.data.contribution_form_fields),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.footer.footer_component], null)], null)], null)], null)], null);
});
intolambda.app.init = (function intolambda$app$init(){
return intolambda.dom_utils.render_main.call(null,intolambda.app.main,"app");
});
intolambda.app.reload = (function intolambda$app$reload(){
return intolambda.dom_utils.render_main.call(null,intolambda.app.main,"app");
});

//# sourceMappingURL=app.js.map