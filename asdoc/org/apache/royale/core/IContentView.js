/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IContentView.as
 * org.apache.royale.core.IContentView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IContentView');

goog.require('org.apache.royale.core.IParent');



/**
 * @interface
 * @extends {org.apache.royale.core.IParent}
 */
org.apache.royale.core.IContentView = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IContentView', org.apache.royale.core.IContentView);
/**  * @type {number}
 */org.apache.royale.core.IContentView.prototype.x;
org.apache.royale.core.IContentView.prototype.removeAllElements = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IContentView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IContentView', qName: 'org.apache.royale.core.IContentView', kind: 'interface' }], interfaces: [org.apache.royale.core.IParent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IContentView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.IContentView'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.IContentView'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.IContentView'},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.IContentView'}
      };
    },
    methods: function () {
      return {
        'removeAllElements': { type: 'void', declaredBy: 'org.apache.royale.core.IContentView'}
      };
    }
  };
};