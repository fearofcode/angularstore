angular.module("customFilters", [])
    .filter("unique", function() {
        return function(data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                categories = _.map(data, function(element) { return element[propertyName]});

                return _.uniq(categories);
            } else {
                return data;
            }
        }
    })
    .filter("range", function($filter) {
        return function(data, page, size) {
            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                var start = (page-1)*size;

                if(data.length < start) {
                    return [];
                } else {
                    return $filter("limitTo")(data.splice(start), size);
                }
            } else {
                return data;
            }
        }
    })
    .filter("pageCount", function() {
        return function(data, size) {
            if(angular.isArray(data)) {
                var result = [];

                for(var i = 0; i < Math.ceil(data.length / size); i++) {
                    result.push(i)
                }

                return result;
            } else {
                return data;
            }
        }
    });