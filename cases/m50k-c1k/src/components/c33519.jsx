import React from 'react';
const LABEL_33519 = 'component_33519';
export function Component33519({ value = 33519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33519, 'data-value': derived.doubled }, children);
}
export default Component33519;
