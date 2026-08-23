import React from 'react';
const LABEL_21915 = 'component_21915';
export function Component21915({ value = 21915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21915, 'data-value': derived.doubled }, children);
}
export default Component21915;
