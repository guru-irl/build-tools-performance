import React from 'react';
const LABEL_29576 = 'component_29576';
export function Component29576({ value = 29576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29576, 'data-value': derived.doubled }, children);
}
export default Component29576;
