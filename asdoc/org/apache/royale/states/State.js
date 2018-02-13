/**
 * Generated by Apache Royale Compiler from org\apache\royale\states\State.as
 * org.apache.royale.states.State
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.states.State');



/**
 *  Constructor.
 *  
 *  @asparam properties This parameter is not used in Royale and exists to make legacy compilers happy.
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 * @param {Object=} properties
 */
org.apache.royale.states.State = function(properties) {
  properties = typeof properties !== 'undefined' ? properties : null;
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.states.State', org.apache.royale.states.State);


/**
 * @export
 * @type {string}
 */
org.apache.royale.states.State.prototype.name;


/**
 * @export
 * @type {string}
 */
org.apache.royale.states.State.prototype.stateGroups;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.states.State.prototype.overrides;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.states.State.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'State', qName: 'org.apache.royale.states.State', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.states.State.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'name': { type: 'String'},
        'stateGroups': { type: 'String'},
        'overrides': { type: 'Array'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'State': { type: '', declaredBy: 'org.apache.royale.states.State', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }}
      };
    }
  };
};