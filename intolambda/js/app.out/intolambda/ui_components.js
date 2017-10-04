// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.ui_components');
goog.require('cljs.core');
goog.require('intolambda.utils');
intolambda.ui_components.build_dialog_action_button = (function intolambda$ui_components$build_dialog_action_button(p__13744){
var map__13747 = p__13744;
var map__13747__$1 = ((((!((map__13747 == null)))?((((map__13747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13747):map__13747);
var action_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13747__$1,cljs.core.cst$kw$action_DASH_name);
var action_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13747__$1,cljs.core.cst$kw$action_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$mdl_DASH_button$mdl_DASH_color_DASH__DASH_accent,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,action_name,cljs.core.cst$kw$on_DASH_click,((function (map__13747,map__13747__$1,action_name,action_fn){
return (function (){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
});})(map__13747,map__13747__$1,action_name,action_fn))
], null),action_name], null);
});
intolambda.ui_components.show_modal = (function intolambda$ui_components$show_modal(id){
var modal = intolambda.utils.load_element(id);
return modal.style.display = "block";
});
intolambda.ui_components.close_modal = (function intolambda$ui_components$close_modal(id){
var modal = intolambda.utils.load_element(id);
return modal.style.display = "none";
});
intolambda.ui_components.build_modal = (function intolambda$ui_components$build_modal(id,title,content,actions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content$modal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$dark_DASH_primary_DASH_color$text_DASH_primary_DASH_color,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,intolambda.utils.display_grid("",actions,intolambda.ui_components.build_dialog_action_button)], null)], null)], null);
});
