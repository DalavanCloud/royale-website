/**
 * Generated by Apache Royale Compiler from org\apache\royale\binding\SimpleBinding.as
 * org.apache.royale.binding.SimpleBinding
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.SimpleBinding');

goog.require('org.apache.royale.events.IEventDispatcher');
goog.require('org.apache.royale.events.ValueChangeEvent');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IBinding');
goog.require('org.apache.royale.core.IDocument');
goog.require('org.apache.royale.utils.Language');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDocument}
 * @implements {org.apache.royale.core.IBinding}
 * @param {boolean=} isStatic
 */
org.apache.royale.binding.SimpleBinding = function(isStatic) {
  isStatic = typeof isStatic !== 'undefined' ? isStatic : false;
  this._isStatic = isStatic;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.SimpleBinding', org.apache.royale.binding.SimpleBinding);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.binding.SimpleBinding.prototype._isStatic;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype._destination;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype._sourceID;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype._destinationPropertyName;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype._sourcePropertyName;


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.binding.SimpleBinding.prototype.dispatcher;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.source;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.document;


/**
 * @export
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.eventName;


/**
 *  @copy org.apache.royale.core.IDocument#setDocument()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.binding.SimpleBinding.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.SimpleBinding.prototype.changeHandler = function(event) {
  if (event.type == org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE) {
    var /** @type {org.apache.royale.events.ValueChangeEvent} */ vce = org.apache.royale.utils.Language.as(event, org.apache.royale.events.ValueChangeEvent);
    if (vce.propertyName != this.sourcePropertyName)
      return;
  }
  this.destination[this.destinationPropertyName] = this.source[this.sourcePropertyName];
};


/**
 * @private
 * @param {org.apache.royale.events.ValueChangeEvent} event
 */
org.apache.royale.binding.SimpleBinding.prototype.sourceChangeHandler = function(event) {
  if (event.propertyName != this.sourceID)
    return;
  if (this.dispatcher)
    this.dispatcher.removeEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
  this.source = this.dispatcher = org.apache.royale.utils.Language.as(this.document[this.sourceID], org.apache.royale.events.IEventDispatcher);
  if (this.source) {
    this.dispatcher.addEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
    this.destination[this.destinationPropertyName] = this.source[this.sourcePropertyName];
  }
};


org.apache.royale.binding.SimpleBinding.prototype.get__destination = function() {
  return this._destination;
};


org.apache.royale.binding.SimpleBinding.prototype.set__destination = function(value) {
  this._destination = value;
};


org.apache.royale.binding.SimpleBinding.prototype.get__sourceID = function() {
  return this._sourceID;
};


org.apache.royale.binding.SimpleBinding.prototype.set__sourceID = function(value) {
  this._sourceID = value;
};


org.apache.royale.binding.SimpleBinding.prototype.get__destinationPropertyName = function() {
  return this._destinationPropertyName;
};


org.apache.royale.binding.SimpleBinding.prototype.set__destinationPropertyName = function(value) {
  this._destinationPropertyName = value;
};


org.apache.royale.binding.SimpleBinding.prototype.get__sourcePropertyName = function() {
  return this._sourcePropertyName;
};


org.apache.royale.binding.SimpleBinding.prototype.set__sourcePropertyName = function(value) {
  this._sourcePropertyName = value;
};


org.apache.royale.binding.SimpleBinding.prototype.set__strand = function(value) {
  if (this.dispatcher)
    this.dispatcher.removeEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
  if (this.destination == null)
    this.destination = value;
  if (this._isStatic) {
    this.source = this.document;
    this.dispatcher = org.apache.royale.utils.Language.as(this.source.staticEventDispatcher, org.apache.royale.events.IEventDispatcher);
  } else {
    if (this.sourceID != null) {
      this.source = this.dispatcher = org.apache.royale.utils.Language.as(this.document[this.sourceID], org.apache.royale.events.IEventDispatcher);
      if (this.source == null) {
        this.document.addEventListener("valueChange", org.apache.royale.utils.Language.closure(this.sourceChangeHandler, this, 'sourceChangeHandler'));
        return;
      }
    }
    else
      this.source = this.dispatcher = org.apache.royale.utils.Language.as(this.document, org.apache.royale.events.IEventDispatcher);
  }
  this.dispatcher.addEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
  try {
    this.destination[this.destinationPropertyName] = this.source[this.sourcePropertyName];
  } catch (e) {
  }
};


Object.defineProperties(org.apache.royale.binding.SimpleBinding.prototype, /** @lends {org.apache.royale.binding.SimpleBinding.prototype} */ {
/**
  * @export
  * @type {Object} */
destination: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__destination,
set: org.apache.royale.binding.SimpleBinding.prototype.set__destination},
/**
  * @export
  * @type {string} */
sourceID: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__sourceID,
set: org.apache.royale.binding.SimpleBinding.prototype.set__sourceID},
/**
  * @export
  * @type {string} */
destinationPropertyName: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__destinationPropertyName,
set: org.apache.royale.binding.SimpleBinding.prototype.set__destinationPropertyName},
/**
  * @export
  * @type {string} */
sourcePropertyName: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__sourcePropertyName,
set: org.apache.royale.binding.SimpleBinding.prototype.set__sourcePropertyName},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.binding.SimpleBinding.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.SimpleBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleBinding', qName: 'org.apache.royale.binding.SimpleBinding', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDocument, org.apache.royale.core.IBinding] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.SimpleBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'eventName': { type: 'String'}
      };
    },
    accessors: function () {
      return {
        'destination': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'sourceID': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'destinationPropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'sourcePropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.binding.SimpleBinding'}
      };
    },
    methods: function () {
      return {
        'SimpleBinding': { type: '', declaredBy: 'org.apache.royale.binding.SimpleBinding', parameters: function () { return [  { index: 1, type: 'Boolean', optional: true } ]; }},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.binding.SimpleBinding', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: true } ]; }}
      };
    }
  };
};