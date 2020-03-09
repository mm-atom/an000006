import * as dot from 'dot';
import aw2 from '@mmstudio/an000002';

export default function render(mm: aw2, data: unknown, tpl: string, position_id: string) {
	const node = mm.data.node;
	const res = dot.template(tpl)(data);
	const list = node.querySelectorAll(`[data-mm-tpl=${position_id}]`);
	if (!list || list.length === 0) {
		throw new Error(`cannot find node: ${position_id}`);
	} else {
		list.forEach((n) => {
			n.set_content(res || '');
		});
	}
}
