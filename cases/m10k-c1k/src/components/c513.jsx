import React from 'react';
const LABEL_513 = 'component_513';
export function Component513({ value = 513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_513, 'data-value': derived.doubled }, children);
}
export default Component513;
