import React from 'react';
const LABEL_14509 = 'component_14509';
export function Component14509({ value = 14509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14509, 'data-value': derived.doubled }, children);
}
export default Component14509;
