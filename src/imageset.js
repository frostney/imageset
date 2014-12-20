(function(exports) {
  
  /**
   * Converts a single element
   */
  var convert = function(element) {
    // Get data-src attribute
    var attribute = element.getAttribute('data-src');
    
    // Try to convert
    try {
      
    } catch(e) {
      
    }
  };
  
  /**
   * 
   * 
   */
  var imageset = function(nodeList) {
    if (!nodeList.length) {
      nodeList = [nodeList];
    }
    
    for (var i = 0, j = nodeList.length; i < j; i++) {
      convert(nodeList[i]);
    }
  };
  
  
  exports.imageset = imageset;
  
})(window);
