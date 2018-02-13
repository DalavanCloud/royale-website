/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\BeadViewBase.as
 * org.apache.royale.core.BeadViewBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.BeadViewBase');

goog.require('org.apache.royale.core.IUIBase');
goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBeadView');
goog.require('org.apache.royale.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBeadView}
 */
org.apache.royale.core.BeadViewBase = function() {
  org.apache.royale.core.BeadViewBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.BeadViewBase, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.BeadViewBase', org.apache.royale.core.BeadViewBase);


/**
 * @protected
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.BeadViewBase.prototype._strand;


org.apache.royale.core.BeadViewBase.prototype.set__strand = function(value) {
  this._strand = value;
};


org.apache.royale.core.BeadViewBase.prototype.get__host = function() {
  return org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IUIBase);
};


Object.defineProperties(org.apache.royale.core.BeadViewBase.prototype, /** @lends {org.apache.royale.core.BeadViewBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.core.BeadViewBase.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IUIBase} */
host: {
get: org.apache.royale.core.BeadViewBase.prototype.get__host}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.BeadViewBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BeadViewBase', qName: 'org.apache.royale.core.BeadViewBase', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.BeadViewBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.BeadViewBase'},
        'host': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.core.BeadViewBase'}
      };
    },
    methods: function () {
      return {
        'BeadViewBase': { type: '', declaredBy: 'org.apache.royale.core.BeadViewBase'}
      };
    }
  };
};