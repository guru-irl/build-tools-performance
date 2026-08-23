import React from 'react';
const LABEL_29445 = 'component_29445';
export function Component29445({ value = 29445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29445, 'data-value': derived.doubled }, children);
}
export default Component29445;
