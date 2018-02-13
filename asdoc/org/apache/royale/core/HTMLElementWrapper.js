/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\HTMLElementWrapper.as
 * org.apache.royale.core.HTMLElementWrapper
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.HTMLElementWrapper');
/* Royale Static Dependency List: org.apache.royale.core.HTMLElementWrapper,goog.events*/

goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.core.ValuesManager');
goog.require('org.apache.royale.events.BrowserEvent');
goog.require('org.apache.royale.events.ElementEvents');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.events.IEventDispatcher');
goog.require('org.apache.royale.events.utils.EventUtils');
goog.require('org.apache.royale.events.utils.KeyboardEventConverter');
goog.require('org.apache.royale.events.utils.MouseEventConverter');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.HTMLElementWrapper = function() {
  org.apache.royale.core.HTMLElementWrapper.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.HTMLElementWrapper, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.HTMLElementWrapper', org.apache.royale.core.HTMLElementWrapper);


/**
 * @asparam listener The listener object to call {goog.events.Listener}.
 * @asparam eventObject The event object to pass to the listener.
 * @asreturn Result of listener.
 * @export
 * @param {Object} listener
 * @param {goog.events.BrowserEvent} eventObject
 * @return {boolean}
 */
org.apache.royale.core.HTMLElementWrapper.fireListenerOverride = function(listener, eventObject) {
  var /** @type {org.apache.royale.events.IBrowserEvent} */ e;
  var /** @type {Object} */ nativeEvent = eventObject.getBrowserEvent();
  switch (nativeEvent.constructor.name) {
    case "KeyboardEvent":
      e = org.apache.royale.events.utils.KeyboardEventConverter.convert(nativeEvent);
      break;
    case "MouseEvent":
      e = org.apache.royale.events.utils.MouseEventConverter.convert(nativeEvent);
      break;
    default:
      e = new org.apache.royale.events.BrowserEvent();
      break;
  }
  e.wrapEvent(eventObject);
  return org.apache.royale.core.HTMLElementWrapper.googFireListener(listener, e);
};


/**
 * Static initializer
 * @export
 * @return {boolean}
 */
org.apache.royale.core.HTMLElementWrapper.installOverride = function() {
  org.apache.royale.core.HTMLElementWrapper.googFireListener = goog.events.fireListener;
  goog.events.fireListener = org.apache.royale.core.HTMLElementWrapper.fireListenerOverride;
  return true;
};


/**
 * @export
 * @type {Function}
 */
org.apache.royale.core.HTMLElementWrapper.googFireListener;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.core.HTMLElementWrapper.installedOverride;


/**
 * @private
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
org.apache.royale.core.HTMLElementWrapper.prototype._element;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.core.HTMLElementWrapper.prototype._model;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.core.HTMLElementWrapper.prototype._beads;


/**
 * @asparam bead The new bead.
 * @export
 * @param {org.apache.royale.core.IBead} bead
 */
org.apache.royale.core.HTMLElementWrapper.prototype.addBead = function(bead) {
  if (!this._beads) {
    this._beads = org.apache.royale.utils.Language.Vector();
  }
  this._beads.push(bead);
  if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadModel)) {
    this._model = org.apache.royale.utils.Language.as(bead, org.apache.royale.core.IBeadModel);
  }
  bead.strand = this;
};


/**
 * @asparam classOrInterface The requested bead type.
 * @asreturn The bead.
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.getBeadByType = function(classOrInterface) {
  var /** @type {org.apache.royale.core.IBead} */ bead, /** @type {number} */ i = 0, /** @type {number} */ n = 0;
  if (!this._beads)
    return null;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    bead = this._beads[i];
    if (org.apache.royale.utils.Language.is(bead, classOrInterface)) {
      return bead;
    }
  }
  return null;
};


/**
 * @asparam bead The bead to remove.
 * @asreturn The bead.
 * @export
 * @param {org.apache.royale.core.IBead} bead
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.removeBead = function(bead) {
  var /** @type {number} */ i = 0, /** @type {number} */ n = 0, /** @type {Object} */ value;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    value = this._beads[i];
    if (bead === value) {
      this._beads.splice(i, 1);
      bead.strand = null;
      return bead;
    }
  }
  return null;
};


/**
 * @export
 * @override
 */
org.apache.royale.core.HTMLElementWrapper.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  goog.events.listen(source, type, handler);
};


/**
 * @export
 * @override
 */
org.apache.royale.core.HTMLElementWrapper.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  goog.events.unlisten(source, type, handler);
};


/**
 * @private
 * @param {string} type
 * @return {Object}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.getActualDispatcher_ = function(type) {
  var /** @type {Object} */ source = this;
  if (org.apache.royale.events.ElementEvents.elementEvents[type]) {
    source = this.element;
  }
  return source;
};


/**
 * @export
 * @override
 */
org.apache.royale.core.HTMLElementWrapper.prototype.hasEventListener = function(type) {
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  return goog.events.hasListener(source, type);
};


/**
 * @export
 * @override
 */
org.apache.royale.core.HTMLElementWrapper.prototype.dispatchEvent = function(e) {
  var /** @type {string} */ eventType = "";
  if (typeof(e) === 'string') {
    eventType = org.apache.royale.utils.Language.as(e, String);
    if (e === org.apache.royale.events.Event.CHANGE) {
      e = org.apache.royale.events.utils.EventUtils.createEvent(eventType, e.bubbles);
    }
  } else {
    eventType = org.apache.royale.utils.Language.string(e.type);
    if (org.apache.royale.events.ElementEvents.elementEvents[eventType]) {
      e = org.apache.royale.events.utils.EventUtils.createEvent(eventType, e.bubbles);
    }
  }
  var /** @type {Object} */ source = this.getActualDispatcher_(eventType);
  if (e.bubbles) {
    return this.dispatchBubblingEvent(source, e);
  }
  if (source == this) {
    return org.apache.royale.core.HTMLElementWrapper.superClass_.dispatchEvent.apply(this, [ e] );
  }
  return source.dispatchEvent(e);
};


/**
 * @export
 * @param {Object} source
 * @param {Object} e
 * @return {boolean}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.dispatchBubblingEvent = function(source, e) {
  var /** @type {Array} */ ancestorsTree = [];
  var /** @type {org.apache.royale.events.IEventDispatcher} */ t = org.apache.royale.utils.Language.as(source["parent"], org.apache.royale.events.IEventDispatcher);
  while (t != null) {
    ancestorsTree.push(t);
    t = org.apache.royale.utils.Language.as(t["parent"], org.apache.royale.events.IEventDispatcher);
  }
  return goog.events.EventTarget.dispatchEventInternal_(source, e, ancestorsTree);
};


org.apache.royale.core.HTMLElementWrapper.prototype.get__element = function() {
  return this._element;
};


org.apache.royale.core.HTMLElementWrapper.prototype.set__element = function(value) {
  this._element = value;
  this._element.royale_wrapper = this;
};


org.apache.royale.core.HTMLElementWrapper.prototype.get__model = function() {
  if (this._model == null) {
    var /** @type {Object} */ m = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, 'iBeadModel');
    var /** @type {org.apache.royale.core.IBeadModel} */ b = new m();
    this.addBead(b);
  }
  return this._model;
};


org.apache.royale.core.HTMLElementWrapper.prototype.set__model = function(value) {
  if (this._model != value) {
    if (org.apache.royale.utils.Language.is(value, org.apache.royale.core.IBead))
      this.addBead(org.apache.royale.utils.Language.as(value, org.apache.royale.core.IBead));
    else
      this._model = value;
    this.dispatchEvent(new org.apache.royale.events.Event("modelChanged"));
  }
};


Object.defineProperties(org.apache.royale.core.HTMLElementWrapper.prototype, /** @lends {org.apache.royale.core.HTMLElementWrapper.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
element: {
get: org.apache.royale.core.HTMLElementWrapper.prototype.get__element,
set: org.apache.royale.core.HTMLElementWrapper.prototype.set__element},
/**
  * @export
  * @type {Object} */
model: {
get: org.apache.royale.core.HTMLElementWrapper.prototype.get__model,
set: org.apache.royale.core.HTMLElementWrapper.prototype.set__model}}
);

org.apache.royale.core.HTMLElementWrapper.installedOverride = org.apache.royale.core.HTMLElementWrapper.installOverride();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HTMLElementWrapper', qName: 'org.apache.royale.core.HTMLElementWrapper', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|googFireListener': { type: 'Function'},
        '|installedOverride': { type: 'Boolean'}
      };
    },
    accessors: function () {
      return {
        'element': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.royale.core.HTMLElementWrapper'},
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'modelChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        '|fireListenerOverride': { type: 'Boolean', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'goog.events.BrowserEvent', optional: false } ]; }},
        '|installOverride': { type: 'Boolean', declaredBy: 'org.apache.royale.core.HTMLElementWrapper'},
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }},
        'getBeadByType': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Class', optional: false } ]; }},
        'removeBead': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }},
        'addEventListener': { type: 'void', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'dispatchBubblingEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Object', optional: false } ]; }}
      };
    }
  };
};