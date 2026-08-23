import React from 'react';
const LABEL_27471 = 'component_27471';
export function Component27471({ value = 27471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27471, 'data-value': derived.doubled }, children);
}
export default Component27471;
