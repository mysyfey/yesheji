(function() {
    if (!window.utilities) {
        window.utilities = {};
    };
    window.utilities = {
        cssPropertyValueSupported: function(prop, value) {
            var d = document.createElement('div');
            d.style[prop] = value;
            return d.style[prop] === value;
        }
    };
})();