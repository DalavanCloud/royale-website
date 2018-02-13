/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\DetailEvent.as
 * org.apache.royale.events.DetailEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.DetailEvent');

goog.require('org.apache.royale.events.Event');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {string=} detail
 */
org.apache.royale.events.DetailEvent = function(type, bubbles, cancelable, detail) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  detail = typeof detail !== 'undefined' ? detail : null;
  org.apache.royale.events.DetailEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.detail = detail;
};
goog.inherits(org.apache.royale.events.DetailEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.DetailEvent', org.apache.royale.events.DetailEvent);


/**
 * @export
 * @type {string}
 */
org.apache.royale.events.DetailEvent.prototype.detail;


/**
 * Create a copy/clone of the DetailEvent object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.DetailEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.events.DetailEvent(this.type, this.bubbles, this.cancelable, this.detail);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.DetailEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DetailEvent', qName: 'org.apache.royale.events.DetailEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.DetailEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'detail': { type: 'String'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'DetailEvent': { type: '', declaredBy: 'org.apache.royale.events.DetailEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'String', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.DetailEvent'}
      };
    }
  };
};