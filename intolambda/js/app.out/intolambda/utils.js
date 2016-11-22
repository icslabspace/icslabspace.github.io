// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.utils');
goog.require('cljs.core');
goog.require('cljsjs.material');
goog.require('clojure.string');
intolambda.utils.load_element = (function intolambda$utils$load_element(id){
return document.getElementById(id);
});
intolambda.utils.show_element = (function intolambda$utils$show_element(var_args){
var args10422 = [];
var len__7513__auto___10425 = arguments.length;
var i__7514__auto___10426 = (0);
while(true){
if((i__7514__auto___10426 < len__7513__auto___10425)){
args10422.push((arguments[i__7514__auto___10426]));

var G__10427 = (i__7514__auto___10426 + (1));
i__7514__auto___10426 = G__10427;
continue;
} else {
}
break;
}

var G__10424 = args10422.length;
switch (G__10424) {
case 1:
return intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10422.length)].join('')));

}
});

intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$1 = (function (id){
return intolambda.utils.show_element.call(null,id,false);
});

intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2 = (function (id,val){
var element = intolambda.utils.load_element.call(null,id);
return element.hidden = val;
});

intolambda.utils.show_element.cljs$lang$maxFixedArity = 2;
intolambda.utils.is_checked = (function intolambda$utils$is_checked(id){
return intolambda.utils.load_element.call(null,id).checked;
});
intolambda.utils.set_checkbox_flag = (function intolambda$utils$set_checkbox_flag(id,flag){
var element = intolambda.utils.load_element.call(null,id);
var was_checked = element.checked;
if(!(cljs.core._EQ_.call(null,flag,was_checked))){
return element.click();
} else {
return null;
}
});
intolambda.utils.check_checkbox = (function intolambda$utils$check_checkbox(id){
var element = intolambda.utils.load_element.call(null,id);
var was_checked = element.checked;
if(cljs.core.not.call(null,was_checked)){
return element.click();
} else {
return null;
}
});
intolambda.utils.is_link_QMARK_ = (function intolambda$utils$is_link_QMARK_(text){
if(cljs.core.truth_(text)){
return (clojure.string.starts_with_QMARK_.call(null,text,"www")) || (clojure.string.starts_with_QMARK_.call(null,text,"http")) || (clojure.string.starts_with_QMARK_.call(null,text,"/"));
} else {
return null;
}
});
intolambda.utils.is_section_QMARK_ = (function intolambda$utils$is_section_QMARK_(text){
if(cljs.core.truth_(text)){
return clojure.string.starts_with_QMARK_.call(null,text,"#");
} else {
return null;
}
});
intolambda.utils.make_classy_div = (function intolambda$utils$make_classy_div(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10431 = arguments.length;
var i__7514__auto___10432 = (0);
while(true){
if((i__7514__auto___10432 < len__7513__auto___10431)){
args__7520__auto__.push((arguments[i__7514__auto___10432]));

var G__10433 = (i__7514__auto___10432 + (1));
i__7514__auto___10432 = G__10433;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic = (function (text,class$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.first.call(null,class$)], null),text], null);
});

intolambda.utils.make_classy_div.cljs$lang$maxFixedArity = (1);

intolambda.utils.make_classy_div.cljs$lang$applyTo = (function (seq10429){
var G__10430 = cljs.core.first.call(null,seq10429);
var seq10429__$1 = cljs.core.next.call(null,seq10429);
return intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic(G__10430,seq10429__$1);
});
intolambda.utils.get_in_ext_link = (function intolambda$utils$get_in_ext_link(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10436 = arguments.length;
var i__7514__auto___10437 = (0);
while(true){
if((i__7514__auto___10437 < len__7513__auto___10436)){
args__7520__auto__.push((arguments[i__7514__auto___10437]));

var G__10438 = (i__7514__auto___10437 + (1));
i__7514__auto___10437 = G__10438;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic = (function (text,class$){
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_.call(null,text))){
if(clojure.string.starts_with_QMARK_.call(null,text,"www")){
return [cljs.core.str("http://"),cljs.core.str(text)].join('');
} else {
return text;
}
} else {
return [cljs.core.str("#"),cljs.core.str(text)].join('');
}
});

intolambda.utils.get_in_ext_link.cljs$lang$maxFixedArity = (1);

intolambda.utils.get_in_ext_link.cljs$lang$applyTo = (function (seq10434){
var G__10435 = cljs.core.first.call(null,seq10434);
var seq10434__$1 = cljs.core.next.call(null,seq10434);
return intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic(G__10435,seq10434__$1);
});
intolambda.utils.build_link = (function intolambda$utils$build_link(text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mdl-color-text--accent","a.mdl-color-text--accent",-1692326771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null),text], null);
});
intolambda.utils.get_text_or_link = (function intolambda$utils$get_text_or_link(text,class$){
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_.call(null,text))){
return intolambda.utils.build_link.call(null,text,[cljs.core.str(intolambda.utils.get_in_ext_link.call(null,text,class$))].join(''));
} else {
return intolambda.utils.make_classy_div.call(null,text,class$);
}
});
intolambda.utils.icon_text_line = (function intolambda$utils$icon_text_line(var_args){
var args10439 = [];
var len__7513__auto___10442 = arguments.length;
var i__7514__auto___10443 = (0);
while(true){
if((i__7514__auto___10443 < len__7513__auto___10442)){
args10439.push((arguments[i__7514__auto___10443]));

var G__10444 = (i__7514__auto___10443 + (1));
i__7514__auto___10443 = G__10444;
continue;
} else {
}
break;
}

var G__10441 = args10439.length;
switch (G__10441) {
case 3:
return intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10439.length)].join('')));

}
});

intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$3 = (function (icon,text,class$){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__link-list.with-padding","div.mdl-mini-footer__link-list.with-padding",18297917),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),icon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),intolambda.utils.get_text_or_link.call(null,"",class$),intolambda.utils.get_text_or_link.call(null,text,null),intolambda.utils.get_text_or_link.call(null,"",class$)], null);
});

intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$2 = (function (icon,text){
return intolambda.utils.icon_text_line.call(null,icon,text,null);
});

intolambda.utils.icon_text_line.cljs$lang$maxFixedArity = 3;
intolambda.utils.icon_link = (function intolambda$utils$icon_link(icon,text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__link-list","div.mdl-mini-footer__link-list",-1422081826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),intolambda.utils.build_link.call(null,text,link)], null)], null);
});
intolambda.utils.build_checkbox = (function intolambda$utils$build_checkbox(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10450 = arguments.length;
var i__7514__auto___10451 = (0);
while(true){
if((i__7514__auto___10451 < len__7513__auto___10450)){
args__7520__auto__.push((arguments[i__7514__auto___10451]));

var G__10452 = (i__7514__auto___10451 + (1));
i__7514__auto___10451 = G__10452;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (name,label,on_click_fn,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-checkbox.mdl-js-checkbox","label.mdl-checkbox.mdl-js-checkbox",1697693677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),name,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-checkbox__input","input.mdl-checkbox__input",959709492),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(args)){
return on_click_fn.call(null,name,cljs.core.first.call(null,args));
} else {
return on_click_fn.call(null,name);
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-checkbox__label.mdl-color-text--primary","span.mdl-checkbox__label.mdl-color-text--primary",110322867),label], null)], null)], null);
});

intolambda.utils.build_checkbox.cljs$lang$maxFixedArity = (3);

intolambda.utils.build_checkbox.cljs$lang$applyTo = (function (seq10446){
var G__10447 = cljs.core.first.call(null,seq10446);
var seq10446__$1 = cljs.core.next.call(null,seq10446);
var G__10448 = cljs.core.first.call(null,seq10446__$1);
var seq10446__$2 = cljs.core.next.call(null,seq10446__$1);
var G__10449 = cljs.core.first.call(null,seq10446__$2);
var seq10446__$3 = cljs.core.next.call(null,seq10446__$2);
return intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__10447,G__10448,G__10449,seq10446__$3);
});
intolambda.utils.build_speaker_box = (function intolambda$utils$build_speaker_box(speaker){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone","div.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone",-260031874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash_coll.call(null,speaker),new cljs.core.Keyword(null,"on-click","on-click",1632826543),intolambda.utils.nav_and_hack.call(null,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(speaker),"speaker",intolambda.utils.check_checkbox),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.avatar","img.avatar",-1920816984),(function (){var and__6443__auto__ = new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(speaker);
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("images/speakers/"),cljs.core.str(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(speaker))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null);
} else {
return and__6443__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mdl-color-text--secondary","h4.mdl-color-text--secondary",-1433121641),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(speaker)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(speaker)], null)], null);
});
intolambda.utils.build_sponsor_box = (function intolambda$utils$build_sponsor_box(sponsor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--3-col.mdl-cell--3-col-tablet.mdl-cell--4-col-phone","div.mdl-cell.mdl-cell--3-col.mdl-cell--3-col-tablet.mdl-cell--4-col-phone",1287024698),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash_coll.call(null,sponsor),new cljs.core.Keyword(null,"on-click","on-click",1632826543),intolambda.utils.nav_and_hack.call(null,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(sponsor),"sponsor",intolambda.utils.check_checkbox),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.avatar","img.avatar",-1920816984),(function (){var and__6443__auto__ = new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(sponsor);
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("images/sponsors/"),cljs.core.str(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(sponsor))].join('')], null);
} else {
return and__6443__auto__;
}
})()], null)], null);
});
intolambda.utils.build_contributor_box = (function intolambda$utils$build_contributor_box(contributor,cont_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-cell.mdl-cell--middle.mdl-cell--3-col.mdl-cell--2-col-tablet.mdl-cell--2-col-phone","div.mdl-cell.mdl-cell--middle.mdl-cell--3-col.mdl-cell--2-col-tablet.mdl-cell--2-col-phone",-168207448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash_coll.call(null,contributor)], null),intolambda.utils.build_checkbox.call(null,contributor,contributor,cont_fn)], null);
});
intolambda.utils.display_grid = (function intolambda$utils$display_grid(title,item_list,f){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-content","div.page-content",-2018247837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.dark-primary-color.text-primary-color","h3.dark-primary-color.text-primary-color",1044969238),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-grid.mdl-grid.center-component.mdl-color-text--primary","div.content-grid.mdl-grid.center-component.mdl-color-text--primary",785846422),cljs.core.map.call(null,(function (p1__10453_SHARP_){
return f.call(null,p1__10453_SHARP_);
}),item_list)], null)], null);
});
intolambda.utils.navigate = (function intolambda$utils$navigate(nav_link){
var section_fn = (function (){
intolambda.utils.show_element.call(null,clojure.string.replace.call(null,nav_link,/#/,""));

return document.location = nav_link;
});
var link_fn = ((function (section_fn){
return (function (){
return document.location = nav_link;
});})(section_fn))
;
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_.call(null,nav_link))){
return link_fn;
} else {
if(cljs.core.truth_(intolambda.utils.is_section_QMARK_.call(null,nav_link))){
return section_fn;
} else {
return null;
}
}
});
intolambda.utils.nav_and_hack = (function intolambda$utils$nav_and_hack(nav_link,id,f){
return (function (){
intolambda.utils.navigate.call(null,nav_link).call(null);

return f.call(null,id);
});
});

//# sourceMappingURL=utils.js.map