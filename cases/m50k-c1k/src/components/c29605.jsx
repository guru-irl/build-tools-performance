import React from 'react';
const LABEL_29605 = 'component_29605';
export function Component29605({ value = 29605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29605, 'data-value': derived.doubled }, children);
}
export default Component29605;
