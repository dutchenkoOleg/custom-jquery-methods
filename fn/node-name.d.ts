interface JQuery<TElement = HTMLElement> {
	/**
	 * Returns `nodeName` property of DOM element  in lowercase.
	 * Useful when you can get unknown elements.
	 *
	 * @example <caption>Received unknown elements in function</caption>
	 * function myFunction ($el) {
	 *     switch ($el.nodeName()) {
	 *         case 'img':
	 *             // ...
	 *             break;
	 *         case 'div':
	 *             // ...
	 *             break;
	 *         case 'input':
	 *             // ...
	 *             break;
	 *         default:
	 *             // ...
	 *     }
	 * }
	 */
	nodeName(): string;
}
