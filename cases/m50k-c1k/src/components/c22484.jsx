import React from 'react';
const LABEL_22484 = 'component_22484';
export function Component22484({ value = 22484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22484, 'data-value': derived.doubled }, children);
}
export default Component22484;
