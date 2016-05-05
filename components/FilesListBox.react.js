var React = require('react');
var Dropzone = require('react-dropzone');
var FilesUpload = require('./FilesUpload.react');

var FilesListBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        this.loadFromServer();
    },
    loadFromServer: function() {
        $.ajax({
            url: '/CourtCase/FilesList/' + this.props.IdObject,
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (this.isMounted()) {
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
	<FilesUpload 
	    dropdownurl={this.props.dropdownurl}
	    category={this.props.category}
	    idname={this.props.idname}
	    idobject={this.props.idobject}
	    onUpdate={this.loadFromServer}/>
        <div className="view-content-container FilesList">
            <h3>Список файлов</h3>
            <FilesList data={this.state.data}/>
	</div>
      );
    }
});

module.exports = FilesListBox;
