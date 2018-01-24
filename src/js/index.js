import 'core-js';
import HeaderVanilla from './vanilla_conmponents/vanilla-header.js';
import Factory from './vanilla_conmponents/component-factory'
require("../sass/entry.scss");
document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
// Pure JS renderer.
    const _header = HeaderVanilla.create({ text: "Default headline text" })
    .render(document.querySelector('#content-vanilla'));

    const factory = Factory(document.querySelector('#content-vanilla'), {}).create();

    console.log(factory)
}

