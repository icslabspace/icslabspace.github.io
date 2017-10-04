// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.form_utils');
goog.require('cljs.core');
goog.require('intolambda.utils');
cljs.core.enable_console_print_BANG_();
intolambda.form_utils.toggle_submit_button = (function intolambda$form_utils$toggle_submit_button(check_id,button_id){
var check = intolambda.utils.load_element(check_id);
var button = intolambda.utils.load_element(button_id);
return button.disabled = cljs.core.not(check.checked);
});
intolambda.form_utils.build_textarea = (function intolambda$form_utils$build_textarea(p__13730){
var map__13733 = p__13730;
var map__13733__$1 = ((((!((map__13733 == null)))?((((map__13733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13733):map__13733);
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,cljs.core.cst$kw$field_DASH_name);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,cljs.core.cst$kw$field_DASH_type);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,cljs.core.cst$kw$pattern);
var err_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,cljs.core.cst$kw$err_DASH_msg);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_textfield$mdl_DASH_js_DASH_textfield$mdl_DASH_texfield_DASH__DASH_floating_DASH_label$divider_DASH_color,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(field_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$mdl_DASH_textfield__input$mdl_DASH_color_DASH__DASH_white,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,field_type,cljs.core.cst$kw$id,field_name,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$name,field_name,cljs.core.cst$kw$rows,"5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$mdl_DASH_textfield__label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,field_name], null),field_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mdl_DASH_textfield__error,err_msg], null)], null);
});
intolambda.form_utils.build_textfield = (function intolambda$form_utils$build_textfield(p__13735){
var map__13738 = p__13735;
var map__13738__$1 = ((((!((map__13738 == null)))?((((map__13738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13738):map__13738);
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.cst$kw$field_DASH_name);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.cst$kw$field_DASH_type);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.cst$kw$pattern);
var err_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,cljs.core.cst$kw$err_DASH_msg);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_textfield$mdl_DASH_js_DASH_textfield$mdl_DASH_textfield_DASH__DASH_floating_DASH_label$divider_DASH_color,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(field_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$mdl_DASH_textfield__input$mdl_DASH_color_DASH__DASH_white,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,field_type,cljs.core.cst$kw$id,field_name,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$name,field_name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$mdl_DASH_textfield__label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,field_name], null),field_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mdl_DASH_textfield__error,err_msg], null)], null);
});
intolambda.form_utils.build_field = (function intolambda$form_utils$build_field(data){
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.cst$kw$field_DASH_display.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$field_DASH_display.cljs$core$IFn$_invoke$arity$1(data),"textarea");
} else {
return and__6443__auto__;
}
})())){
return intolambda.form_utils.build_textarea(data);
} else {
return intolambda.form_utils.build_textfield(data);
}
});
intolambda.form_utils.build_easy_textfield = (function intolambda$form_utils$build_easy_textfield(name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$mdl_DASH_textfield__input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,name,cljs.core.cst$kw$name,name,cljs.core.cst$kw$value,value], null)], null);
});
intolambda.form_utils.build_submit_button = (function intolambda$form_utils$build_submit_button(text,id,submit_fn,disabled_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$mdl_DASH_button$mdl_DASH_js_DASH_button$accent_DASH_color$primary_DASH_text_DASH_color,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$disabled,disabled_QMARK_], null),text], null);
});
intolambda.form_utils.email_reply_to = (function intolambda$form_utils$email_reply_to(email_addr){
return intolambda.form_utils.build_easy_textfield("_replyTo","hidden",email_addr);
});
intolambda.form_utils.email_subject = (function intolambda$form_utils$email_subject(text){
return intolambda.form_utils.build_easy_textfield("_subject","hidden",text);
});
intolambda.form_utils.email_next = (function intolambda$form_utils$email_next(next_page){
return intolambda.form_utils.build_easy_textfield("_next","hidden",next_page);
});
intolambda.form_utils.extra_info = (function intolambda$form_utils$extra_info(){
return intolambda.form_utils.build_easy_textfield("extra-info","hidden","");
});
intolambda.form_utils.build_form_with_checkbox_validation = (function intolambda$form_utils$build_form_with_checkbox_validation(form_name,form_params,input_data,submit_fn,checkbox_label){
var submit_button_id = "submit-button";
var form_params__$1 = (function (){var or__6455__auto__ = form_params;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,"#",cljs.core.cst$kw$id,"form",cljs.core.cst$kw$method,"POST"], null);
}
})();
var checkbox = (cljs.core.truth_(checkbox_label)?intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic("submit-checkbox",checkbox_label,intolambda.form_utils.toggle_submit_button,cljs.core.array_seq([submit_button_id], 0)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$mdl_DASH_color_DASH_text_DASH__DASH_primary,form_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content_DASH_grid$mdl_DASH_grid$mdl_DASH_js_DASH_grid$intolambda_DASH_center_DASH_align,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_middle$mdl_DASH_cell_DASH__DASH_12_DASH_col,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,form_params__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (submit_button_id,form_params__$1,checkbox){
return (function (p1__13740_SHARP_){
return intolambda.form_utils.build_textfield(p1__13740_SHARP_);
});})(submit_button_id,form_params__$1,checkbox))
,input_data),checkbox,intolambda.form_utils.build_submit_button("submit",submit_button_id,submit_fn,true)], null)], null)], null)], null);
});
intolambda.form_utils.build_form_for_email = (function intolambda$form_utils$build_form_for_email(form_params,input_data,submit_fn,close_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content$center_DASH_component,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content_DASH_grid$mdl_DASH_grid$mdl_DASH_js_DASH_grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_4_DASH_col$$mdl_DASH_cell_DASH__DASH_4_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_2_DASH_col_DASH_phone,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,form_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13741_SHARP_){
return intolambda.form_utils.build_field(p1__13741_SHARP_);
}),input_data),intolambda.form_utils.email_subject("New contributor!!"),intolambda.form_utils.email_next("http://www.icslab.eu/intolambda/index.html"),intolambda.form_utils.email_reply_to("icslabcrew@gmail.com"),intolambda.form_utils.extra_info(),intolambda.form_utils.build_submit_button("submit","submit-id",submit_fn,false)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_6_DASH_col$mdl_DASH_cell_DASH__DASH_3_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_1_DASH_col_DASH_phone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_2_DASH_col$mdl_DASH_cell_DASH__DASH_1_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_1_DASH_col_DASH_phone$mdl_DASH_cell_DASH__DASH_bottom,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$mdl_DASH_color_DASH_text_DASH__DASH_teal$link_DASH_like,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,close_fn], null),"hide"], null)], null)], null)], null);
});
