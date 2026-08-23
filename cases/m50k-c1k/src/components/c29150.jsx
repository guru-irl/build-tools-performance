import React from 'react';
const LABEL_29150 = 'component_29150';
export function Component29150({ value = 29150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29150, 'data-value': derived.doubled }, children);
}
export default Component29150;
