/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\List.as
 * org.apache.royale.html.List
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.List');

goog.require('org.apache.royale.core.IRollOverModel');
goog.require('org.apache.royale.core.ISelectionModel');
goog.require('org.apache.royale.html.DataContainer');
goog.require('org.apache.royale.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.DataContainer}
 */
org.apache.royale.html.List = function() {
  org.apache.royale.html.List.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.List, org.apache.royale.html.DataContainer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.List', org.apache.royale.html.List);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.html.List.prototype.createElement = function() {
  org.apache.royale.html.List.superClass_.createElement.apply(this);
  this.className = 'List';
  return this.element;
};


org.apache.royale.html.List.prototype.get__selectedIndex = function() {
  return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel, true).selectedIndex;
};


org.apache.royale.html.List.prototype.set__selectedIndex = function(value) {
  org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel, true).selectedIndex = value;
};


org.apache.royale.html.List.prototype.get__rollOverIndex = function() {
  return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.IRollOverModel, true).rollOverIndex;
};


org.apache.royale.html.List.prototype.set__rollOverIndex = function(value) {
  org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.IRollOverModel, true).rollOverIndex = value;
};


org.apache.royale.html.List.prototype.get__rowHeight = function() {
  return this.presentationModel.rowHeight;
};


org.apache.royale.html.List.prototype.set__rowHeight = function(value) {
  this.presentationModel.rowHeight = value;
};


org.apache.royale.html.List.prototype.get__selectedItem = function() {
  return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel, true).selectedItem;
};


org.apache.royale.html.List.prototype.set__selectedItem = function(value) {
  org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel, true).selectedItem = value;
};


Object.defineProperties(org.apache.royale.html.List.prototype, /** @lends {org.apache.royale.html.List.prototype} */ {
/**
  * @export
  * @type {number} */
selectedIndex: {
get: org.apache.royale.html.List.prototype.get__selectedIndex,
set: org.apache.royale.html.List.prototype.set__selectedIndex},
/**
  * @export
  * @type {number} */
rollOverIndex: {
get: org.apache.royale.html.List.prototype.get__rollOverIndex,
set: org.apache.royale.html.List.prototype.set__rollOverIndex},
/**
  * @export
  * @type {number} */
rowHeight: {
get: org.apache.royale.html.List.prototype.get__rowHeight,
set: org.apache.royale.html.List.prototype.set__rowHeight},
/**
  * @export
  * @type {Object} */
selectedItem: {
get: org.apache.royale.html.List.prototype.get__selectedItem,
set: org.apache.royale.html.List.prototype.set__selectedItem}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.List.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'List', qName: 'org.apache.royale.html.List', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.List.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.List', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] } ]; }},
        'rollOverIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.List'},
        'rowHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.List'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.List', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'List': { type: '', declaredBy: 'org.apache.royale.html.List'}
      };
    },
    metadata: function () { return [  ]; }
  };
};