/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\ValueEvent.as
 * org.apache.royale.events.ValueEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.ValueEvent');

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
 * @param {Object=} value
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.events.ValueEvent = function(type, value, bubbles, cancelable) {
  value = typeof value !== 'undefined' ? value : null;
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  org.apache.royale.events.ValueEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.value = value;
};
goog.inherits(org.apache.royale.events.ValueEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.ValueEvent', org.apache.royale.events.ValueEvent);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.ValueEvent.prototype.value;


/**
 * Create a copy/clone of the ValueEvent object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.ValueEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.events.ValueEvent(this.type, this.value, this.bubbles, this.cancelable);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.ValueEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ValueEvent', qName: 'org.apache.royale.events.ValueEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.ValueEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'value': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ValueEvent': { type: '', declaredBy: 'org.apache.royale.events.ValueEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Boolean', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.ValueEvent'}
      };
    }
  };
};