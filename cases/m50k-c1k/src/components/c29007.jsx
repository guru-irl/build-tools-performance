import React from 'react';
const LABEL_29007 = 'component_29007';
export function Component29007({ value = 29007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29007, 'data-value': derived.doubled }, children);
}
export default Component29007;
