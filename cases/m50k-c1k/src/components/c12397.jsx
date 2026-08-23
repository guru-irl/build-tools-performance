import React from 'react';
const LABEL_12397 = 'component_12397';
export function Component12397({ value = 12397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12397, 'data-value': derived.doubled }, children);
}
export default Component12397;
