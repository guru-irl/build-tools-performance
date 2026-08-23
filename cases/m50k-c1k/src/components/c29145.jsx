import React from 'react';
const LABEL_29145 = 'component_29145';
export function Component29145({ value = 29145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29145, 'data-value': derived.doubled }, children);
}
export default Component29145;
