import React from 'react';
const LABEL_22885 = 'component_22885';
export function Component22885({ value = 22885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22885, 'data-value': derived.doubled }, children);
}
export default Component22885;
