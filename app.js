var React = require('react');
var ReactDOM = require('react-dom');
var FilesUpload = require('./components/FilesUpload.react');
var idobjectname = '#' + document.getElementById('filesUpload').getAttribute("idobjectname");

ReactDOM.render(
<FilesUpload 
    dropdownurl={document.getElementById('filesUpload').getAttribute("dropdownurl")}
    category={document.getElementById('filesUpload').getAttribute("category")}
    idname={document.getElementById('filesUpload').getAttribute("idname")}
    idobject={$(idobjectname).val()}/>,
    document.getElementById('filesUpload')
);