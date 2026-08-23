import React from 'react';
const LABEL_29695 = 'component_29695';
export function Component29695({ value = 29695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29695, 'data-value': derived.doubled }, children);
}
export default Component29695;
