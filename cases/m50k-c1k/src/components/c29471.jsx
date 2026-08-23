import React from 'react';
const LABEL_29471 = 'component_29471';
export function Component29471({ value = 29471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29471, 'data-value': derived.doubled }, children);
}
export default Component29471;
