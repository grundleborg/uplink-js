'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function Client(server, warehouse, key) {
    var _this = this;

    _classCallCheck(this, Client);

    this.track = function (event, data) {
        var payload = {
            warehouse: _this.warehouse,
            source: _this.key,
            schema: event,
            client_timestamp: new Date().getTime(),
            data: data
        };
        return fetch(_this.server, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(payload)
        });
    };

    this.server = server;
    this.warehouse = warehouse;
    this.key = key;
};

exports.default = Client;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDbGllbnQiLCJzZXJ2ZXIiLCJ3YXJlaG91c2UiLCJrZXkiLCJ0cmFjayIsImV2ZW50IiwiZGF0YSIsInBheWxvYWQiLCJzb3VyY2UiLCJzY2hlbWEiLCJjbGllbnRfdGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBcUJBLE0sR0FDakIsZ0JBQVlDLE1BQVosRUFBb0JDLFNBQXBCLEVBQStCQyxHQUEvQixFQUFvQztBQUFBOztBQUFBOztBQUFBLFNBTXBDQyxLQU5vQyxHQU01QixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDckIsWUFBSUMsVUFBVTtBQUNWTCx1QkFBVyxNQUFLQSxTQUROO0FBRVZNLG9CQUFRLE1BQUtMLEdBRkg7QUFHVk0sb0JBQVFKLEtBSEU7QUFJVkssOEJBQW1CLElBQUlDLElBQUosRUFBRCxDQUFhQyxPQUFiLEVBSlI7QUFLVk4sa0JBQU1BO0FBTEksU0FBZDtBQU9BLGVBQU9PLE1BQU0sTUFBS1osTUFBWCxFQUFtQjtBQUN0QmEsb0JBQVEsTUFEYztBQUV0QkMsa0JBQU0sU0FGZ0I7QUFHdEJDLG1CQUFPLFVBSGU7QUFJdEJDLHlCQUFhLE1BSlM7QUFLdEJDLHFCQUFTO0FBQ0wsZ0NBQWdCO0FBRFgsYUFMYTtBQVF0QkMsc0JBQVUsUUFSWTtBQVN0QkMsc0JBQVUsYUFUWTtBQVV0QkMsa0JBQU1DLEtBQUtDLFNBQUwsQ0FBZWhCLE9BQWY7QUFWZ0IsU0FBbkIsQ0FBUDtBQVlILEtBMUJtQzs7QUFDaEMsU0FBS04sTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSCxDOztrQkFMZ0JILE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZlciwgd2FyZWhvdXNlLCBrZXkpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlID0gd2FyZWhvdXNlO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9O1xuXG4gICAgdHJhY2sgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICB3YXJlaG91c2U6IHRoaXMud2FyZWhvdXNlLFxuICAgICAgICAgICAgc291cmNlOiB0aGlzLmtleSxcbiAgICAgICAgICAgIHNjaGVtYTogZXZlbnQsXG4gICAgICAgICAgICBjbGllbnRfdGltZXN0YW1wOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuc2VydmVyLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iXX0=