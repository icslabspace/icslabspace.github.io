// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.app');
goog.require('cljs.core');
goog.require('intolambda.dom_utils');
goog.require('intolambda.footer');
goog.require('intolambda.header');
goog.require('reagent.core');
goog.require('intolambda.socials');
goog.require('intolambda.data');
goog.require('intolambda.http_utils');
goog.require('intolambda.sections');
goog.require('intolambda.state');
intolambda.app.mdl = (function intolambda$app$mdl(var_args){
var args__7520__auto__ = [];
var len__7513__auto___13761 = arguments.length;
var i__7514__auto___13762 = (0);
while(true){
if((i__7514__auto___13762 < len__7513__auto___13761)){
args__7520__auto__.push((arguments[i__7514__auto___13762]));

var G__13763 = (i__7514__auto___13762 + (1));
i__7514__auto___13762 = G__13763;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"mdl-wrapper",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return (intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0 ? intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0() : intolambda.dom_utils.upgrade_dom.call(null));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return (intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0 ? intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0() : intolambda.dom_utils.upgrade_dom.call(null));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__13764__delegate = function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),children__$1);
};
var G__13764 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__13765__i = 0, G__13765__a = new Array(arguments.length -  0);
while (G__13765__i < G__13765__a.length) {G__13765__a[G__13765__i] = arguments[G__13765__i + 0]; ++G__13765__i;}
  children__$1 = new cljs.core.IndexedSeq(G__13765__a,0);
} 
return G__13764__delegate.call(this,children__$1);};
G__13764.cljs$lang$maxFixedArity = 0;
G__13764.cljs$lang$applyTo = (function (arglist__13766){
var children__$1 = cljs.core.seq(arglist__13766);
return G__13764__delegate(children__$1);
});
G__13764.cljs$core$IFn$_invoke$arity$variadic = G__13764__delegate;
return G__13764;
})()
], null));
});

intolambda.app.mdl.cljs$lang$maxFixedArity = (0);

intolambda.app.mdl.cljs$lang$applyTo = (function (seq13760){
return intolambda.app.mdl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13760));
});
intolambda.app.load_initial_challenge = (function intolambda$app$load_initial_challenge(link){
var callback = (function (response){
var display = document.getElementById("initial-ch");
return intolambda.state.update_app_state(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initial_DASH_challenge], null),"initial-ch");
});
var error_handler = ((function (callback){
return (function (p__13771){
var map__13772 = p__13771;
var map__13772__$1 = ((((!((map__13772 == null)))?((((map__13772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13772):map__13772);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13772__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13772__$1,cljs.core.cst$kw$status_DASH_text);
var G__13774 = [cljs.core.str("ERR "),cljs.core.str(status),cljs.core.str(status_text)].join('');
return alert(G__13774);
});})(callback))
;
return intolambda.http_utils.call_get(link,callback,error_handler);
});
intolambda.app.main = (function intolambda$app$main(){
intolambda.app.load_initial_challenge(intolambda.data.initial_challenge_link);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.dom_utils.mdl,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_layout$mdl_DASH_js_DASH_layout$dark_DASH_primary_DASH_color,intolambda.header.header_component(),intolambda.header.drawer_component(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$mdl_DASH_layout__content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,intolambda.header.close_drawer], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content$mdl_DASH_color_DASH__DASH_white,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.sections.home], null),intolambda.socials.social_menu(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.sections.the_challenge], null),intolambda.sections.registration(intolambda.data.registration_form_fields,intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$initial_DASH_challenge),intolambda.data.opened_registration_QMARK_),intolambda.sections.speakers(intolambda.data.speaker_list),intolambda.sections.sponsors(intolambda.data.sponsor_list),intolambda.sections.contributors(intolambda.data.contribution_roles,intolambda.data.contribution_form_fields),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.footer.footer_component], null)], null)], null)], null)], null);
});
intolambda.app.init = (function intolambda$app$init(){
return intolambda.dom_utils.render_main(intolambda.app.main,"app");
});
intolambda.app.reload = (function intolambda$app$reload(){
return intolambda.dom_utils.render_main(intolambda.app.main,"app");
});
