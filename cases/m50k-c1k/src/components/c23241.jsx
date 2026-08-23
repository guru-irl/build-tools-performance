import React from 'react';
const LABEL_23241 = 'component_23241';
export function Component23241({ value = 23241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23241, 'data-value': derived.doubled }, children);
}
export default Component23241;
