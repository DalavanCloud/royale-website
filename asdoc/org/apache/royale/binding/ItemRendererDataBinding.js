/**
 * Generated by Apache Royale Compiler from org\apache\royale\binding\ItemRendererDataBinding.as
 * org.apache.royale.binding.ItemRendererDataBinding
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.ItemRendererDataBinding');

goog.require('org.apache.royale.binding.DataBindingBase');
goog.require('org.apache.royale.binding.GenericBinding');
goog.require('org.apache.royale.binding.ItemRendererSimpleBinding');
goog.require('org.apache.royale.binding.SimpleBinding');
goog.require('org.apache.royale.core.IBinding');
goog.require('org.apache.royale.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.binding.DataBindingBase}
 */
org.apache.royale.binding.ItemRendererDataBinding = function() {
  org.apache.royale.binding.ItemRendererDataBinding.base(this, 'constructor');
};
goog.inherits(org.apache.royale.binding.ItemRendererDataBinding, org.apache.royale.binding.DataBindingBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.ItemRendererDataBinding', org.apache.royale.binding.ItemRendererDataBinding);


/**
 * @protected
 * @override
 */
org.apache.royale.binding.ItemRendererDataBinding.prototype.initBindingsHandler = function(event) {
  org.apache.royale.binding.ItemRendererDataBinding.superClass_.initBindingsHandler.apply(this, [ event] );
  if (!("_bindings" in this._strand))
    return;
  var /** @type {Object} */ fieldWatcher;
  var /** @type {org.apache.royale.binding.SimpleBinding} */ sb;
  var /** @type {Array} */ bindingData = this._strand["_bindings"];
  var /** @type {number} */ n = Number(bindingData[0]);
  var /** @type {Array} */ bindings = [];
  var /** @type {Object} */ binding = null;
  var /** @type {number} */ i = 0;
  var /** @type {number} */ index = 1;
  for (i = 0; i < n; i++) {
    binding = {};
    binding.source = bindingData[index++];
    binding.destFunc = bindingData[index++];
    binding.destination = bindingData[index++];
    bindings.push(binding);
  }
  var /** @type {Object} */ watchers = this.decodeWatcher(bindingData.slice(index));
  for (i = 0; i < n; i++) {
    binding = bindings[i];
    if (org.apache.royale.utils.Language.is(binding.source, String)) {
      fieldWatcher = watchers.watcherMap[binding.source];
      if (!fieldWatcher) {
        this.makeConstantBinding(binding);
      } else if (org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
        var /** @type {boolean} */ isStatic = fieldWatcher.type == "static";
        sb = new org.apache.royale.binding.SimpleBinding(isStatic);
        sb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        sb.eventName = org.apache.royale.utils.Language.as(fieldWatcher.eventNames, String);
        sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source);
        if (isStatic) {
          sb.setDocument(fieldWatcher.parentObj);
        } else {
          sb.setDocument(this._strand);
        }
        this.prepareCreatedBinding(org.apache.royale.utils.Language.as(sb, org.apache.royale.core.IBinding), binding);
      }
    } else if (org.apache.royale.utils.Language.is(binding.source, Array) && binding.source.length == 2 && binding.destination.length == 2) {
      var /** @type {Object} */ compWatcher = watchers.watcherMap[binding.source[0]];
      if (compWatcher) {
        fieldWatcher = compWatcher.children.watcherMap[binding.source[1]];
      }
      if (compWatcher && fieldWatcher && (binding.source[0] == "data" || (org.apache.royale.utils.Language.is(compWatcher.eventNames, String) && compWatcher.eventNames == "dataChange"))) {
        var /** @type {org.apache.royale.binding.ItemRendererSimpleBinding} */ irsb = new org.apache.royale.binding.ItemRendererSimpleBinding();
        irsb.destinationID = org.apache.royale.utils.Language.string(binding.destination[0]);
        irsb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        irsb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
        irsb.setDocument(this._strand);
        this._strand.addBead(irsb);
      } else if (fieldWatcher != null && org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
        sb = new org.apache.royale.binding.SimpleBinding();
        sb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        sb.eventName = org.apache.royale.utils.Language.as(fieldWatcher.eventNames, String);
        sb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
        sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
        sb.setDocument(this._strand);
        this.prepareCreatedBinding(org.apache.royale.utils.Language.as(sb, org.apache.royale.core.IBinding), binding);
      } else if (fieldWatcher == null || fieldWatcher.eventNames == null) {
        this.makeConstantBinding(binding);
      }
    } else {
      this.makeGenericBinding(binding, i, watchers);
    }
    fieldWatcher = null;
  }
};


/**
 * @private
 * @param {Object} binding
 * @param {number} index
 * @param {Object} watchers
 */
org.apache.royale.binding.ItemRendererDataBinding.prototype.makeGenericBinding = function(binding, index, watchers) {
  var /** @type {org.apache.royale.binding.GenericBinding} */ gb = new org.apache.royale.binding.GenericBinding();
  gb.setDocument(this._strand);
  gb.destinationData = binding.destination;
  gb.destinationFunction = binding.destFunc;
  gb.source = binding.source;
  this.setupWatchers(gb, index, watchers.watchers, null);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.ItemRendererDataBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemRendererDataBinding', qName: 'org.apache.royale.binding.ItemRendererDataBinding', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.ItemRendererDataBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'ItemRendererDataBinding': { type: '', declaredBy: 'org.apache.royale.binding.ItemRendererDataBinding'}
      };
    }
  };
};