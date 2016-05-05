var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"' : '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
    };

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
}

/**
 * Возвращает данные представления 
 * @param {viewPath} Путь к блоку с которого нужно собирать данные (body, form или div и т.д.)
 * @param {casheIdConrolPath} Путь к hidden-полю со значением Ид кэша модели
 * @param {modelKeyControlPath} deprecated параметр
*/
function GetViewData(viewPath, casheIdConrolPath, modelKeyControlPath, prefix, onlyData) {
    if (viewPath == undefined || viewPath == null || viewPath == '') {
        viewPath = 'body';
    }
    if (casheIdConrolPath == undefined || casheIdConrolPath == null || casheIdConrolPath == '') {
        casheIdConrolPath = '#CacheId';
    }
    if (modelKeyControlPath == undefined || modelKeyControlPath == null || modelKeyControlPath == '') {
        modelKeyControlPath = '#ModelKey';
    }
    var cacheId = $(casheIdConrolPath).val();
    var data = "CacheId=" + cacheId;

    var modelKey = $(modelKeyControlPath).val();
    if (modelKey != undefined && modelKey != null && modelKey != '') {
        data = data + "&modelKey=" + modelKey;
    }

    if (prefix == undefined || prefix == null || prefix == '') {
        prefix = '';
    }

    if (onlyData == undefined || onlyData == null || onlyData == '') {
        onlyData = false;
    }

    if (onlyData) {
        data = '';
    }

    $(viewPath).find("input[type=hidden][binding=View], select, input[type=text], input[type=checkbox], [data-content]").each(function (obj) {
        var value = $(this).val();
        if ($(this).prop("type") == "checkbox") {
            value = $(this).is(':checked') ? "true" : "false";
        }
        else {
            value = $(this).val();
        }
        data = data + "&" + prefix + $(this).prop("name").replace(/\[/g, "%5B").replace(/\]/g, "%5D") + "=" +escapeHtml(value);
    });
    return data;
};

/** Конвертит дату из JSON для формы редактирования */
function convertDateEdit(date) {
    if (date) {
        return moment(date).format();
    }
    else {
        return null;
    }
}

/** Фунция получения значения элемента */
function getElementValue($element) {
    if ($element.is('input[type=checkbox]')) {
        return $element.is(':checked') ? 'checked' : '';
    }
    return $element.val();
}

function compare(a, b, column) {
    var va = "";
    var vb = "";
    if (a[column] != null)
        va = a[column].toLowerCase();
    if (b[column] != null)
        vb = b[column].toLowerCase();
    if (va < vb)
        return -1;
    else if (va > vb)
        return 1;
    else
        return 0;
}

function datePickerEdit(string_date) {
    if (string_date){
        return moment(string_date).toDate();
    }
    else {
        return null;
    }
}

function datePickerShow(string_date) {
    if (string_date){
        return moment(string_date).format("DD.MM.YYYY");
    }
    else {
        return null;
    }
}

function dateTimePickerShow(string_date) {
    if (string_date){
        return moment(string_date).format("DD.MM.YYYY HH:mm");
    }
    else {
        return null;
    }
}

function focusAndBlinkOnElement(lastElement, elementName, elementId, doScroll) {
    // сперва получаем позицию элемента относительно документа
    var element = elementName + lastElement[elementId];
    // скроллим страницу на значение равное позиции элемента
    if (doScroll) {
        var scrollTop = $(element).offset().top;
        $(document).scrollTop(scrollTop);
    }

    $(element).addClass("blinkOn");
}