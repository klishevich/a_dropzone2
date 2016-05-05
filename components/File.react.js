var React = require('react');

var Constants = {
    IdName: "IdFile",
    ClassName: "File"
};

var File = React.createClass({
    cellViewBase: function(parameter, isDate, isDatetime) {
        var currentClassName = Constants.ClassName + parameter;
        var currentValue = this.props[parameter];
        if (isDate) {
            if (isDatetime) {
                return (<td className={currentClassName}>{dateTimePickerShow(currentValue)}</td>);
            }
            else {
                return (<td className={currentClassName}>{datePickerShow(currentValue)}</td>);
            }
        }
        else {
            return (<td className={currentClassName}>{currentValue}</td>);
        }
    },
    cellViewDate: function(par) {
        return this.cellViewBase(par, true, false);
    },
    cellViewDateTime: function(par) {
        return this.cellViewBase(par, true, true);
    },
    cellViewText: function(par) {
        return this.cellViewBase(par, false, false);
    },
    //Строка в гриде
    rowViewBase: function (rowClassName) {
        var idName = Constants.ClassName + this.props[Constants.IdName];
        return (
        <tr className={rowClassName} id={idName}>
            <td><a href="#" className="btn btn-danger size-small" >Удалить</a></td>
            {this.cellViewText("ItemType_Name")}
            {this.cellViewText("FileName")}
            {this.cellViewText("ContentSize")}
            {this.cellViewText("User_Name")}
            {this.cellViewDate("UploadDate")}
            {this.cellViewText("Comment")}
        </tr>);
    },
    rowView: function() {
        return this.rowViewBase(Constants.ClassName);
    }, 
    render: function() {
        return this.rowView();
    }
});

module.exports = File;
