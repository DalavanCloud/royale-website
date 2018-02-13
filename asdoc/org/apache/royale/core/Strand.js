/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\Strand.as
 * org.apache.royale.core.Strand
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.Strand');

goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.core.ValuesManager');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IStrand');
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
 * @implements {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.Strand = function() {
  org.apache.royale.core.Strand.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.Strand, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.Strand', org.apache.royale.core.Strand);


/**
 * @private
 * @type {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.Strand.prototype._model;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.Strand.prototype._id;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.core.Strand.prototype.beads;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.Strand.prototype._beads;


/**
 *  @copy org.apache.royale.core.IStrand#addBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IBead} bead
 */
org.apache.royale.core.Strand.prototype.addBead = function(bead) {
  if (!this._beads)
    this._beads = org.apache.royale.utils.Language.Vector();
  this._beads.push(bead);
  if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadModel))
    this._model = org.apache.royale.utils.Language.as(bead, org.apache.royale.core.IBeadModel);
  bead.strand = this;
};


/**
 *  @copy org.apache.royale.core.IStrand#getBeadByType()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.Strand.prototype.getBeadByType = function(classOrInterface) {
  var foreachiter0_target = this._beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  {
    if (org.apache.royale.utils.Language.is(bead, classOrInterface))
      return bead;
  }}
  
  return null;
};


/**
 *  @copy org.apache.royale.core.IStrand#removeBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IBead} value
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.Strand.prototype.removeBead = function(value) {
  var /** @type {number} */ n = this._beads.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.core.IBead} */ bead = this._beads[i];
    if (bead == value) {
      this._beads.splice(i, 1);
      return bead;
    }
  }
  return null;
};


org.apache.royale.core.Strand.prototype.get__model = function() {
  if (this._model == null) {
    this.addBead(org.apache.royale.utils.Language.as(new (org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "iBeadModel"))(), org.apache.royale.core.IBead));
  }
  return this._model;
};


org.apache.royale.core.Strand.prototype.set__model = function(value) {
  if (this._model != value) {
    this.addBead(org.apache.royale.utils.Language.as(value, org.apache.royale.core.IBead));
    this.dispatchEvent(new org.apache.royale.events.Event("modelChanged"));
  }
};


org.apache.royale.core.Strand.prototype.get__id = function() {
  return this._id;
};


org.apache.royale.core.Strand.prototype.set__id = function(value) {
  if (this._id != value) {
    this._id = value;
    this.dispatchEvent(new org.apache.royale.events.Event("idChanged"));
  }
};


Object.defineProperties(org.apache.royale.core.Strand.prototype, /** @lends {org.apache.royale.core.Strand.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IBeadModel} */
model: {
get: org.apache.royale.core.Strand.prototype.get__model,
set: org.apache.royale.core.Strand.prototype.set__model},
/**
  * @export
  * @type {string} */
id: {
get: org.apache.royale.core.Strand.prototype.get__id,
set: org.apache.royale.core.Strand.prototype.set__id}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.Strand.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Strand', qName: 'org.apache.royale.core.Strand', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.Strand.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'beads': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'model': { type: 'org.apache.royale.core.IBeadModel', access: 'readwrite', declaredBy: 'org.apache.royale.core.Strand'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.Strand'}
      };
    },
    methods: function () {
      return {
        'Strand': { type: '', declaredBy: 'org.apache.royale.core.Strand'},
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }},
        'getBeadByType': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [  { index: 1, type: 'Class', optional: false } ]; }},
        'removeBead': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }}
      };
    }
  };
};