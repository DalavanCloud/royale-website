/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IValuesImpl.as
 * org.apache.royale.core.IValuesImpl
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IValuesImpl');




/**
 * @interface
 */
org.apache.royale.core.IValuesImpl = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IValuesImpl', org.apache.royale.core.IValuesImpl);
org.apache.royale.core.IValuesImpl.prototype.getValue = function(thisObject, valueName, state, attrs) {
};
org.apache.royale.core.IValuesImpl.prototype.newInstance = function(thisObject, valueName, state, attrs) {
};
org.apache.royale.core.IValuesImpl.prototype.getInstance = function(valueName) {
};
org.apache.royale.core.IValuesImpl.prototype.init = function(mainClass) {
};
org.apache.royale.core.IValuesImpl.prototype.convertColor = function(value) {
};
org.apache.royale.core.IValuesImpl.prototype.parseStyles = function(value) {
};
org.apache.royale.core.IValuesImpl.prototype.addRule = function(ruleName, values) {
};
org.apache.royale.core.IValuesImpl.prototype.applyStyles = function(instance, styles) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IValuesImpl.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IValuesImpl', qName: 'org.apache.royale.core.IValuesImpl', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IValuesImpl.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'getValue': { type: '*', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'String', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'newInstance': { type: '*', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'String', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'getInstance': { type: 'Object', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'init': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'convertColor': { type: 'uint', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'parseStyles': { type: 'Object', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'addRule': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: false } ]; }},
        'applyStyles': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IUIBase', optional: false },{ index: 2, type: 'Object', optional: false } ]; }}
      };
    }
  };
};