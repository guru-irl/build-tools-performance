import React from 'react';
const LABEL_15397 = 'component_15397';
export function Component15397({ value = 15397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15397, 'data-value': derived.doubled }, children);
}
export default Component15397;
