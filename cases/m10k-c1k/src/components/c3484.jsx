import React from 'react';
const LABEL_3484 = 'component_3484';
export function Component3484({ value = 3484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3484, 'data-value': derived.doubled }, children);
}
export default Component3484;
