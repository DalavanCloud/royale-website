/**
 * Generated by Apache Royale Compiler from org\apache\royale\states\ItemAndDescriptor.as
 * org.apache.royale.states.ItemAndDescriptor
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.states.ItemAndDescriptor');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 */
org.apache.royale.states.ItemAndDescriptor = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.states.ItemAndDescriptor', org.apache.royale.states.ItemAndDescriptor);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.states.ItemAndDescriptor.prototype.items;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.states.ItemAndDescriptor.prototype.descriptor;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.states.ItemAndDescriptor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemAndDescriptor', qName: 'org.apache.royale.states.ItemAndDescriptor', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.states.ItemAndDescriptor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'items': { type: 'Object'},
        'descriptor': { type: 'Array'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ItemAndDescriptor': { type: '', declaredBy: 'org.apache.royale.states.ItemAndDescriptor'}
      };
    },
    metadata: function () { return [  ]; }
  };
};