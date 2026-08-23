import React from 'react';
const LABEL_29314 = 'component_29314';
export function Component29314({ value = 29314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29314, 'data-value': derived.doubled }, children);
}
export default Component29314;
