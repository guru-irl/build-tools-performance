import React from 'react';
const LABEL_13397 = 'component_13397';
export function Component13397({ value = 13397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13397, 'data-value': derived.doubled }, children);
}
export default Component13397;
