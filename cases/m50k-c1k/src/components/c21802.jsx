import React from 'react';
const LABEL_21802 = 'component_21802';
export function Component21802({ value = 21802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21802, 'data-value': derived.doubled }, children);
}
export default Component21802;
