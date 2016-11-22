// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.dom_utils');
goog.require('cljs.core');
goog.require('reagent.core');
intolambda.dom_utils.upgrade_dom = componentHandler.upgradeDom;
intolambda.dom_utils.mdl = (function intolambda$dom_utils$mdl(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10414 = arguments.length;
var i__7514__auto___10415 = (0);
while(true){
if((i__7514__auto___10415 < len__7513__auto___10414)){
args__7520__auto__.push((arguments[i__7514__auto___10415]));

var G__10416 = (i__7514__auto___10415 + (1));
i__7514__auto___10415 = G__10416;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"mdl-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return intolambda.dom_utils.upgrade_dom.call(null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return intolambda.dom_utils.upgrade_dom.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__10417__delegate = function (children__$1){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),children__$1);
};
var G__10417 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__10418__i = 0, G__10418__a = new Array(arguments.length -  0);
while (G__10418__i < G__10418__a.length) {G__10418__a[G__10418__i] = arguments[G__10418__i + 0]; ++G__10418__i;}
  children__$1 = new cljs.core.IndexedSeq(G__10418__a,0);
} 
return G__10417__delegate.call(this,children__$1);};
G__10417.cljs$lang$maxFixedArity = 0;
G__10417.cljs$lang$applyTo = (function (arglist__10419){
var children__$1 = cljs.core.seq(arglist__10419);
return G__10417__delegate(children__$1);
});
G__10417.cljs$core$IFn$_invoke$arity$variadic = G__10417__delegate;
return G__10417;
})()
], null));
});

intolambda.dom_utils.mdl.cljs$lang$maxFixedArity = (0);

intolambda.dom_utils.mdl.cljs$lang$applyTo = (function (seq10413){
return intolambda.dom_utils.mdl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10413));
});
intolambda.dom_utils.render_main = (function intolambda$dom_utils$render_main(main_fn,doc_id){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_fn], null),document.getElementById(doc_id));
});
intolambda.dom_utils.retrieve_element = (function intolambda$dom_utils$retrieve_element(element_id){
return reagent.core.render_component.call(null,document.getElementById(element_id));
});

//# sourceMappingURL=dom_utils.js.map