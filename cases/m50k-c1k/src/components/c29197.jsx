import React from 'react';
const LABEL_29197 = 'component_29197';
export function Component29197({ value = 29197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29197, 'data-value': derived.doubled }, children);
}
export default Component29197;
