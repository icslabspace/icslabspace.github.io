// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.form_utils');
goog.require('cljs.core');
goog.require('cljsjs.material');
goog.require('intolambda.utils');
cljs.core.enable_console_print_BANG_.call(null);
intolambda.form_utils.toggle_submit_button = (function intolambda$form_utils$toggle_submit_button(check_id,button_id){
var check = intolambda.utils.load_element.call(null,check_id);
var button = intolambda.utils.load_element.call(null,button_id);
return button.disabled = cljs.core.not.call(null,check.checked);
});
intolambda.form_utils.build_textarea = (function intolambda$form_utils$build_textarea(p__10476){
var map__10479 = p__10476;
var map__10479__$1 = ((((!((map__10479 == null)))?((((map__10479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10479):map__10479);
var field_name = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"field-name","field-name",1300687948));
var field_type = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var pattern = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var err_msg = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-textfield.mdl-js-textfield.mdl-texfield--floating-label.divider-color","div.mdl-textfield.mdl-js-textfield.mdl-texfield--floating-label.divider-color",1962994069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,field_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.mdl-textfield__input.mdl-color--white","textarea.mdl-textfield__input.mdl-color--white",-1981352806),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),field_type,new cljs.core.Keyword(null,"id","id",-1388402092),field_name,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"name","name",1843675177),field_name,new cljs.core.Keyword(null,"rows","rows",850049680),"5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-textfield__label","label.mdl-textfield__label",-1621295497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),field_name], null),field_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-textfield__error","span.mdl-textfield__error",1028160522),err_msg], null)], null);
});
intolambda.form_utils.build_textfield = (function intolambda$form_utils$build_textfield(p__10481){
var map__10484 = p__10481;
var map__10484__$1 = ((((!((map__10484 == null)))?((((map__10484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10484):map__10484);
var field_name = cljs.core.get.call(null,map__10484__$1,new cljs.core.Keyword(null,"field-name","field-name",1300687948));
var field_type = cljs.core.get.call(null,map__10484__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var pattern = cljs.core.get.call(null,map__10484__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var err_msg = cljs.core.get.call(null,map__10484__$1,new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.divider-color","div.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.divider-color",1563310119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,field_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-textfield__input.mdl-color--white","input.mdl-textfield__input.mdl-color--white",761394606),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),field_type,new cljs.core.Keyword(null,"id","id",-1388402092),field_name,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"name","name",1843675177),field_name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-textfield__label","label.mdl-textfield__label",-1621295497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),field_name], null),field_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-textfield__error","span.mdl-textfield__error",1028160522),err_msg], null)], null);
});
intolambda.form_utils.build_field = (function intolambda$form_utils$build_field(data){
if(cljs.core.truth_((function (){var and__6443__auto__ = new cljs.core.Keyword(null,"field-display","field-display",1490922438).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-display","field-display",1490922438).cljs$core$IFn$_invoke$arity$1(data),"textarea");
} else {
return and__6443__auto__;
}
})())){
return intolambda.form_utils.build_textarea.call(null,data);
} else {
return intolambda.form_utils.build_textfield.call(null,data);
}
});
intolambda.form_utils.build_easy_textfield = (function intolambda$form_utils$build_easy_textfield(name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-textfield__input","input.mdl-textfield__input",-562559673),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
intolambda.form_utils.build_submit_button = (function intolambda$form_utils$build_submit_button(text,id,submit_fn,disabled_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mdl-button.mdl-js-button.accent-color.primary-text-color","button.mdl-button.mdl-js-button.accent-color.primary-text-color",-1897901302),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),text], null);
});
intolambda.form_utils.email_reply_to = (function intolambda$form_utils$email_reply_to(email_addr){
return intolambda.form_utils.build_easy_textfield.call(null,"_replyTo","hidden",email_addr);
});
intolambda.form_utils.email_subject = (function intolambda$form_utils$email_subject(text){
return intolambda.form_utils.build_easy_textfield.call(null,"_subject","hidden",text);
});
intolambda.form_utils.email_next = (function intolambda$form_utils$email_next(next_page){
return intolambda.form_utils.build_easy_textfield.call(null,"_next","hidden",next_page);
});
intolambda.form_utils.extra_info = (function intolambda$form_utils$extra_info(){
return intolambda.form_utils.build_easy_textfield.call(null,"extra-info","hidden","");
});
intolambda.form_utils.build_form_with_checkbox_validation = (function intolambda$form_utils$build_form_with_checkbox_validation(form_name,form_params,input_data,submit_fn,checkbox_label){
var submit_button_id = "submit-button";
var form_params__$1 = (function (){var or__6455__auto__ = form_params;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),"#",new cljs.core.Keyword(null,"id","id",-1388402092),"form",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null);
}
})();
var checkbox = (cljs.core.truth_(checkbox_label)?intolambda.utils.build_checkbox.call(null,"submit-checkbox",checkbox_label,intolambda.form_utils.toggle_submit_button,submit_button_id):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mdl-color-text--primary","h4.mdl-color-text--primary",2384018),form_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-grid.mdl-grid.mdl-js-grid.intolambda-center-align","div.content-grid.mdl-grid.mdl-js-grid.intolambda-center-align",-1153399797),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--middle.mdl-cell--12-col","div.mdl-cell.mdl-cell--middle.mdl-cell--12-col",1702897274),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),form_params__$1,cljs.core.map.call(null,((function (submit_button_id,form_params__$1,checkbox){
return (function (p1__10486_SHARP_){
return intolambda.form_utils.build_textfield.call(null,p1__10486_SHARP_);
});})(submit_button_id,form_params__$1,checkbox))
,input_data),checkbox,intolambda.form_utils.build_submit_button.call(null,"submit",submit_button_id,submit_fn,true)], null)], null)], null)], null);
});
intolambda.form_utils.build_form_for_email = (function intolambda$form_utils$build_form_for_email(form_params,input_data,submit_fn,close_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-content.center-component","div.page-content.center-component",-990022664),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-grid.mdl-grid.mdl-js-grid","div.content-grid.mdl-grid.mdl-js-grid",-1368125107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--4-col..mdl-cell--4-col-tablet.mdl-cell--2-col-phone","div.mdl-cell.mdl-cell--4-col..mdl-cell--4-col-tablet.mdl-cell--2-col-phone",591437785),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),form_params,cljs.core.map.call(null,(function (p1__10487_SHARP_){
return intolambda.form_utils.build_field.call(null,p1__10487_SHARP_);
}),input_data),intolambda.form_utils.email_subject.call(null,"New contributor!!"),intolambda.form_utils.email_next.call(null,"http://www.icslab.eu/intolambda/index.html"),intolambda.form_utils.email_reply_to.call(null,"icslabcrew@gmail.com"),intolambda.form_utils.extra_info.call(null),intolambda.form_utils.build_submit_button.call(null,"submit","submit-id",submit_fn,false)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--6-col.mdl-cell--3-col-tablet.mdl-cell--1-col-phone","div.mdl-cell.mdl-cell--6-col.mdl-cell--3-col-tablet.mdl-cell--1-col-phone",1070780705)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--2-col.mdl-cell--1-col-tablet.mdl-cell--1-col-phone.mdl-cell--bottom","div.mdl-cell.mdl-cell--2-col.mdl-cell--1-col-tablet.mdl-cell--1-col-phone.mdl-cell--bottom",1861713671),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mdl-color-text--teal.link-like","a.mdl-color-text--teal.link-like",1675589181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),"hide"], null)], null)], null)], null);
});

//# sourceMappingURL=form_utils.js.map