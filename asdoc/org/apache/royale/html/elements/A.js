/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\elements\A.as
 * org.apache.royale.html.elements.A
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.elements.A');

goog.require('org.apache.royale.html.TextNodeContainerBase');
goog.require('org.apache.royale.html.util.addElementToWrapper');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.TextNodeContainerBase}
 */
org.apache.royale.html.elements.A = function() {
  org.apache.royale.html.elements.A.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.elements.A, org.apache.royale.html.TextNodeContainerBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.elements.A', org.apache.royale.html.elements.A);


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.elements.A.prototype._href = "#";


/**
 * @protected
 * @override
 */
org.apache.royale.html.elements.A.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'a');
  this.element.setAttribute('href', this._href);
  return this.element;
};


org.apache.royale.html.elements.A.prototype.get__href = function() {
  return this._href;
};


org.apache.royale.html.elements.A.prototype.set__href = function(value) {
  this._href = value;
  this.element.setAttribute('href', value);
};


Object.defineProperties(org.apache.royale.html.elements.A.prototype, /** @lends {org.apache.royale.html.elements.A.prototype} */ {
/**
  * @export
  * @type {string} */
href: {
get: org.apache.royale.html.elements.A.prototype.get__href,
set: org.apache.royale.html.elements.A.prototype.set__href}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.elements.A.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'A', qName: 'org.apache.royale.html.elements.A', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.elements.A.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'href': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.elements.A'}
      };
    },
    methods: function () {
      return {
        'A': { type: '', declaredBy: 'org.apache.royale.html.elements.A'}
      };
    }
  };
};