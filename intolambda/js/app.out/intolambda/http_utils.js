// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('intolambda.http_utils');
goog.require('cljs.core');
goog.require('ajax.core');
intolambda.http_utils.cljs__GT_json = (function intolambda$http_utils$cljs__GT_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
intolambda.http_utils.call_get = (function intolambda$http_utils$call_get(url,handler_fn,error_handler_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handler,handler_fn,cljs.core.cst$kw$error_DASH_handler,error_handler_fn,cljs.core.cst$kw$with_DASH_credentials,false], null)], 0));
});
intolambda.http_utils.call_post = (function intolambda$http_utils$call_post(url,message_map,handler_fn,error_handler_fn){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,intolambda.http_utils.cljs__GT_json(message_map)], null),cljs.core.cst$kw$handler,handler_fn,cljs.core.cst$kw$error_DASH_handler,error_handler_fn,cljs.core.cst$kw$format,cljs.core.cst$kw$json], null)], 0));
});
