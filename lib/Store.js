'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _immutable=require('immutable');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}var






Store=function(){






function Store(a){_classCallCheck(this,Store),
this.state=(0,_immutable.Map)(),
this.name=(a||'').toLowerCase();
}return _createClass(Store,[{key:'initialState',value:function initialState()





{
return(0,_immutable.Map)();
}},{key:'onAction',value:function onAction(









a,b,c){
return c;
}},{key:'setState',value:function setState(






a){
this.state=a;
}}]),Store}();exports.default=Store;