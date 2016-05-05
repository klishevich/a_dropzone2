var React = require('react');
var File = require('./File.react');

var FilesList = React.createClass({
    tableHeaderTitle: function(columnName) {
        return  (
            <div>
              {columnName}
            </div>
            );
    },
    // направление сортировки
    render: function() {
        var sorted_data = this.props.data;

        //edit
        var _this = this, listNodes = this.props.data.map(function(item) {
            if (item.IdCourtCaseSide != -1) {
                return (
                    <File 
                      key={item.IdFile}
                      IdFile={item.IdFile}
                      IdObject={item.IdObject}
                      IdItemType={item.IdItemType}
                      FileName={item.FileName}
                      Extension={item.Extension}
                      UploadDate={item.UploadDate}
                      ContentSizeInBytes={item.ContentSizeInBytes}
                      ContentSize={item.ContentSize}
                      ArchiveUrl={item.ArchiveUrl}
                      IdUser={item.IdUser}
                      Deleted={item.Deleted}
                      Comment={item.Comment}
                      DocumentType={item.DocumentType}>
                    </File>
                );
            }
        });
        
        var listName = "FilesList List table table-striped table-bordered horizontalScroll";

        //edit
        //Заголовки колонок таблицы
        return (
            <div class="view-content-container filesList">
              <h3>Список файлов</h3>
              <table className={listName}>
                  <thead className="tableHeader">
                    <tr>
                        <th className="th-default">
                          {this.tableHeaderTitle("Действия")}
                        </th>
                        <th className="th-default">
                          {this.tableHeaderTitle("Тип файла")}
                        </th>
                        <th className="th-default">
                          {this.tableHeaderTitle("Имя файла")}
                        </th>
                        <th className="th-default">
                          {this.tableHeaderTitle("Размер")}
                        </th>
                        <th className="th-default">
                          {this.tableHeaderTitle("Создатель")}
                        </th>
                        <th className="th-default">
                          {this.tableHeaderTitle("Дата созания")}
                        </th>
                        <th className="th-max">
                          {this.tableHeaderTitle("Комментарий")}
                        </th>
                    </tr>
                  </thead>
                <tbody>
                    {listNodes}
                </tbody>
              </table>
            </div>
      );
    }
});

module.exports = FilesList;