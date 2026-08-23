import React from 'react';
const LABEL_22113 = 'component_22113';
export function Component22113({ value = 22113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22113, 'data-value': derived.doubled }, children);
}
export default Component22113;
