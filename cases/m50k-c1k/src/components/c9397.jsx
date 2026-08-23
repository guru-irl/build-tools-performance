import React from 'react';
const LABEL_9397 = 'component_9397';
export function Component9397({ value = 9397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9397, 'data-value': derived.doubled }, children);
}
export default Component9397;
