/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\ButtonBarView.as
 * org.apache.royale.html.beads.ButtonBarView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ButtonBarView');

goog.require('org.apache.royale.html.beads.ListView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.ListView}
 */
org.apache.royale.html.beads.ButtonBarView = function() {
  org.apache.royale.html.beads.ButtonBarView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ButtonBarView, org.apache.royale.html.beads.ListView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.ButtonBarView', org.apache.royale.html.beads.ButtonBarView);


org.apache.royale.html.beads.ButtonBarView.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.html.beads.ButtonBarView.superClass_.set__strand.apply(this, [ value] );
};


Object.defineProperties(org.apache.royale.html.beads.ButtonBarView.prototype, /** @lends {org.apache.royale.html.beads.ButtonBarView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.ButtonBarView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ButtonBarView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ButtonBarView', qName: 'org.apache.royale.html.beads.ButtonBarView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ButtonBarView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.ButtonBarView'}
      };
    },
    methods: function () {
      return {
        'ButtonBarView': { type: '', declaredBy: 'org.apache.royale.html.beads.ButtonBarView'}
      };
    }
  };
};