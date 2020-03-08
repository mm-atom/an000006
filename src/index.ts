import * as dot from 'dot';
import { HTMLElement } from 'node-html-parser';

export default function render(dom_node: HTMLElement, data: unknown, tpl: string, position_id: string) {
	const res = dot.template(tpl)(data);
	const list = dom_node.querySelectorAll(`[data-mm-tpl=${position_id}]`);
	if (!list || list.length === 0) {
		throw new Error(`cannot find node: ${position_id}`);
	} else {
		list.forEach((n) => {
			n.set_content(res || '');
		});
	}
}
