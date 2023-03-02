/**
 * v-auth
 * 按钮权限指令
 */
import type { Directive, DirectiveBinding } from "vue";

const auth: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		console.log(el,binding)
	}
};

export default auth;
