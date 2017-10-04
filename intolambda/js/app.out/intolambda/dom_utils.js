// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.dom_utils');
goog.require('cljs.core');
goog.require('reagent.core');
intolambda.dom_utils.upgrade_dom = componentHandler.upgradeDom;
intolambda.dom_utils.mdl = (function intolambda$dom_utils$mdl(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12759 = arguments.length;
var i__7514__auto___12760 = (0);
while(true){
if((i__7514__auto___12760 < len__7513__auto___12759)){
args__7520__auto__.push((arguments[i__7514__auto___12760]));

var G__12761 = (i__7514__auto___12760 + (1));
i__7514__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"mdl-wrapper",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return (intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0 ? intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0() : intolambda.dom_utils.upgrade_dom.call(null));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return (intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0 ? intolambda.dom_utils.upgrade_dom.cljs$core$IFn$_invoke$arity$0() : intolambda.dom_utils.upgrade_dom.call(null));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__12762__delegate = function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),children__$1);
};
var G__12762 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__12763__i = 0, G__12763__a = new Array(arguments.length -  0);
while (G__12763__i < G__12763__a.length) {G__12763__a[G__12763__i] = arguments[G__12763__i + 0]; ++G__12763__i;}
  children__$1 = new cljs.core.IndexedSeq(G__12763__a,0);
} 
return G__12762__delegate.call(this,children__$1);};
G__12762.cljs$lang$maxFixedArity = 0;
G__12762.cljs$lang$applyTo = (function (arglist__12764){
var children__$1 = cljs.core.seq(arglist__12764);
return G__12762__delegate(children__$1);
});
G__12762.cljs$core$IFn$_invoke$arity$variadic = G__12762__delegate;
return G__12762;
})()
], null));
});

intolambda.dom_utils.mdl.cljs$lang$maxFixedArity = (0);

intolambda.dom_utils.mdl.cljs$lang$applyTo = (function (seq12758){
return intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12758));
});
intolambda.dom_utils.render_main = (function intolambda$dom_utils$render_main(main_fn,doc_id){
var G__12767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_fn], null);
var G__12768 = document.getElementById(doc_id);
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12767,G__12768) : reagent.core.render_component.call(null,G__12767,G__12768));
});
intolambda.dom_utils.retrieve_element = (function intolambda$dom_utils$retrieve_element(element_id){
var G__12770 = document.getElementById(element_id);
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$1 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$1(G__12770) : reagent.core.render_component.call(null,G__12770));
});
