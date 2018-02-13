/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ApplicationBase.as
 * org.apache.royale.core.ApplicationBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ApplicationBase');

goog.require('org.apache.royale.core.HTMLElementWrapper');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.utils.CSSUtils');
goog.require('org.apache.royale.core.IFlexInfo');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.HTMLElementWrapper}
 * @implements {org.apache.royale.core.IFlexInfo}
 */
org.apache.royale.core.ApplicationBase = function() {
  org.apache.royale.core.ApplicationBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.ApplicationBase, org.apache.royale.core.HTMLElementWrapper);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ApplicationBase', org.apache.royale.core.ApplicationBase);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.ApplicationBase.prototype._info;


/**
 *  An Object containing information generated
 *  by the compiler that is useful at startup time.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {Object}
 */
org.apache.royale.core.ApplicationBase.prototype.info = function() {
  return this._info;
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._width;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._height;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ApplicationBase.prototype.setHeight = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._height != value) {
    this._height = value;
    this.element.style.height = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("heightChanged"));
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidth
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ApplicationBase.prototype.setWidth = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width != value) {
    this._width = value;
    this.element.style.width = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("widthChanged"));
  }
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._explicitWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._explicitHeight;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._percentWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype._percentHeight;


org.apache.royale.core.ApplicationBase.prototype.get__width = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.width;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.element.offsetWidth;
    if (pixels === 0 && this.element.scrollWidth !== 0) {
      pixels = this.element.scrollWidth;
    }
  }
  return pixels;
};


org.apache.royale.core.ApplicationBase.prototype.set__width = function(value) {
  if (this.explicitWidth != value) {
    this.explicitWidth = value;
  }
  this.setWidth(value);
};


org.apache.royale.core.ApplicationBase.prototype.get__height = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.height;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.element.offsetHeight;
    if (pixels === 0 && this.element.scrollHeight !== 0) {
      pixels = this.element.scrollHeight;
    }
  }
  return pixels;
};


org.apache.royale.core.ApplicationBase.prototype.set__height = function(value) {
  if (this.explicitHeight != value) {
    this.explicitHeight = value;
  }
  this.setHeight(value);
};


org.apache.royale.core.ApplicationBase.prototype.get__explicitWidth = function() {
  return this._explicitWidth;
};


org.apache.royale.core.ApplicationBase.prototype.set__explicitWidth = function(value) {
  if (this._explicitWidth == value)
    return;
  if (!isNaN(value))
    this._percentWidth = NaN;
  this._explicitWidth = value;
  this.dispatchEvent(new org.apache.royale.events.Event("explicitWidthChanged"));
};


org.apache.royale.core.ApplicationBase.prototype.get__explicitHeight = function() {
  return this._explicitHeight;
};


org.apache.royale.core.ApplicationBase.prototype.set__explicitHeight = function(value) {
  if (this._explicitHeight == value)
    return;
  if (!isNaN(value))
    this._percentHeight = NaN;
  this._explicitHeight = value;
  this.dispatchEvent(new org.apache.royale.events.Event("explicitHeightChanged"));
};


org.apache.royale.core.ApplicationBase.prototype.get__percentWidth = function() {
  return this._percentWidth;
};


org.apache.royale.core.ApplicationBase.prototype.set__percentWidth = function(value) {
  this._percentWidth = value;
  this.element.style.width = value.toString() + '%';
  if (!isNaN(value))
    this._explicitWidth = NaN;
  this.dispatchEvent(new org.apache.royale.events.Event("percentWidthChanged"));
};


org.apache.royale.core.ApplicationBase.prototype.get__percentHeight = function() {
  return this._percentHeight;
};


org.apache.royale.core.ApplicationBase.prototype.set__percentHeight = function(value) {
  this._percentHeight = value;
  this.element.style.height = value.toString() + '%';
  if (!isNaN(value))
    this._explicitHeight = NaN;
  this.dispatchEvent(new org.apache.royale.events.Event("percentHeightChanged"));
};


Object.defineProperties(org.apache.royale.core.ApplicationBase.prototype, /** @lends {org.apache.royale.core.ApplicationBase.prototype} */ {
/**
  * @export
  * @type {number} */
width: {
get: org.apache.royale.core.ApplicationBase.prototype.get__width,
set: org.apache.royale.core.ApplicationBase.prototype.set__width},
/**
  * @export
  * @type {number} */
height: {
get: org.apache.royale.core.ApplicationBase.prototype.get__height,
set: org.apache.royale.core.ApplicationBase.prototype.set__height},
/**
  * @export
  * @type {number} */
explicitWidth: {
get: org.apache.royale.core.ApplicationBase.prototype.get__explicitWidth,
set: org.apache.royale.core.ApplicationBase.prototype.set__explicitWidth},
/**
  * @export
  * @type {number} */
explicitHeight: {
get: org.apache.royale.core.ApplicationBase.prototype.get__explicitHeight,
set: org.apache.royale.core.ApplicationBase.prototype.set__explicitHeight},
/**
  * @export
  * @type {number} */
percentWidth: {
get: org.apache.royale.core.ApplicationBase.prototype.get__percentWidth,
set: org.apache.royale.core.ApplicationBase.prototype.set__percentWidth},
/**
  * @export
  * @type {number} */
percentHeight: {
get: org.apache.royale.core.ApplicationBase.prototype.get__percentHeight,
set: org.apache.royale.core.ApplicationBase.prototype.set__percentHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ApplicationBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ApplicationBase', qName: 'org.apache.royale.core.ApplicationBase', kind: 'class' }], interfaces: [org.apache.royale.core.IFlexInfo] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ApplicationBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'widthChanged' } ] } ]; }},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'heightChanged' } ] } ]; }},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'}
      };
    },
    methods: function () {
      return {
        'ApplicationBase': { type: '', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'info': { type: 'Object', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'setHeight': { type: 'void', declaredBy: 'org.apache.royale.core.ApplicationBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.royale.core.ApplicationBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};