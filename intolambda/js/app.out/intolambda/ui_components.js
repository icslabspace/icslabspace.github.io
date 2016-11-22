// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.ui_components');
goog.require('cljs.core');
goog.require('cljsjs.material');
goog.require('intolambda.utils');
intolambda.ui_components.build_dialog_action_button = (function intolambda$ui_components$build_dialog_action_button(p__10490){
var map__10493 = p__10490;
var map__10493__$1 = ((((!((map__10493 == null)))?((((map__10493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10493):map__10493);
var action_name = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"action-name","action-name",-1685384433));
var action_fn = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"action-fn","action-fn",1914929011));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mdl-button.mdl-color--accent","button.mdl-button.mdl-color--accent",111883251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),action_name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10493,map__10493__$1,action_name,action_fn){
return (function (){
return action_fn.call(null);
});})(map__10493,map__10493__$1,action_name,action_fn))
], null),action_name], null);
});
intolambda.ui_components.show_modal = (function intolambda$ui_components$show_modal(id){
var modal = intolambda.utils.load_element.call(null,id);
return modal.style.display = "block";
});
intolambda.ui_components.close_modal = (function intolambda$ui_components$close_modal(id){
var modal = intolambda.utils.load_element.call(null,id);
return modal.style.display = "none";
});
intolambda.ui_components.build_modal = (function intolambda$ui_components$build_modal(id,title,content,actions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-content.modal","div.page-content.modal",533147129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.dark-primary-color.text-primary-color","h5.dark-primary-color.text-primary-color",1934715678),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),intolambda.utils.display_grid.call(null,"",actions,intolambda.ui_components.build_dialog_action_button)], null)], null)], null);
});

//# sourceMappingURL=ui_components.js.map