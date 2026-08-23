import React from 'react';
const LABEL_29379 = 'component_29379';
export function Component29379({ value = 29379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29379, 'data-value': derived.doubled }, children);
}
export default Component29379;
