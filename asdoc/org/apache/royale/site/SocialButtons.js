/**
 * Generated by Apache Royale Compiler from org\apache\royale\site\SocialButtons.as
 * org.apache.royale.site.SocialButtons
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.site.SocialButtons');

goog.require('org.apache.royale.core.UIBase');



/**
 * Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 */
org.apache.royale.site.SocialButtons = function() {
  org.apache.royale.site.SocialButtons.base(this, 'constructor');
  this.typeNames = "SocialButtons";
};
goog.inherits(org.apache.royale.site.SocialButtons, org.apache.royale.core.UIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.site.SocialButtons', org.apache.royale.site.SocialButtons);


/**
 * @asreturn The actual element to be parented.
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @royaleignorecoercion HTMLUListElement
 * @royaleignorecoercion HTMLLIElement
 * @protected
 * @override
 */
org.apache.royale.site.SocialButtons.prototype.createElement = function() {
  var /** @type {HTMLUListElement} */ ul = document.createElement("ul");
  this.element = ul;
  var /** @type {HTMLLIElement} */ li = document.createElement("li");
  li.className = "fa SocialButton fa-search";
  li.innerHTML = "<a href='search.html'></a>";
  this.element.appendChild(li);
  li = document.createElement("li");
  li.className = "fa SocialButton fa-share-alt";
  li.innerHTML = "<a href='share.html'></a>";
  this.element.appendChild(li);
  li = document.createElement("li");
  li.className = "fa SocialButton fa-th";
  li.innerHTML = "<a href='menu.html'></a>";
  this.element.appendChild(li);
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.site.SocialButtons.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SocialButtons', qName: 'org.apache.royale.site.SocialButtons', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.site.SocialButtons.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'SocialButtons': { type: '', declaredBy: 'org.apache.royale.site.SocialButtons'}
      };
    }
  };
};