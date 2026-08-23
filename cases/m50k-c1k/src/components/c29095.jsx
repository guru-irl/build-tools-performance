import React from 'react';
const LABEL_29095 = 'component_29095';
export function Component29095({ value = 29095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29095, 'data-value': derived.doubled }, children);
}
export default Component29095;
