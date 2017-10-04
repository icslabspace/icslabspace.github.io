// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12784,handler){
var map__12785 = p__12784;
var map__12785__$1 = ((((!((map__12785 == null)))?((((map__12785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12785):map__12785);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12785__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12785__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12785__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12785__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12785__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12785__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12785__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12785,map__12785__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12783_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12783_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12785,map__12785__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___12793 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___12793)){
var response_type_12794 = temp__4425__auto___12793;
this$__$1.responseType = cljs.core.name(response_type_12794);
} else {
}

var seq__12787_12795 = cljs.core.seq(headers);
var chunk__12788_12796 = null;
var count__12789_12797 = (0);
var i__12790_12798 = (0);
while(true){
if((i__12790_12798 < count__12789_12797)){
var vec__12791_12799 = chunk__12788_12796.cljs$core$IIndexed$_nth$arity$2(null,i__12790_12798);
var k_12800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791_12799,(0),null);
var v_12801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791_12799,(1),null);
this$__$1.setRequestHeader(k_12800,v_12801);

var G__12802 = seq__12787_12795;
var G__12803 = chunk__12788_12796;
var G__12804 = count__12789_12797;
var G__12805 = (i__12790_12798 + (1));
seq__12787_12795 = G__12802;
chunk__12788_12796 = G__12803;
count__12789_12797 = G__12804;
i__12790_12798 = G__12805;
continue;
} else {
var temp__4425__auto___12806 = cljs.core.seq(seq__12787_12795);
if(temp__4425__auto___12806){
var seq__12787_12807__$1 = temp__4425__auto___12806;
if(cljs.core.chunked_seq_QMARK_(seq__12787_12807__$1)){
var c__7258__auto___12808 = cljs.core.chunk_first(seq__12787_12807__$1);
var G__12809 = cljs.core.chunk_rest(seq__12787_12807__$1);
var G__12810 = c__7258__auto___12808;
var G__12811 = cljs.core.count(c__7258__auto___12808);
var G__12812 = (0);
seq__12787_12795 = G__12809;
chunk__12788_12796 = G__12810;
count__12789_12797 = G__12811;
i__12790_12798 = G__12812;
continue;
} else {
var vec__12792_12813 = cljs.core.first(seq__12787_12807__$1);
var k_12814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792_12813,(0),null);
var v_12815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792_12813,(1),null);
this$__$1.setRequestHeader(k_12814,v_12815);

var G__12816 = cljs.core.next(seq__12787_12807__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12787_12795 = G__12816;
chunk__12788_12796 = G__12817;
count__12789_12797 = G__12818;
i__12790_12798 = G__12819;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6455__auto__ = body;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
