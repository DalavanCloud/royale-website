/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\EventDispatcher.as
 * org.apache.royale.events.EventDispatcher
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.EventDispatcher');

goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.IEventDispatcher');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @param {org.apache.royale.events.IEventDispatcher=} target
 */
org.apache.royale.events.EventDispatcher = function(target) {
  org.apache.royale.events.EventDispatcher.base(this, 'constructor');
  target = typeof target !== 'undefined' ? target : null;
  this._target = target || this;
};
goog.inherits(org.apache.royale.events.EventDispatcher, goog.events.EventTarget);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.EventDispatcher', org.apache.royale.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.events.EventDispatcher.prototype._target;


/**
 * @export
 * @param {string} type
 * @return {boolean}
 */
org.apache.royale.events.EventDispatcher.prototype.hasEventListener = function(type) {
  return goog.events.hasListener(this, type);
};


/**
 * @export
 * @override
 */
org.apache.royale.events.EventDispatcher.prototype.dispatchEvent = function(event) {
  try {
    if (event) {
      if (typeof(event) == "string") {
        event = new org.apache.royale.events.Event(org.apache.royale.utils.Language.as(event, String));
        event.target = this._target;
      } else if ("target" in event) {
        event.target = this._target;
      }
    }
    else
      return false;
    return org.apache.royale.events.EventDispatcher.superClass_.dispatchEvent.apply(this, [ event] );
  } catch (e) {
    if (e.name != "stopImmediatePropagation")
      throw e;
  }
  return false;
};


/**
 * @export
 * @return {string}
 */
org.apache.royale.events.EventDispatcher.prototype.toString = function() {
  return "EventDispatcher";
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.EventDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'EventDispatcher', qName: 'org.apache.royale.events.EventDispatcher', kind: 'class' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.EventDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'EventDispatcher': { type: '', declaredBy: 'org.apache.royale.events.EventDispatcher', parameters: function () { return [  { index: 1, type: 'org.apache.royale.events.IEventDispatcher', optional: true } ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.events.EventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.events.EventDispatcher', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.events.EventDispatcher'}
      };
    }
  };
};