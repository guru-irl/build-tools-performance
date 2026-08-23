import React from 'react';
const LABEL_21397 = 'component_21397';
export function Component21397({ value = 21397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21397, 'data-value': derived.doubled }, children);
}
export default Component21397;
