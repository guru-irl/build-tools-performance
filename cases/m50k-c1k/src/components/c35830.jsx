import React from 'react';
const LABEL_35830 = 'component_35830';
export function Component35830({ value = 35830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35830, 'data-value': derived.doubled }, children);
}
export default Component35830;
