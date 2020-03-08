import * as dot from 'dot';
import { HTMLElement } from 'node-html-parser';

/**
 * html渲染
 *
 * @param dom_node 结点对象，p应位于该结点之内
 * @param data 数据
 * @param tpl dot模板字符串
 * @param position_id p名称，在html上属性`data-feidao-presentation`对应的属性值
 */
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
