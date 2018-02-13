/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\layouts\BasicLayout.as
 * org.apache.royale.html.beads.layouts.BasicLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.layouts.BasicLayout');

goog.require('org.apache.royale.core.LayoutBase');
goog.require('org.apache.royale.core.IBeadLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.LayoutBase}
 * @implements {org.apache.royale.core.IBeadLayout}
 */
org.apache.royale.html.beads.layouts.BasicLayout = function() {
  org.apache.royale.html.beads.layouts.BasicLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.layouts.BasicLayout, org.apache.royale.core.LayoutBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.layouts.BasicLayout', org.apache.royale.html.beads.layouts.BasicLayout);


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.ILayoutHost
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @export
 * @override
 */
org.apache.royale.html.beads.layouts.BasicLayout.prototype.layout = function() {
  
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  var /** @type {org.apache.royale.core.ILayoutView} */ contentView = this.layoutView;
  n = contentView.numElements;
  if (contentView.element.style.position != "absolute" && contentView.element.style.position != "relative") {
    contentView.element.style.position = "relative";
  }
  for (i = 0; i < n; i++) {
    var /** @type {Object} */ child = contentView.getElementAt(i);
    child.positioner.style.position = "absolute";
  }
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.layouts.BasicLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BasicLayout', qName: 'org.apache.royale.html.beads.layouts.BasicLayout', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadLayout] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.layouts.BasicLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'BasicLayout': { type: '', declaredBy: 'org.apache.royale.html.beads.layouts.BasicLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.html.beads.layouts.BasicLayout'}
      };
    }
  };
};