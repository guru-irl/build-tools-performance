import React from 'react';
const LABEL_35633 = 'component_35633';
export function Component35633({ value = 35633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35633, 'data-value': derived.doubled }, children);
}
export default Component35633;
