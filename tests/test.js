const test = require('ava');
const { default: parse } = require('node-html-parser');

const { default: a } = require('../dist/index');

test('render', async (t) => {
	const root = await parse('<div><div data-mm-tpl="p01"></div></div>');
	const div = root.firstChild;
	await a(div, {}, '<foo>bar</foo>', 'p01');
	t.is(div.toString(), '<div><div data-mm-tpl="p01"><foo>bar</foo></div></div>');
});
