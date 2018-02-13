/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\BrowserEvent.as
 * org.apache.royale.events.BrowserEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.BrowserEvent');

goog.require('org.apache.royale.events.getTargetWrapper');
goog.require('org.apache.royale.events.IBrowserEvent');



/**
 * @constructor
 * @implements {org.apache.royale.events.IBrowserEvent}
 */
org.apache.royale.events.BrowserEvent = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.BrowserEvent', org.apache.royale.events.BrowserEvent);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.wrappedEvent;


/**
 * @export
 * @param {goog.events.BrowserEvent} event
 */
org.apache.royale.events.BrowserEvent.prototype.wrapEvent = function(event) {
  this.wrappedEvent = event;
};


/**
 * The underlying browser event object.
 * (for debugging purposes)
 *
 * @asreturn The underlying browser event object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @return {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.wrappedEvent.getBrowserEvent();
};


/**
 * Tests to see which button was pressed during the event. This is really only
 * useful in IE and Gecko browsers. And in IE, it's only useful for
 * mousedown/mouseup events, because click only fires for the left mouse button.
 *
 * Safari 2 only reports the left button being clicked, and uses the value '1'
 * instead of 0. Opera only reports a mousedown event for the middle button, and
 * no mouse events for the right button. Opera has default behavior for left and
 * middle click that can only be overridden via a configuration setting.
 *
 * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
 *
 * @asparam button The button to test for.
 * @asreturn True if button was pressed.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @param {number} button
 * @return {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.isButton = function(button) {
  return this.wrappedEvent.isButton(button);
};


/**
 * Whether this has an "action"-producing mouse button.
 *
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 *
 * @asreturn The result.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @return {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.wrappedEvent.isMouseActionButton();
};


/**
 * Whether the default action has been prevented.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 */
org.apache.royale.events.BrowserEvent.prototype.preventDefault = function() {
  this.wrappedEvent.preventDefault();
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 */
org.apache.royale.events.BrowserEvent.prototype.stopImmediatePropagation = function() {
  this.wrappedEvent.getBrowserEvent().stopImmediatePropagation();
  this.wrappedEvent.stopPropagation();
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 */
org.apache.royale.events.BrowserEvent.prototype.stopPropagation = function() {
  this.wrappedEvent.stopPropagation();
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype._buttons = -1;


org.apache.royale.events.BrowserEvent.prototype.get__altKey = function() {
  return this.wrappedEvent.altKey;
};


org.apache.royale.events.BrowserEvent.prototype.get__button = function() {
  return this.wrappedEvent.button;
};


org.apache.royale.events.BrowserEvent.prototype.get__charCode = function() {
  return this.wrappedEvent.charCode;
};


org.apache.royale.events.BrowserEvent.prototype.get__clientX = function() {
  return this.wrappedEvent.clientX;
};


org.apache.royale.events.BrowserEvent.prototype.get__localX = function() {
  return this.clientX;
};


org.apache.royale.events.BrowserEvent.prototype.get__clientY = function() {
  return this.wrappedEvent.clientY;
};


org.apache.royale.events.BrowserEvent.prototype.get__localY = function() {
  return this.clientY;
};


org.apache.royale.events.BrowserEvent.prototype.get__ctrlKey = function() {
  return this.wrappedEvent.ctrlKey;
};


org.apache.royale.events.BrowserEvent.prototype.get__currentTarget = function() {
  return org.apache.royale.events.getTargetWrapper(this.wrappedEvent.currentTarget);
};


org.apache.royale.events.BrowserEvent.prototype.get__defaultPrevented = function() {
  return this.wrappedEvent.defaultPrevented;
};


org.apache.royale.events.BrowserEvent.prototype.get__keyCode = function() {
  return this.wrappedEvent.keyCode;
};


org.apache.royale.events.BrowserEvent.prototype.get__metaKey = function() {
  return this.wrappedEvent.metaKey;
};


org.apache.royale.events.BrowserEvent.prototype.get__offsetX = function() {
  return this.wrappedEvent.offsetX;
};


org.apache.royale.events.BrowserEvent.prototype.get__offsetY = function() {
  return this.wrappedEvent.offsetY;
};


org.apache.royale.events.BrowserEvent.prototype.get__platformModifierKey = function() {
  return this.platformModifierKey;
};


org.apache.royale.events.BrowserEvent.prototype.get__relatedTarget = function() {
  return org.apache.royale.events.getTargetWrapper(this.wrappedEvent.relatedTarget);
};


org.apache.royale.events.BrowserEvent.prototype.get__screenX = function() {
  return this.wrappedEvent.screenX;
};


org.apache.royale.events.BrowserEvent.prototype.get__screenY = function() {
  return this.wrappedEvent.screenY;
};


org.apache.royale.events.BrowserEvent.prototype.get__shiftKey = function() {
  return this.wrappedEvent.shiftKey;
};


org.apache.royale.events.BrowserEvent.prototype.get__state = function() {
  return this.wrappedEvent.state;
};


org.apache.royale.events.BrowserEvent.prototype.get__target = function() {
  return org.apache.royale.events.getTargetWrapper(this.wrappedEvent.target);
};


org.apache.royale.events.BrowserEvent.prototype.get__timestamp = function() {
  return this.wrappedEvent.timestamp;
};


org.apache.royale.events.BrowserEvent.prototype.get__type = function() {
  return this.wrappedEvent.type;
};


org.apache.royale.events.BrowserEvent.prototype.get__buttonDown = function() {
  if (this._buttons > -1)
    return this._buttons == 1;
  var /** @type {*} */ ev = this.wrappedEvent.getBrowserEvent();
  if ('buttons' in ev)
    return ev["buttons"] == 1;
  return ev["which"] == 1;
};


org.apache.royale.events.BrowserEvent.prototype.set__buttonDown = function(value) {
  this._buttons = value ? 1 : 0;
};


org.apache.royale.events.BrowserEvent.prototype.get__buttons = function() {
  return this.wrappedEvent.getBrowserEvent().buttons;
};


Object.defineProperties(org.apache.royale.events.BrowserEvent.prototype, /** @lends {org.apache.royale.events.BrowserEvent.prototype} */ {
/**
  * @export
  * @type {boolean} */
altKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__altKey},
/**
  * @export
  * @type {number} */
button: {
get: org.apache.royale.events.BrowserEvent.prototype.get__button},
/**
  * @export
  * @type {number} */
charCode: {
get: org.apache.royale.events.BrowserEvent.prototype.get__charCode},
/**
  * @export
  * @type {number} */
clientX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__clientX},
/**
  * @export
  * @type {number} */
localX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__localX},
/**
  * @export
  * @type {number} */
clientY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__clientY},
/**
  * @export
  * @type {number} */
localY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__localY},
/**
  * @export
  * @type {boolean} */
ctrlKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__ctrlKey},
/**
  * @export
  * @type {Object} */
currentTarget: {
get: org.apache.royale.events.BrowserEvent.prototype.get__currentTarget},
/**
  * @export
  * @type {boolean} */
defaultPrevented: {
get: org.apache.royale.events.BrowserEvent.prototype.get__defaultPrevented},
/**
  * @export
  * @type {number} */
keyCode: {
get: org.apache.royale.events.BrowserEvent.prototype.get__keyCode},
/**
  * @export
  * @type {boolean} */
metaKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__metaKey},
/**
  * @export
  * @type {number} */
offsetX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__offsetX},
/**
  * @export
  * @type {number} */
offsetY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__offsetY},
/**
  * @export
  * @type {boolean} */
platformModifierKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__platformModifierKey},
/**
  * @export
  * @type {Object} */
relatedTarget: {
get: org.apache.royale.events.BrowserEvent.prototype.get__relatedTarget},
/**
  * @export
  * @type {number} */
screenX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__screenX},
/**
  * @export
  * @type {number} */
screenY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__screenY},
/**
  * @export
  * @type {boolean} */
shiftKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__shiftKey},
/**
  * @export
  * @type {Object} */
state: {
get: org.apache.royale.events.BrowserEvent.prototype.get__state},
/**
  * @export
  * @type {Object} */
target: {
get: org.apache.royale.events.BrowserEvent.prototype.get__target},
/**
  * @export
  * @type {Date} */
timestamp: {
get: org.apache.royale.events.BrowserEvent.prototype.get__timestamp},
/**
  * @export
  * @type {string} */
type: {
get: org.apache.royale.events.BrowserEvent.prototype.get__type},
/**
  * @export
  * @type {boolean} */
buttonDown: {
get: org.apache.royale.events.BrowserEvent.prototype.get__buttonDown,
set: org.apache.royale.events.BrowserEvent.prototype.set__buttonDown},
/**
  * @export
  * @type {number} */
buttons: {
get: org.apache.royale.events.BrowserEvent.prototype.get__buttons}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.BrowserEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BrowserEvent', qName: 'org.apache.royale.events.BrowserEvent', kind: 'class' }], interfaces: [org.apache.royale.events.IBrowserEvent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.BrowserEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'altKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'button': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'charCode': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'clientX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'localX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'clientY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'localY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'ctrlKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'currentTarget': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'defaultPrevented': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'keyCode': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'metaKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'offsetX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'offsetY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'platformModifierKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'relatedTarget': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'screenX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'screenY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'shiftKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'state': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'target': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'timestamp': { type: 'Date', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'type': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'buttonDown': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'buttons': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'}
      };
    },
    methods: function () {
      return {
        'wrapEvent': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent', parameters: function () { return [  { index: 1, type: 'goog.events.BrowserEvent', optional: false } ]; }},
        'getBrowserEvent': { type: 'Object', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'isButton': { type: 'Boolean', declaredBy: 'org.apache.royale.events.BrowserEvent', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'isMouseActionButton': { type: 'Boolean', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'preventDefault': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'stopPropagation': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'}
      };
    }
  };
};