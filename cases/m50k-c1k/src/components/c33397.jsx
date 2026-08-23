import React from 'react';
const LABEL_33397 = 'component_33397';
export function Component33397({ value = 33397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33397, 'data-value': derived.doubled }, children);
}
export default Component33397;
