import React from 'react';
const LABEL_14612 = 'component_14612';
export function Component14612({ value = 14612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14612, 'data-value': derived.doubled }, children);
}
export default Component14612;
