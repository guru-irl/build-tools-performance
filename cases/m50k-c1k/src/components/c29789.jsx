import React from 'react';
const LABEL_29789 = 'component_29789';
export function Component29789({ value = 29789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29789, 'data-value': derived.doubled }, children);
}
export default Component29789;
