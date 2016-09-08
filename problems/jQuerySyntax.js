// Can't use ES6 Class Syntax without invoking it with 'new' keyword :(
function $(elementOrNode) {
    if (!new.target) {
        return new $(elementOrNode);
    }

    if(elementOrNode.nodeType && elementOrNode.nodeType === 1) {
        this.el = [elementOrNode];
        return this;
    }

    this.elementName = elementOrNode;

    const el = document.querySelectorAll(elementOrNode);
    this.el  = [];
    for (let i = 0, len = el.length; i < len; i++) {
        this.el.push(el[i]);
    }
}

$.prototype.addClass = function (className) {
    this.el.forEach((element) => {
        element.classList.add(className);
    });

    return this;
};

$.prototype.on = function (event, callback) {
    if (event === 'click') {
        this.el.forEach((element) => {
            element.addEventListener(event, (e) => {
                callback.apply(e.target, [e]);
            });
        });
    }

    return this;
};

$.prototype.toggleClass = function (className) {
    this.el.forEach((element) => {
        element.classList.toggle(className);
    });

    return this;
};


/**
 * The challenge is to get this piece of code to work
 */
$(".item").addClass("blue").on("click", function (e) {
    $(this).toggleClass("bold");
});
