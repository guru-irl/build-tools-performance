import React from 'react';
const LABEL_22789 = 'component_22789';
export function Component22789({ value = 22789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22789, 'data-value': derived.doubled }, children);
}
export default Component22789;
