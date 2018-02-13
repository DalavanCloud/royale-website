/**
 * Generated by Apache Royale Compiler from org\apache\royale\states\SetProperty.as
 * org.apache.royale.states.SetProperty
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.states.SetProperty');

goog.require('org.apache.royale.core.IDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 * @implements {org.apache.royale.core.IDocument}
 */
org.apache.royale.states.SetProperty = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.states.SetProperty', org.apache.royale.states.SetProperty);


/**
 * @export
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.target;


/**
 * @export
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.name;


/**
 * @export
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.value;


/**
 * @export
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.previousValue;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.states.SetProperty.prototype.document;


/**
 * @export
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.states.SetProperty.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @asprivate 
 * Initialize this object from a descriptor.
 * @export
 * @param {Object} properties
 * @return {Object}
 */
org.apache.royale.states.SetProperty.prototype.initializeFromObject = function(properties) {
  for (var /** @type {string} */ p in properties) {
    this[p] = properties[p];
  }
  return Object(this);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.states.SetProperty.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SetProperty', qName: 'org.apache.royale.states.SetProperty', kind: 'class' }], interfaces: [org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.states.SetProperty.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'target': { type: 'String'},
        'name': { type: 'String'},
        'value': { type: '*'},
        'previousValue': { type: '*'},
        'document': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'SetProperty': { type: '', declaredBy: 'org.apache.royale.states.SetProperty'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.states.SetProperty', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: true } ]; }},
        'initializeFromObject': { type: 'Object', declaredBy: 'org.apache.royale.states.SetProperty', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};