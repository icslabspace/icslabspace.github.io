// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.contribution');
goog.require('cljs.core');
goog.require('intolambda.state');
goog.require('intolambda.utils');
goog.require('intolambda.form_utils');
intolambda.contribution.merge_selections = (function intolambda$contribution$merge_selections(){
var sels = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13753_SHARP_){
if(cljs.core.truth_(cljs.core.last(p1__13753_SHARP_))){
return cljs.core.name(cljs.core.first(p1__13753_SHARP_));
} else {
return null;
}
}),intolambda.state.read_app_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$contrib_DASH_selection));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (sels){
return (function (x){
!((x == null));

return x;
});})(sels))
,sels);
});
intolambda.contribution.update_extra_info = (function intolambda$contribution$update_extra_info(id){
var extra_info = intolambda.utils.load_element(id);
var roles = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",intolambda.contribution.merge_selections());
return extra_info.value = roles;
});
intolambda.contribution.toggle_checkbox = (function intolambda$contribution$toggle_checkbox(id){
var was_checked = intolambda.utils.is_checked(id);
if(!((id == null))){
intolambda.state.update_app_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contrib_DASH_selection,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)], null),was_checked);

return intolambda.contribution.update_extra_info("extra-info");
} else {
return null;
}
});
intolambda.contribution.clear_selections = (function intolambda$contribution$clear_selections(roles){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13754_SHARP_){
return intolambda.utils.set_checkbox_flag(p1__13754_SHARP_,false);
}),roles));
});
intolambda.contribution.contribution_component = (function intolambda$contribution$contribution_component(roles,contributors,close_fn){
var form_params = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,"http://formspree.io/icslabcrew@gmail.com",cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$on_DASH_submit,(function (){
return intolambda.contribution.clear_selections(roles);
})], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,intolambda.utils.display_grid("contribute",roles,((function (form_params){
return (function (p1__13755_SHARP_){
return intolambda.utils.build_contributor_box(p1__13755_SHARP_,intolambda.contribution.toggle_checkbox);
});})(form_params))
),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [intolambda.form_utils.build_form_for_email,form_params,contributors,null,close_fn], null)], null);
});
