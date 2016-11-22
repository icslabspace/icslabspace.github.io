// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.contribution');
goog.require('cljs.core');
goog.require('cljsjs.material');
goog.require('intolambda.state');
goog.require('intolambda.utils');
goog.require('intolambda.form_utils');
intolambda.contribution.merge_selections = (function intolambda$contribution$merge_selections(){
var sels = cljs.core.map.call(null,(function (p1__10544_SHARP_){
if(cljs.core.truth_(cljs.core.last.call(null,p1__10544_SHARP_))){
return cljs.core.name.call(null,cljs.core.first.call(null,p1__10544_SHARP_));
} else {
return null;
}
}),intolambda.state.read_app_state.call(null,new cljs.core.Keyword(null,"contrib-selection","contrib-selection",605088144)));
return cljs.core.keep.call(null,((function (sels){
return (function (x){
!((x == null));

return x;
});})(sels))
,sels);
});
intolambda.contribution.update_extra_info = (function intolambda$contribution$update_extra_info(id){
var extra_info = intolambda.utils.load_element.call(null,id);
var roles = clojure.string.join.call(null,",",intolambda.contribution.merge_selections.call(null));
return extra_info.value = roles;
});
intolambda.contribution.toggle_checkbox = (function intolambda$contribution$toggle_checkbox(id){
var was_checked = intolambda.utils.is_checked.call(null,id);
if(!((id == null))){
intolambda.state.update_app_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-selection","contrib-selection",605088144),cljs.core.keyword.call(null,id)], null),was_checked);

return intolambda.contribution.update_extra_info.call(null,"extra-info");
} else {
return null;
}
});
intolambda.contribution.clear_selections = (function intolambda$contribution$clear_selections(roles){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10545_SHARP_){
return intolambda.utils.set_checkbox_flag.call(null,p1__10545_SHARP_,false);
}),roles));
});
intolambda.contribution.contribution_component = (function intolambda$contribution$contribution_component(roles,contributors,close_fn){
var form_params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),"http://formspree.io/icslabcrew@gmail.com",new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return intolambda.contribution.clear_selections.call(null,roles);
})], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),intolambda.utils.display_grid.call(null,"contribute",roles,((function (form_params){
return (function (p1__10546_SHARP_){
return intolambda.utils.build_contributor_box.call(null,p1__10546_SHARP_,intolambda.contribution.toggle_checkbox);
});})(form_params))
),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.form_utils.build_form_for_email,form_params,contributors,null,close_fn], null)], null);
});

//# sourceMappingURL=contribution.js.map