import React from 'react';
const LABEL_22761 = 'component_22761';
export function Component22761({ value = 22761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22761, 'data-value': derived.doubled }, children);
}
export default Component22761;
