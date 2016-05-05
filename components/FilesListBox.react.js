var React = require('react');
var Dropzone = require('react-dropzone');
var FilesUpload = require('./FilesUpload.react');
var FilesList = require('./FilesList.react');

var FilesListBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        this.loadFromServer();
    },
    loadFromServer: function() {
        $.ajax({
            url: '/CourtCase/FilesList/' + this.props.idobject,
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (this.isMounted()) {
                    console.log('files data', data);
                    this.setState({data: data});
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("/", status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="view-content-container FilesListBox">
            	<FilesUpload 
            	    dropdownurl={this.props.dropdownurl}
            	    category={this.props.category}
            	    idname={this.props.idname}
            	    idobject={this.props.idobject}
            	    onUpdate={this.loadFromServer}/>
                <h3>Список файлов</h3>
                <FilesList data={this.state.data}/>
        	</div>
      );
    }
});

module.exports = FilesListBox;
