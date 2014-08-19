var FoxitPDFPlugin = {
    openPDF: function(pdf,author){
        var options = {
            FilePath: pdf,
            AnnotationAuthor: author
        };
        cordova.exec(function(){},function(){},"FoxitPDFPlugin","openPDF",[options]);
    }
};