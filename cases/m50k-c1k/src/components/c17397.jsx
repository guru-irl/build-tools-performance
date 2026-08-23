import React from 'react';
const LABEL_17397 = 'component_17397';
export function Component17397({ value = 17397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17397, 'data-value': derived.doubled }, children);
}
export default Component17397;
