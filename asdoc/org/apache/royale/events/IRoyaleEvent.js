/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\IRoyaleEvent.as
 * org.apache.royale.events.IRoyaleEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.IRoyaleEvent');



/**
 * @interface
 */
org.apache.royale.events.IRoyaleEvent = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.IRoyaleEvent', org.apache.royale.events.IRoyaleEvent);
org.apache.royale.events.IRoyaleEvent.prototype.cloneEvent = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.IRoyaleEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IRoyaleEvent', qName: 'org.apache.royale.events.IRoyaleEvent', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.IRoyaleEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.IRoyaleEvent'}
      };
    }
  };
};