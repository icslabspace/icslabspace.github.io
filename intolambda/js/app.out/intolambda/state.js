// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.state');
goog.require('cljs.core');
goog.require('reagent.core');
intolambda.state.init_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),"Home",new cljs.core.Keyword(null,"contrib-selection","contrib-selection",605088144),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"initial-challenge","initial-challenge",129309182),""], null);
intolambda.state.app_state = reagent.core.atom.call(null,intolambda.state.init_state);
intolambda.state.get_app_state = (function intolambda$state$get_app_state(){
return intolambda.state.app_state;
});
intolambda.state.update_app_state = (function intolambda$state$update_app_state(keys,value){
if(((1) === cljs.core.count.call(null,keys))){
return cljs.core.swap_BANG_.call(null,intolambda.state.app_state,cljs.core.assoc,cljs.core.first.call(null,keys),value);
} else {
return cljs.core.swap_BANG_.call(null,intolambda.state.app_state,cljs.core.assoc_in,keys,value);
}
});
intolambda.state.read_app_state = (function intolambda$state$read_app_state(var_args){
var args10458 = [];
var len__7513__auto___10461 = arguments.length;
var i__7514__auto___10462 = (0);
while(true){
if((i__7514__auto___10462 < len__7513__auto___10461)){
args10458.push((arguments[i__7514__auto___10462]));

var G__10463 = (i__7514__auto___10462 + (1));
i__7514__auto___10462 = G__10463;
continue;
} else {
}
break;
}

var G__10460 = args10458.length;
switch (G__10460) {
case 0:
return intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10458.length)].join('')));

}
});

intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return intolambda.state.app_state;
});

intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1 = (function (key){
return key.call(null,cljs.core.deref.call(null,intolambda.state.app_state));
});

intolambda.state.read_app_state.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=state.js.map