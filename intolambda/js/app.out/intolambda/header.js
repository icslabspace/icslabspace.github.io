// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.header');
goog.require('cljs.core');
goog.require('cljsjs.material');
goog.require('reagent.core');
goog.require('intolambda.state');
goog.require('intolambda.utils');
cljs.core.enable_console_print_BANG_.call(null);
intolambda.header.menu = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home","home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The challenge","the-challenge"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register","register"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Speakers","speakers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sponsors","sponsors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact","footer"], null)], null);
intolambda.header.reload_atom = reagent.core.atom.call(null,(0));
intolambda.header.update_state = (function intolambda$header$update_state(new_item_selected){
cljs.core.swap_BANG_.call(null,intolambda.header.reload_atom,cljs.core.inc);

return intolambda.state.update_app_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935)], null),new_item_selected);
});
intolambda.header.layout_fn = (function intolambda$header$layout_fn(selected_QMARK_){
if(cljs.core.truth_(selected_QMARK_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a.mdl-button.mdl-js-button.accent-color.primary-text-color","a.mdl-button.mdl-js-button.accent-color.primary-text-color",1473636098)],null));
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a.mdl-button.mdl-js-button.text-primary-color","a.mdl-button.mdl-js-button.text-primary-color",-461777832)],null));
}
});
intolambda.header.build_button = (function intolambda$header$build_button(name,link){
var selected_QMARK_ = (intolambda.state.read_app_state.call(null,new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935)) === name);
var parsed_link = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),intolambda.utils.get_in_ext_link.call(null,link),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_){
return (function (){
return intolambda.header.update_state.call(null,name);
});})(selected_QMARK_))
,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,name)], null);
return cljs.core.conj.call(null,intolambda.header.layout_fn.call(null,selected_QMARK_),parsed_link,name);
});
intolambda.header.close_drawer = (function intolambda$header$close_drawer(){
var drawer = intolambda.utils.load_element.call(null,"drawer");
return drawer.className = "mdl-layout__drawer dark-primary-color";
});
intolambda.header.navigation_component = (function intolambda$header$navigation_component(menu){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10467_SHARP_){
return intolambda.header.build_button.call(null,cljs.core.first.call(null,p1__10467_SHARP_),cljs.core.last.call(null,p1__10467_SHARP_));
}),menu));
});
intolambda.header.header_component = (function intolambda$header$header_component(){
cljs.core.deref.call(null,intolambda.header.reload_atom);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mdl-layout__header.mdl-layout__header.dark-primary-color","header.mdl-layout__header.mdl-layout__header.dark-primary-color",-223272322),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"header",new cljs.core.Keyword(null,"on-click","on-click",1632826543),intolambda.header.close_drawer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-layout__header-row.dark-primary-color","div.mdl-layout__header-row.dark-primary-color",-1196517195),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-layout-spacer","div.mdl-layout-spacer",1801843438)], null),intolambda.header.navigation_component.call(null,intolambda.header.menu)], null)], null);
});
intolambda.header.drawer_component = (function intolambda$header$drawer_component(){
cljs.core.deref.call(null,intolambda.header.reload_atom);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intolambda-drawer.mdl-layout__drawer.dark-primary-color","div.intolambda-drawer.mdl-layout__drawer.dark-primary-color",-504200092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drawer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return intolambda.header.close_drawer.call(null);
})], null),intolambda.header.navigation_component.call(null,intolambda.header.menu)], null);
});

//# sourceMappingURL=header.js.map