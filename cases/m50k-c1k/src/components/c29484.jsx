import React from 'react';
const LABEL_29484 = 'component_29484';
export function Component29484({ value = 29484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29484, 'data-value': derived.doubled }, children);
}
export default Component29484;
