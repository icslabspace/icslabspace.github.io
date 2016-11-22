// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10161_10175 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10162_10176 = null;
var count__10163_10177 = (0);
var i__10164_10178 = (0);
while(true){
if((i__10164_10178 < count__10163_10177)){
var f_10179 = cljs.core._nth.call(null,chunk__10162_10176,i__10164_10178);
cljs.core.println.call(null,"  ",f_10179);

var G__10180 = seq__10161_10175;
var G__10181 = chunk__10162_10176;
var G__10182 = count__10163_10177;
var G__10183 = (i__10164_10178 + (1));
seq__10161_10175 = G__10180;
chunk__10162_10176 = G__10181;
count__10163_10177 = G__10182;
i__10164_10178 = G__10183;
continue;
} else {
var temp__4425__auto___10184 = cljs.core.seq.call(null,seq__10161_10175);
if(temp__4425__auto___10184){
var seq__10161_10185__$1 = temp__4425__auto___10184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10161_10185__$1)){
var c__7258__auto___10186 = cljs.core.chunk_first.call(null,seq__10161_10185__$1);
var G__10187 = cljs.core.chunk_rest.call(null,seq__10161_10185__$1);
var G__10188 = c__7258__auto___10186;
var G__10189 = cljs.core.count.call(null,c__7258__auto___10186);
var G__10190 = (0);
seq__10161_10175 = G__10187;
chunk__10162_10176 = G__10188;
count__10163_10177 = G__10189;
i__10164_10178 = G__10190;
continue;
} else {
var f_10191 = cljs.core.first.call(null,seq__10161_10185__$1);
cljs.core.println.call(null,"  ",f_10191);

var G__10192 = cljs.core.next.call(null,seq__10161_10185__$1);
var G__10193 = null;
var G__10194 = (0);
var G__10195 = (0);
seq__10161_10175 = G__10192;
chunk__10162_10176 = G__10193;
count__10163_10177 = G__10194;
i__10164_10178 = G__10195;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10196 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10196);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10196)))?cljs.core.second.call(null,arglists_10196):arglists_10196));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10166 = null;
var count__10167 = (0);
var i__10168 = (0);
while(true){
if((i__10168 < count__10167)){
var vec__10169 = cljs.core._nth.call(null,chunk__10166,i__10168);
var name = cljs.core.nth.call(null,vec__10169,(0),null);
var map__10170 = cljs.core.nth.call(null,vec__10169,(1),null);
var map__10170__$1 = ((((!((map__10170 == null)))?((((map__10170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10170):map__10170);
var doc = cljs.core.get.call(null,map__10170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10197 = seq__10165;
var G__10198 = chunk__10166;
var G__10199 = count__10167;
var G__10200 = (i__10168 + (1));
seq__10165 = G__10197;
chunk__10166 = G__10198;
count__10167 = G__10199;
i__10168 = G__10200;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10165);
if(temp__4425__auto__){
var seq__10165__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10165__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__10165__$1);
var G__10201 = cljs.core.chunk_rest.call(null,seq__10165__$1);
var G__10202 = c__7258__auto__;
var G__10203 = cljs.core.count.call(null,c__7258__auto__);
var G__10204 = (0);
seq__10165 = G__10201;
chunk__10166 = G__10202;
count__10167 = G__10203;
i__10168 = G__10204;
continue;
} else {
var vec__10172 = cljs.core.first.call(null,seq__10165__$1);
var name = cljs.core.nth.call(null,vec__10172,(0),null);
var map__10173 = cljs.core.nth.call(null,vec__10172,(1),null);
var map__10173__$1 = ((((!((map__10173 == null)))?((((map__10173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10173):map__10173);
var doc = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10205 = cljs.core.next.call(null,seq__10165__$1);
var G__10206 = null;
var G__10207 = (0);
var G__10208 = (0);
seq__10165 = G__10205;
chunk__10166 = G__10206;
count__10167 = G__10207;
i__10168 = G__10208;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map