/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\supportClasses\CheckBoxIcon.as
 * org.apache.royale.html.supportClasses.CheckBoxIcon
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.CheckBoxIcon');




/**
 * @constructor
 */
org.apache.royale.html.supportClasses.CheckBoxIcon = function() {
  this.createElement();
  this.className = 'CheckBoxIcon';
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.CheckBoxIcon', org.apache.royale.html.supportClasses.CheckBoxIcon);


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.CheckBoxIcon.prototype._className;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.CheckBoxIcon.prototype._id;


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @royaleignorecoercion HTMLInputElement
 * @royaleignorecoercion Text
 * @protected
 * @return {Object}
 */
org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.createElement = function() {
  var /** @type {HTMLInputElement} */ input = document.createElement('input');
  input.type = 'checkbox';
  this.element = input;
  return this.element;
};


org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.get__className = function() {
  return this._className;
};


org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.set__className = function(value) {
  this._className = value;
  this.element.className = value;
};


org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.get__id = function() {
  return this._id;
};


org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.set__id = function(value) {
  this._id = value;
  this.element.id = value;
};


Object.defineProperties(org.apache.royale.html.supportClasses.CheckBoxIcon.prototype, /** @lends {org.apache.royale.html.supportClasses.CheckBoxIcon.prototype} */ {
/**
  * @export
  * @type {string} */
className: {
get: org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.get__className,
set: org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.set__className},
/**
  * @export
  * @type {string} */
id: {
get: org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.get__id,
set: org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.set__id}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CheckBoxIcon', qName: 'org.apache.royale.html.supportClasses.CheckBoxIcon', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.CheckBoxIcon.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.CheckBoxIcon'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.CheckBoxIcon'}
      };
    },
    methods: function () {
      return {
        'CheckBoxIcon': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.CheckBoxIcon'}
      };
    }
  };
};