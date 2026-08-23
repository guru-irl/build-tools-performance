import React from 'react';
const LABEL_31397 = 'component_31397';
export function Component31397({ value = 31397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31397, 'data-value': derived.doubled }, children);
}
export default Component31397;
