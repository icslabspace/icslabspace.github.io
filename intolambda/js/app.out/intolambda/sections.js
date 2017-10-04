// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.sections');
goog.require('cljs.core');
goog.require('intolambda.registration');
goog.require('intolambda.contribution');
goog.require('intolambda.utils');
intolambda.sections.home = (function intolambda$sections$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content$intolambda_DASH_center_DASH_align,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"bg"], null)], null)], null);
});
intolambda.sections.the_challenge = (function intolambda$sections$the_challenge(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"the-challenge"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$dark_DASH_primary_DASH_color$text_DASH_primary_DASH_color,"the challenge"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mdl_DASH_color_DASH_text_DASH__DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$thick,"into-lambda"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," is a new challenging event in the functional programming environment in Romania."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The journey starts with some enlightening talks given by "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$mdl_DASH_color_DASH_text_DASH__DASH_teal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#speakers"], null),"our experts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," which trigger your intuition and curiosity for the hackathon that will follow."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Grouped in ad-hoc organized teams, you will then join the venture of designing and implementing a new API while improving your Clojure skills and having fun."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$thick,"More details will be available soon!"], null)], null)], null)], null);
});
intolambda.sections.registration = (function intolambda$sections$registration(registration_form_fields,initial_challenge,state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"register"], null),intolambda.registration.register(registration_form_fields,initial_challenge,state)], null);
});
intolambda.sections.speakers = (function intolambda$sections$speakers(speaker_list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"speakers"], null),intolambda.utils.display_grid("speakers",speaker_list,intolambda.utils.build_speaker_box)], null);
});
intolambda.sections.sponsors = (function intolambda$sections$sponsors(sponsor_list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sponsors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,intolambda.utils.display_grid("sponsors",sponsor_list,intolambda.utils.build_sponsor_box)], null)], null);
});
intolambda.sections.contributors = (function intolambda$sections$contributors(roles,contributors__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"contributors",cljs.core.cst$kw$hidden,true], null),intolambda.contribution.contribution_component(roles,contributors__$1,(function (){
intolambda.utils.show_element.cljs$core$IFn$_invoke$arity$2("contributors",true);

return intolambda.contribution.clear_selections(roles);
}))], null);
});
