import React from 'react';
const LABEL_23539 = 'component_23539';
export function Component23539({ value = 23539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23539, 'data-value': derived.doubled }, children);
}
export default Component23539;
