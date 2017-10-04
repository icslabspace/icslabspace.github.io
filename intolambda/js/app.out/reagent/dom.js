// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6455__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12627 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12627) : cljs.core.atom.call(null,G__12627));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12630 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12630){
return (function (){
var _STAR_always_update_STAR_12631 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12631;
}});})(_STAR_always_update_STAR_12630))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12630;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12632 = [];
var len__7513__auto___12635 = arguments.length;
var i__7514__auto___12636 = (0);
while(true){
if((i__7514__auto___12636 < len__7513__auto___12635)){
args12632.push((arguments[i__7514__auto___12636]));

var G__12637 = (i__7514__auto___12636 + (1));
i__7514__auto___12636 = G__12637;
continue;
} else {
}
break;
}

var G__12634 = args12632.length;
switch (G__12634) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12632.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12643_12647 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12644_12648 = null;
var count__12645_12649 = (0);
var i__12646_12650 = (0);
while(true){
if((i__12646_12650 < count__12645_12649)){
var v_12651 = chunk__12644_12648.cljs$core$IIndexed$_nth$arity$2(null,i__12646_12650);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12651);

var G__12652 = seq__12643_12647;
var G__12653 = chunk__12644_12648;
var G__12654 = count__12645_12649;
var G__12655 = (i__12646_12650 + (1));
seq__12643_12647 = G__12652;
chunk__12644_12648 = G__12653;
count__12645_12649 = G__12654;
i__12646_12650 = G__12655;
continue;
} else {
var temp__4425__auto___12656 = cljs.core.seq(seq__12643_12647);
if(temp__4425__auto___12656){
var seq__12643_12657__$1 = temp__4425__auto___12656;
if(cljs.core.chunked_seq_QMARK_(seq__12643_12657__$1)){
var c__7258__auto___12658 = cljs.core.chunk_first(seq__12643_12657__$1);
var G__12659 = cljs.core.chunk_rest(seq__12643_12657__$1);
var G__12660 = c__7258__auto___12658;
var G__12661 = cljs.core.count(c__7258__auto___12658);
var G__12662 = (0);
seq__12643_12647 = G__12659;
chunk__12644_12648 = G__12660;
count__12645_12649 = G__12661;
i__12646_12650 = G__12662;
continue;
} else {
var v_12663 = cljs.core.first(seq__12643_12657__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12663);

var G__12664 = cljs.core.next(seq__12643_12657__$1);
var G__12665 = null;
var G__12666 = (0);
var G__12667 = (0);
seq__12643_12647 = G__12664;
chunk__12644_12648 = G__12665;
count__12645_12649 = G__12666;
i__12646_12650 = G__12667;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
