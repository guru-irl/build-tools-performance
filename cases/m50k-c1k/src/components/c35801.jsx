import React from 'react';
const LABEL_35801 = 'component_35801';
export function Component35801({ value = 35801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35801, 'data-value': derived.doubled }, children);
}
export default Component35801;
