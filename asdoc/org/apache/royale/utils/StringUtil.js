/**
 * Generated by Apache Royale Compiler from org\apache\royale\utils\StringUtil.as
 * org.apache.royale.utils.StringUtil
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.StringUtil');

goog.require('org.apache.royale.utils.StringTrimmer');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 */
org.apache.royale.utils.StringUtil = function() {
  throw new Error("StringUtil should not be instantiated.");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.StringUtil', org.apache.royale.utils.StringUtil);


/**
 *  Substitutes "{n}" tokens within the specified string
 *  with the respective arguments passed in.
 * 
 *  Note that this uses String.replace and "$" can have special
 *  meaning in the argument strings escape by using "$$".
 *
 *  @asparam str The string to make substitutions in.
 *  This string can contain special tokens of the form
 *  <code>{n}</code>, where <code>n</code> is a zero based index,
 *  that will be replaced with the additional parameters
 *  found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be substituted
 *  in the <code>str</code> parameter at each <code>{n}</code>
 *  location, where <code>n</code> is an integer (zero based)
 *  index value into the array of values specified.
 *  If the first parameter is an array this array will be used as
 *  a parameter list.
 *  This allows reuse of this routine in other methods that want to
 *  use the ... rest signature.
 *  For example <pre>
 *     public function myTracer(str:String, ... rest):void
 *     { 
 *         label.text += StringUtil.substitute(str, rest) + "\n";
 *     } </pre>
 *
 *  @asreturn New string with all of the <code>{n}</code> tokens
 *  replaced with the respective arguments specified.
 *
 *  @example
 *
 *  var str:String = "here is some info '{0}' and {1}";
 *  trace(StringUtil.substitute(str, 15.4, true));
 *
 *  // this will output the following string:
 *  // "here is some info '15.4' and true"
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 *  @productversion Royale 0.0
 * @export
 * @param {string} str
 * @param {...} rest
 * @return {string}
 */
org.apache.royale.utils.StringUtil.substitute = function(str, rest) {
  rest = Array.prototype.slice.call(arguments, 1);
  if (str === null)
    return '';
  var /** @type {number} */ len = rest.length;
  var /** @type {Array} */ args;
  if (len === 1 && org.apache.royale.utils.Language.is(rest[0], Array)) {
    args = org.apache.royale.utils.Language.as(rest[0], Array);
    len = args.length;
  } else {
    args = rest;
  }
  for (var /** @type {number} */ i = 0; i < len; i++) {
    str = str.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
  }
  return str;
};


/**
 *  Returns a string consisting of a specified string
 *  concatenated with itself a specified number of times.
 *
 *  @asparam str The string to be repeated.
 *
 *  @asparam n The repeat count.
 *
 *  @asreturn The repeated string.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 1.0.0.1
 *  @productversion Royale 0.0
 * @export
 * @param {string} str
 * @param {number} n
 * @return {string}
 */
org.apache.royale.utils.StringUtil.repeat = function(str, n) {
  if (n === 0)
    return "";
  var /** @type {Array} */ a = [];
  for (var /** @type {number} */ i = 0; i < n; i++) {
    a.push(str);
  }
  return a.join("");
};


/**
 *  Removes "unallowed" characters from a string.
 *  A "restriction string" such as <code>"A-Z0-9"</code>
 *  is used to specify which characters are allowed.
 *  This method uses the same logic as the <code>restrict</code>
 *  property of TextField.
 *
 *  @asparam str The input string.
 *
 *  @asparam restrict The restriction string.
 *
 *  @asreturn The input string, minus any characters
 *  that are not allowed by the restriction string.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 1.0.0.1
 *  @productversion Royale 0.0
 * @export
 * @param {string} str
 * @param {string} restrict
 * @return {string}
 */
org.apache.royale.utils.StringUtil.restrict = function(str, restrict) {
  if (restrict === null)
    return str;
  if (restrict === "")
    return "";
  var /** @type {Array} */ charCodes = [];
  var /** @type {number} */ n = str.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {number} */ charCode = str.charCodeAt(i);
    if (org.apache.royale.utils.StringUtil.testCharacter(charCode, restrict))
      charCodes.push(charCode);
  }
  return String.fromCharCode.apply(null, charCodes);
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of the specified string.
 *
 *  @asparam str The String whose whitespace should be trimmed. 
 *
 *  @asreturn Updated String where whitespace was removed from the 
 *  beginning and end. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {string} str
 * @return {string}
 */
org.apache.royale.utils.StringUtil.trim = function(str) {
  return org.apache.royale.utils.StringTrimmer.trim(str);
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Array where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {string} value
 * @param {string} delimiter
 * @return {Array}
 */
org.apache.royale.utils.StringUtil.splitAndTrim = function(value, delimiter) {
  return org.apache.royale.utils.StringTrimmer.splitAndTrim(value, delimiter);
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Updated String where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {string} value
 * @param {string} delimiter
 * @return {string}
 */
org.apache.royale.utils.StringUtil.trimArrayElements = function(value, delimiter) {
  return org.apache.royale.utils.StringTrimmer.trimArrayElements(value, delimiter);
};


/**
 *  Returns <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *
 *  @asparam str The String that is is being queried. 
 *
 *  @asreturn <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {string} character
 * @return {boolean}
 */
org.apache.royale.utils.StringUtil.isWhitespace = function(character) {
  return org.apache.royale.utils.StringTrimmer.isWhitespace(character);
};


/**
 *  @asprivate
 *  Helper method used by restrict() to test each character
 *  in the input string against the restriction string.
 *  The logic in this method implements the same algorithm
 *  as in TextField's 'restrict' property (which is quirky,
 *  such as how it handles a '-' at the beginning of the
 *  restriction string).
 * @private
 * @param {number} charCode
 * @param {string} restrict
 * @return {boolean}
 */
org.apache.royale.utils.StringUtil.testCharacter = function(charCode, restrict) {
  var /** @type {boolean} */ allowIt = false;
  var /** @type {boolean} */ inBackSlash = false;
  var /** @type {boolean} */ inRange = false;
  var /** @type {boolean} */ setFlag = true;
  var /** @type {number} */ lastCode = 0;
  var /** @type {number} */ n = restrict.length;
  var /** @type {number} */ code = 0;
  if (n > 0) {
    code = restrict.charCodeAt(0);
    if (code === 94)
      allowIt = true;
  }
  for (var /** @type {number} */ i = 0; i < n; i++) {
    code = restrict.charCodeAt(i);
    var /** @type {boolean} */ acceptCode = false;
    if (!inBackSlash) {
      if (code === 45)
        inRange = true;
      else if (code === 94)
        setFlag = !setFlag;
      else if (code === 92)
        inBackSlash = true;
      else
        acceptCode = true;
    } else {
      acceptCode = true;
      inBackSlash = false;
    }
    if (acceptCode) {
      if (inRange) {
        if (lastCode <= charCode && charCode <= code)
          allowIt = setFlag;
        inRange = false;
        lastCode = 0;
      } else {
        if (charCode === code)
          allowIt = setFlag;
        lastCode = code;
      }
    }
  }
  return allowIt;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.StringUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StringUtil', qName: 'org.apache.royale.utils.StringUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.StringUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'StringUtil': { type: '', declaredBy: 'org.apache.royale.utils.StringUtil'},
        '|substitute': { type: 'String', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        '|repeat': { type: 'String', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        '|restrict': { type: 'String', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|trim': { type: 'String', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|splitAndTrim': { type: 'Array', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|trimArrayElements': { type: 'String', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|isWhitespace': { type: 'Boolean', declaredBy: 'org.apache.royale.utils.StringUtil', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};