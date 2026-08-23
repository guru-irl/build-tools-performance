import React from 'react';
const LABEL_29509 = 'component_29509';
export function Component29509({ value = 29509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29509, 'data-value': derived.doubled }, children);
}
export default Component29509;
