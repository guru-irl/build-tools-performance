import React from 'react';
const LABEL_10150 = 'component_10150';
export function Component10150({ value = 10150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10150, 'data-value': derived.doubled }, children);
}
export default Component10150;
