'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_immutable=require('immutable'),_immutable2=_interopRequireDefault(_immutable);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var






Store=function(){






function a(b){_classCallCheck(this,a),

this.getInitialState=this.getInitialState.bind(this),
this.initialState=this.initialState.bind(this),
this.onAction=this.onAction.bind(this),


this.state=(0,_immutable.Map)(),
this.name=(b||'store').toLowerCase();
}return _createClass(a,[{key:'getInitialState',value:function getInitialState()






{
return _immutable2.default.fromJS(this.initialState()||{});
}},{key:'initialState',value:function initialState()






{
return{};
}},{key:'onAction',value:function onAction(a,b,c)









{
return c;
}}]),a}();exports.default=Store;