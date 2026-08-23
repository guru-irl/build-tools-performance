import React from 'react';
const LABEL_13150 = 'component_13150';
export function Component13150({ value = 13150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13150, 'data-value': derived.doubled }, children);
}
export default Component13150;
