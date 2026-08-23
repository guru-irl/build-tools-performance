import React from 'react';
const LABEL_35539 = 'component_35539';
export function Component35539({ value = 35539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35539, 'data-value': derived.doubled }, children);
}
export default Component35539;
