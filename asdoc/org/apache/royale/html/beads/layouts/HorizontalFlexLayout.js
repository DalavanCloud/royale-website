/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\layouts\HorizontalFlexLayout.as
 * org.apache.royale.html.beads.layouts.HorizontalFlexLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.layouts.HorizontalFlexLayout');

goog.require('org.apache.royale.core.LayoutBase');
goog.require('org.apache.royale.events.Event');



/**
 * Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.core.LayoutBase}
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout = function() {
  org.apache.royale.html.beads.layouts.HorizontalFlexLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.layouts.HorizontalFlexLayout, org.apache.royale.core.LayoutBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.layouts.HorizontalFlexLayout', org.apache.royale.html.beads.layouts.HorizontalFlexLayout);


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype._grow = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype._shrink = -1;


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.ILayoutHost
 * @royaleignorecoercion org.apache.royale.core.UIBase
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @override
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.layout = function() {
  var /** @type {org.apache.royale.core.ILayoutView} */ contentView = this.layoutView;
  contentView.setDisplayStyleForLayout("flex");
  contentView.element.style["flex-flow"] = "row";
  var /** @type {number} */ n = contentView.numElements;
  if (n == 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ child = contentView.getElementAt(i);
    if (!child) {
      continue;
    }
    if (this.grow >= 0)
      child.element.style["flex-grow"] = String(this.grow);
    if (this.shrink >= 0)
      child.element.style["flex-shrink"] = String(this.shrink);
    if (!isNaN(child.percentWidth))
      child.element.style["flex-basis"] = child.percentWidth.toString() + "%";
    child.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
  }
  return true;
};


org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.get__grow = function() {
  return this._grow;
};


org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.set__grow = function(value) {
  this._grow = value;
};


org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.get__shrink = function() {
  return this._shrink;
};


org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.set__shrink = function(value) {
  this._shrink = value;
};


Object.defineProperties(org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype, /** @lends {org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype} */ {
/**
  * @export
  * @type {number} */
grow: {
get: org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.get__grow,
set: org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.set__grow},
/**
  * @export
  * @type {number} */
shrink: {
get: org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.get__shrink,
set: org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.set__shrink}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HorizontalFlexLayout', qName: 'org.apache.royale.html.beads.layouts.HorizontalFlexLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.layouts.HorizontalFlexLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'grow': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.layouts.HorizontalFlexLayout'},
        'shrink': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.layouts.HorizontalFlexLayout'}
      };
    },
    methods: function () {
      return {
        'HorizontalFlexLayout': { type: '', declaredBy: 'org.apache.royale.html.beads.layouts.HorizontalFlexLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.html.beads.layouts.HorizontalFlexLayout'}
      };
    }
  };
};