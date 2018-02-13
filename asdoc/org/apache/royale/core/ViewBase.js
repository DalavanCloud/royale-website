/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ViewBase.as
 * org.apache.royale.core.ViewBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ViewBase');

goog.require('org.apache.royale.core.GroupBase');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.core.IApplicationView');
goog.require('org.apache.royale.core.IPopUpHost');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.GroupBase}
 * @implements {org.apache.royale.core.IPopUpHost}
 * @implements {org.apache.royale.core.IApplicationView}
 */
org.apache.royale.core.ViewBase = function() {
  org.apache.royale.core.ViewBase.base(this, 'constructor');
  this.typeNames = "royale";
};
goog.inherits(org.apache.royale.core.ViewBase, org.apache.royale.core.GroupBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ViewBase', org.apache.royale.core.ViewBase);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.ViewBase.prototype._applicationModel;


org.apache.royale.core.ViewBase.prototype.get__applicationModel = function() {
  return this._applicationModel;
};


org.apache.royale.core.ViewBase.prototype.set__applicationModel = function(value) {
  this._applicationModel = value;
  this.dispatchEvent(new org.apache.royale.events.Event("modelChanged"));
};


Object.defineProperties(org.apache.royale.core.ViewBase.prototype, /** @lends {org.apache.royale.core.ViewBase.prototype} */ {
/**
  * @export
  * @type {Object} */
applicationModel: {
get: org.apache.royale.core.ViewBase.prototype.get__applicationModel,
set: org.apache.royale.core.ViewBase.prototype.set__applicationModel}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ViewBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ViewBase', qName: 'org.apache.royale.core.ViewBase', kind: 'class' }], interfaces: [org.apache.royale.core.IPopUpHost, org.apache.royale.core.IApplicationView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ViewBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'applicationModel': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.ViewBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'modelChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'ViewBase': { type: '', declaredBy: 'org.apache.royale.core.ViewBase'}
      };
    },
    metadata: function () { return [  ]; }
  };
};