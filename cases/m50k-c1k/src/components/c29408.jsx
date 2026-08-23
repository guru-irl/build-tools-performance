import React from 'react';
const LABEL_29408 = 'component_29408';
export function Component29408({ value = 29408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29408, 'data-value': derived.doubled }, children);
}
export default Component29408;
