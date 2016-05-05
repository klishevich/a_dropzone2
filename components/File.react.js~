var React = require('react');
var Dropzone = require('react-dropzone');
var File = require('./File.react');

var FilesList = React.createClass({
    getInitialState: function() {
        return { sort_asc: '', sort_column: ''};
    },
    handleSortOrder: function(e) {
        e.preventDefault();
        this.setState({sort_column: e.target.name});
        switch(this.state.sort_asc) {
            case '':
            case true:
                this.setState({ sort_asc: false });
                break;
            case false:
                this.setState({ sort_asc: true });
                break;
        }
    },
    // сортировка
    compareSortAsc: function(x, y) {
        return compare(x, y, this.state.sort_column);
    },
    compareSortDesc: function(x, y) {
        return compare(y, x, this.state.sort_column);
    },
    // сортировка
    // направление сортировки
    currentChevron: function(currentColumn) {
        var classname = "";
        if(currentColumn == this.state.sort_column)
        {
            if(this.state.sort_asc)
            {
                classname = "glyphicon glyphicon-chevron-up";
            }
            else
            {
                classname = "glyphicon glyphicon-chevron-down";
            }
        }

        return classname;
    },
    tableHeaderTitle: function(columnName) {
        return  (
            <div>
              <a href="#" onClick={this.handleSortOrder} name={columnName}>{Constants[columnName]}</a>
              <span className={this.currentChevron(columnName)}></span>
            </div>
            );
    },
    // направление сортировки
    render: function() {
        var sorted_data;
        var chevron = this.state.sort_asc;
        switch(this.state.sort_asc) {
            case true:
                sorted_data = this.props.data.sort(this.compareSortAsc);
                break;
            case false:
                sorted_data = this.props.data.sort(this.compareSortDesc);
                break;
            default:
                sorted_data = this.props.data;
        }
        
        var _this = this, errorNodes = this.props.data.map(function(item){
            if (item.Errors) {
                return (
                    <GridError 
                      Errors={item.Errors} 
                      key={item[Constants.IdName]}
                      colSpan={Constants.colSpan}>
                    </GridError>
                    );
                }
        });

        //edit
        var _this = this, listNodes = this.props.data.map(function(item) {
            if (item.IdCourtCaseSide != -1) {
                return (
                    <File 
                      key={item.IdFile}
                      IdFile={item.IdFile}
                      IdCourtCaseSide={item.IdCourtCaseSide}
                      Name={item.Name}
                      CourtCaseSideType_Name={item.CourtCaseSideType_Name}
                      Description={item.Description}
                      Errors={item.Errors}>
                    </File>
                );
            }
        });
        
        var listName = "FilesList List table table-striped table-bordered horizontalScroll";

        //edit
        //Заголовки колонок таблицы
        return (
          <table className={listName}>
              <thead className="tableHeader">
                <tr>
                    <th className="th-default">
                      {this.tableHeaderTitle("Name")}
                    </th>
                    <th className="th-default">
                      {this.tableHeaderTitle("CourtCaseSideType_Name")}
                    </th>
                    <th className="th-max">
                      {this.tableHeaderTitle("Description")}
                    </th>                             
                </tr>
              </thead>
            <tbody>
                {errorNodes}
                {listNodes}
            </tbody>
          </table>
      );
    }
});

module.exports = FilesList;
