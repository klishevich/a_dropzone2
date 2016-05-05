var React = require('react');


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
            {buttonsExists}
            {this.cellViewText("Name")}
            {this.cellViewText("CourtCaseSideType_Name")}
            {this.cellViewText("Description")}
        </tr>);
    },
    rowView: function() {
        return this.rowViewBase(Constants.ClassName);
    },
    rowViewError: function() {
        name = Constants.ClassName + " table-error-row";
        return this.rowViewBase(name);
    },
    inputBaseText: function(columnName, type) {
        return (
                    <input className="form-control input-sm" type={type} name={columnName} id={columnName}
                           placeholder={Constants[columnName]} value={this.state[columnName]}
                           onChange={this.handleCommonChange}/>
                );
    },
    inputText: function(columnName) {
        return this.inputBaseText(columnName, "text");
    },
    inputTextarea: function(columnName, rows) {
        return (
                    <textarea className="form-control input-sm" rows={rows} name={columnName} id={columnName} style={{width: '100%'}}
                              placeholder={Constants[columnName]} value={this.state[columnName]}
                              onChange={this.handleCommonChange} />
                );
    },
    handleDateTimePickerChange : function(name, value) {
        this.setState({
            [name]: convertDateEdit(value)
        });
    },    
    inputBaseDatetme: function(columnName, hasTime, format) {
        return  (
                    <DateTimePicker format={format} name={columnName} time={hasTime} value={datePickerEdit(this.state[columnName])}
                                    onChange={this.handleDateTimePickerChange.bind(null, columnName)} />
                );
    },
    inputDate: function(columnName) {
        return this.inputBaseDatetme(columnName, false, DateFormat);
    },
    inputDatetime: function(columnName) {
        return this.inputBaseDatetme(columnName, true, DateTimeFormat);
    },
    handleSelectChange: function(item) {
        this.setState(item);
    },    
    render: function() {
        if ((this.state.edit && this.props.editing_row == this.props[Constants.IdName]) || this.props.add == "true") {
            return this.rowEdit();
        }
        else {
            if (this.props.Errors) {
                return this.rowViewError();
            }
            else {
                return this.rowView();
            }
        }
    }
});

module.exports = File;
