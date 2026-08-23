import React from 'react';
const LABEL_29519 = 'component_29519';
export function Component29519({ value = 29519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29519, 'data-value': derived.doubled }, children);
}
export default Component29519;
