// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.header');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('intolambda.state');
goog.require('intolambda.utils');
cljs.core.enable_console_print_BANG_();
intolambda.header.menu = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home","home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The challenge","the-challenge"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register","register"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Speakers","speakers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sponsors","sponsors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact","footer"], null)], null);
intolambda.header.reload_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
intolambda.header.update_state = (function intolambda$header$update_state(new_item_selected){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(intolambda.header.reload_atom,cljs.core.inc);

return intolambda.state.update_app_state(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected], null),new_item_selected);
});
intolambda.header.layout_fn = (function intolambda$header$layout_fn(selected_QMARK_){
if(cljs.core.truth_(selected_QMARK_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a$mdl_DASH_button$mdl_DASH_js_DASH_button$accent_DASH_color$primary_DASH_text_DASH_color],null));
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a$mdl_DASH_button$mdl_DASH_js_DASH_button$text_DASH_primary_DASH_color],null));
}
});
intolambda.header.build_button = (function intolambda$header$build_button(name,link){
var selected_QMARK_ = (intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$menu_DASH_item_DASH_selected) === name);
var parsed_link = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,intolambda.utils.get_in_ext_link(link),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (){
return intolambda.header.update_state(name);
});})(selected_QMARK_))
,cljs.core.cst$kw$key,cljs.core.hash(name)], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(intolambda.header.layout_fn(selected_QMARK_),parsed_link,cljs.core.array_seq([name], 0));
});
intolambda.header.close_drawer = (function intolambda$header$close_drawer(){
var drawer = intolambda.utils.load_element("drawer");
return drawer.className = "mdl-layout__drawer dark-primary-color";
});
intolambda.header.navigation_component = (function intolambda$header$navigation_component(menu){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13721_SHARP_){
return intolambda.header.build_button(cljs.core.first(p1__13721_SHARP_),cljs.core.last(p1__13721_SHARP_));
}),menu));
});
intolambda.header.header_component = (function intolambda$header$header_component(){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(intolambda.header.reload_atom) : cljs.core.deref.call(null,intolambda.header.reload_atom));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$mdl_DASH_layout__header$mdl_DASH_layout__header$dark_DASH_primary_DASH_color,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"header",cljs.core.cst$kw$on_DASH_click,intolambda.header.close_drawer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_layout__header_DASH_row$dark_DASH_primary_DASH_color,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_layout_DASH_spacer], null),intolambda.header.navigation_component(intolambda.header.menu)], null)], null);
});
intolambda.header.drawer_component = (function intolambda$header$drawer_component(){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(intolambda.header.reload_atom) : cljs.core.deref.call(null,intolambda.header.reload_atom));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$intolambda_DASH_drawer$mdl_DASH_layout__drawer$dark_DASH_primary_DASH_color,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"drawer",cljs.core.cst$kw$on_DASH_click,(function (){
return intolambda.header.close_drawer();
})], null),intolambda.header.navigation_component(intolambda.header.menu)], null);
});
