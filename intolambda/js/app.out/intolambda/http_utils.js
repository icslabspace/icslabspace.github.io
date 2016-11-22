// Compiled by ClojureScript 1.7.228 {}
goog.provide('intolambda.http_utils');
goog.require('cljs.core');
goog.require('ajax.core');
intolambda.http_utils.cljs__GT_json = (function intolambda$http_utils$cljs__GT_json(data){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data));
});
intolambda.http_utils.call_get = (function intolambda$http_utils$call_get(url,handler_fn,error_handler_fn){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler_fn,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false], null));
});
intolambda.http_utils.call_post = (function intolambda$http_utils$call_post(url,message_map,handler_fn,error_handler_fn){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),intolambda.http_utils.cljs__GT_json.call(null,message_map)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),handler_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler_fn,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});

//# sourceMappingURL=http_utils.js.map