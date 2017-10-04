// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.utils');
goog.require('cljs.core');
goog.require('clojure.string');
intolambda.utils.load_element = (function intolambda$utils$load_element(id){
return document.getElementById(id);
});
intolambda.utils.show_element = (function intolambda$utils$show_element(var_args){
var args13661 = [];
var len__7513__auto___13664 = arguments.length;
var i__7514__auto___13665 = (0);
while(true){
if((i__7514__auto___13665 < len__7513__auto___13664)){
args13661.push((arguments[i__7514__auto___13665]));

var G__13666 = (i__7514__auto___13665 + (1));
i__7514__auto___13665 = G__13666;
continue;
} else {
}
break;
}

var G__13663 = args13661.length;
switch (G__13663) {
case 1:
return intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13661.length)].join('')));

}
});

intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$1 = (function (id){
return intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2(id,false);
});

intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2 = (function (id,val){
var element = intolambda.utils.load_element(id);
return element.hidden = val;
});

intolambda.utils.show_element.cljs$lang$maxFixedArity = 2;
intolambda.utils.is_checked = (function intolambda$utils$is_checked(id){
return intolambda.utils.load_element(id).checked;
});
intolambda.utils.set_checkbox_flag = (function intolambda$utils$set_checkbox_flag(id,flag){
var element = intolambda.utils.load_element(id);
var was_checked = element.checked;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,was_checked))){
return element.click();
} else {
return null;
}
});
intolambda.utils.check_checkbox = (function intolambda$utils$check_checkbox(id){
var element = intolambda.utils.load_element(id);
var was_checked = element.checked;
if(cljs.core.not(was_checked)){
return element.click();
} else {
return null;
}
});
intolambda.utils.is_link_QMARK_ = (function intolambda$utils$is_link_QMARK_(text){
if(cljs.core.truth_(text)){
return (clojure.string.starts_with_QMARK_(text,"www")) || (clojure.string.starts_with_QMARK_(text,"http")) || (clojure.string.starts_with_QMARK_(text,"/"));
} else {
return null;
}
});
intolambda.utils.is_section_QMARK_ = (function intolambda$utils$is_section_QMARK_(text){
if(cljs.core.truth_(text)){
return clojure.string.starts_with_QMARK_(text,"#");
} else {
return null;
}
});
intolambda.utils.make_classy_div = (function intolambda$utils$make_classy_div(var_args){
var args__7520__auto__ = [];
var len__7513__auto___13670 = arguments.length;
var i__7514__auto___13671 = (0);
while(true){
if((i__7514__auto___13671 < len__7513__auto___13670)){
args__7520__auto__.push((arguments[i__7514__auto___13671]));

var G__13672 = (i__7514__auto___13671 + (1));
i__7514__auto___13671 = G__13672;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic = (function (text,class$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.first(class$)], null),text], null);
});

intolambda.utils.make_classy_div.cljs$lang$maxFixedArity = (1);

intolambda.utils.make_classy_div.cljs$lang$applyTo = (function (seq13668){
var G__13669 = cljs.core.first(seq13668);
var seq13668__$1 = cljs.core.next(seq13668);
return intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic(G__13669,seq13668__$1);
});
intolambda.utils.get_in_ext_link = (function intolambda$utils$get_in_ext_link(var_args){
var args__7520__auto__ = [];
var len__7513__auto___13675 = arguments.length;
var i__7514__auto___13676 = (0);
while(true){
if((i__7514__auto___13676 < len__7513__auto___13675)){
args__7520__auto__.push((arguments[i__7514__auto___13676]));

var G__13677 = (i__7514__auto___13676 + (1));
i__7514__auto___13676 = G__13677;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic = (function (text,class$){
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_(text))){
if(clojure.string.starts_with_QMARK_(text,"www")){
return [cljs.core.str("http://"),cljs.core.str(text)].join('');
} else {
return text;
}
} else {
return [cljs.core.str("#"),cljs.core.str(text)].join('');
}
});

intolambda.utils.get_in_ext_link.cljs$lang$maxFixedArity = (1);

intolambda.utils.get_in_ext_link.cljs$lang$applyTo = (function (seq13673){
var G__13674 = cljs.core.first(seq13673);
var seq13673__$1 = cljs.core.next(seq13673);
return intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic(G__13674,seq13673__$1);
});
intolambda.utils.build_link = (function intolambda$utils$build_link(text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$mdl_DASH_color_DASH_text_DASH__DASH_accent,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,link], null),text], null);
});
intolambda.utils.get_text_or_link = (function intolambda$utils$get_text_or_link(text,class$){
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_(text))){
return intolambda.utils.build_link(text,[cljs.core.str(intolambda.utils.get_in_ext_link.cljs$core$IFn$_invoke$arity$variadic(text,cljs.core.array_seq([class$], 0)))].join(''));
} else {
return intolambda.utils.make_classy_div.cljs$core$IFn$_invoke$arity$variadic(text,cljs.core.array_seq([class$], 0));
}
});
intolambda.utils.icon_text_line = (function intolambda$utils$icon_text_line(var_args){
var args13678 = [];
var len__7513__auto___13681 = arguments.length;
var i__7514__auto___13682 = (0);
while(true){
if((i__7514__auto___13682 < len__7513__auto___13681)){
args13678.push((arguments[i__7514__auto___13682]));

var G__13683 = (i__7514__auto___13682 + (1));
i__7514__auto___13682 = G__13683;
continue;
} else {
}
break;
}

var G__13680 = args13678.length;
switch (G__13680) {
case 3:
return intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13678.length)].join('')));

}
});

intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$3 = (function (icon,text,class$){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_mini_DASH_footer__link_DASH_list$with_DASH_padding,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,icon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),intolambda.utils.get_text_or_link("",class$),intolambda.utils.get_text_or_link(text,null),intolambda.utils.get_text_or_link("",class$)], null);
});

intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$2 = (function (icon,text){
return intolambda.utils.icon_text_line.cljs$core$IFn$_invoke$arity$3(icon,text,null);
});

intolambda.utils.icon_text_line.cljs$lang$maxFixedArity = 3;
intolambda.utils.icon_link = (function intolambda$utils$icon_link(icon,text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_mini_DASH_footer__link_DASH_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,intolambda.utils.build_link(text,link)], null)], null);
});
intolambda.utils.build_checkbox = (function intolambda$utils$build_checkbox(var_args){
var args__7520__auto__ = [];
var len__7513__auto___13691 = arguments.length;
var i__7514__auto___13692 = (0);
while(true){
if((i__7514__auto___13692 < len__7513__auto___13691)){
args__7520__auto__.push((arguments[i__7514__auto___13692]));

var G__13693 = (i__7514__auto___13692 + (1));
i__7514__auto___13692 = G__13693;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (name,label,on_click_fn,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$mdl_DASH_checkbox$mdl_DASH_js_DASH_checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,name,cljs.core.cst$kw$key,cljs.core.hash(name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$mdl_DASH_checkbox__input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,name,cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_(args)){
var G__13689 = name;
var G__13690 = cljs.core.first(args);
return (on_click_fn.cljs$core$IFn$_invoke$arity$2 ? on_click_fn.cljs$core$IFn$_invoke$arity$2(G__13689,G__13690) : on_click_fn.call(null,G__13689,G__13690));
} else {
return (on_click_fn.cljs$core$IFn$_invoke$arity$1 ? on_click_fn.cljs$core$IFn$_invoke$arity$1(name) : on_click_fn.call(null,name));
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mdl_DASH_checkbox__label$mdl_DASH_color_DASH_text_DASH__DASH_primary,label], null)], null)], null);
});

intolambda.utils.build_checkbox.cljs$lang$maxFixedArity = (3);

intolambda.utils.build_checkbox.cljs$lang$applyTo = (function (seq13685){
var G__13686 = cljs.core.first(seq13685);
var seq13685__$1 = cljs.core.next(seq13685);
var G__13687 = cljs.core.first(seq13685__$1);
var seq13685__$2 = cljs.core.next(seq13685__$1);
var G__13688 = cljs.core.first(seq13685__$2);
var seq13685__$3 = cljs.core.next(seq13685__$2);
return intolambda.utils.build_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__13686,G__13687,G__13688,seq13685__$3);
});
intolambda.utils.build_speaker_box = (function intolambda$utils$build_speaker_box(speaker){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_3_DASH_col$mdl_DASH_cell_DASH__DASH_4_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_4_DASH_col_DASH_phone,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.hash_coll(speaker),cljs.core.cst$kw$on_DASH_click,(function (){var G__13697 = cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(speaker);
var G__13698 = "speaker";
var G__13699 = intolambda.utils.check_checkbox;
return (intolambda.utils.nav_and_hack.cljs$core$IFn$_invoke$arity$3 ? intolambda.utils.nav_and_hack.cljs$core$IFn$_invoke$arity$3(G__13697,G__13698,G__13699) : intolambda.utils.nav_and_hack.call(null,G__13697,G__13698,G__13699));
})(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$avatar,(function (){var and__6443__auto__ = cljs.core.cst$kw$avatar.cljs$core$IFn$_invoke$arity$1(speaker);
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str("images/speakers/"),cljs.core.str(cljs.core.cst$kw$avatar.cljs$core$IFn$_invoke$arity$1(speaker))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_radius,"50%"], null)], null);
} else {
return and__6443__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$mdl_DASH_color_DASH_text_DASH__DASH_secondary,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(speaker)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(speaker)], null)], null);
});
intolambda.utils.build_sponsor_box = (function intolambda$utils$build_sponsor_box(sponsor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_3_DASH_col$mdl_DASH_cell_DASH__DASH_3_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_4_DASH_col_DASH_phone,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.hash_coll(sponsor),cljs.core.cst$kw$on_DASH_click,(function (){var G__13703 = cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(sponsor);
var G__13704 = "sponsor";
var G__13705 = intolambda.utils.check_checkbox;
return (intolambda.utils.nav_and_hack.cljs$core$IFn$_invoke$arity$3 ? intolambda.utils.nav_and_hack.cljs$core$IFn$_invoke$arity$3(G__13703,G__13704,G__13705) : intolambda.utils.nav_and_hack.call(null,G__13703,G__13704,G__13705));
})(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$avatar,(function (){var and__6443__auto__ = cljs.core.cst$kw$avatar.cljs$core$IFn$_invoke$arity$1(sponsor);
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str("images/sponsors/"),cljs.core.str(cljs.core.cst$kw$avatar.cljs$core$IFn$_invoke$arity$1(sponsor))].join('')], null);
} else {
return and__6443__auto__;
}
})()], null)], null);
});
intolambda.utils.build_contributor_box = (function intolambda$utils$build_contributor_box(contributor,cont_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_cell$mdl_DASH_cell_DASH__DASH_middle$mdl_DASH_cell_DASH__DASH_3_DASH_col$mdl_DASH_cell_DASH__DASH_2_DASH_col_DASH_tablet$mdl_DASH_cell_DASH__DASH_2_DASH_col_DASH_phone,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash_coll(contributor)], null),intolambda.utils.build_checkbox(contributor,contributor,cont_fn)], null);
});
intolambda.utils.display_grid = (function intolambda$utils$display_grid(title,item_list,f){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$dark_DASH_primary_DASH_color$text_DASH_primary_DASH_color,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content_DASH_grid$mdl_DASH_grid$center_DASH_component$mdl_DASH_color_DASH_text_DASH__DASH_primary,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13706_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__13706_SHARP_) : f.call(null,p1__13706_SHARP_));
}),item_list)], null)], null);
});
intolambda.utils.navigate = (function intolambda$utils$navigate(nav_link){
var section_fn = (function (){
intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(nav_link,/#/,""));

return document.location = nav_link;
});
var link_fn = ((function (section_fn){
return (function (){
return document.location = nav_link;
});})(section_fn))
;
if(cljs.core.truth_(intolambda.utils.is_link_QMARK_(nav_link))){
return link_fn;
} else {
if(cljs.core.truth_(intolambda.utils.is_section_QMARK_(nav_link))){
return section_fn;
} else {
return null;
}
}
});
intolambda.utils.nav_and_hack = (function intolambda$utils$nav_and_hack(nav_link,id,f){
return (function (){
intolambda.utils.navigate(nav_link).call(null);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(id) : f.call(null,id));
});
});
