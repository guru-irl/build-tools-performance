import React from 'react';
const LABEL_45397 = 'component_45397';
export function Component45397({ value = 45397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45397, 'data-value': derived.doubled }, children);
}
export default Component45397;
