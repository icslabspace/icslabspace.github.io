// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.state');
goog.require('cljs.core');
goog.require('reagent.core');
intolambda.state.init_state = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,"Home",cljs.core.cst$kw$contrib_DASH_selection,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$initial_DASH_challenge,""], null);
intolambda.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(intolambda.state.init_state);
intolambda.state.get_app_state = (function intolambda$state$get_app_state(){
return intolambda.state.app_state;
});
intolambda.state.update_app_state = (function intolambda$state$update_app_state(keys,value){
if(((1) === cljs.core.count(keys))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(intolambda.state.app_state,cljs.core.assoc,cljs.core.first(keys),value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(intolambda.state.app_state,cljs.core.assoc_in,keys,value);
}
});
intolambda.state.read_app_state = (function intolambda$state$read_app_state(var_args){
var args13711 = [];
var len__7513__auto___13715 = arguments.length;
var i__7514__auto___13716 = (0);
while(true){
if((i__7514__auto___13716 < len__7513__auto___13715)){
args13711.push((arguments[i__7514__auto___13716]));

var G__13717 = (i__7514__auto___13716 + (1));
i__7514__auto___13716 = G__13717;
continue;
} else {
}
break;
}

var G__13713 = args13711.length;
switch (G__13713) {
case 0:
return intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13711.length)].join('')));

}
});

intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return intolambda.state.app_state;
});

intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1 = (function (key){
var G__13714 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(intolambda.state.app_state) : cljs.core.deref.call(null,intolambda.state.app_state));
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__13714) : key.call(null,G__13714));
});

intolambda.state.read_app_state.cljs$lang$maxFixedArity = 1;
