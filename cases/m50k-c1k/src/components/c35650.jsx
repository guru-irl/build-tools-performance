import React from 'react';
const LABEL_35650 = 'component_35650';
export function Component35650({ value = 35650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35650, 'data-value': derived.doubled }, children);
}
export default Component35650;
