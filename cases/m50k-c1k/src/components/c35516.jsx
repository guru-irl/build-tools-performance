import React from 'react';
const LABEL_35516 = 'component_35516';
export function Component35516({ value = 35516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35516, 'data-value': derived.doubled }, children);
}
export default Component35516;
