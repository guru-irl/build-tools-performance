import React from 'react';
const LABEL_29597 = 'component_29597';
export function Component29597({ value = 29597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29597, 'data-value': derived.doubled }, children);
}
export default Component29597;
