import React from 'react';
const LABEL_26509 = 'component_26509';
export function Component26509({ value = 26509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26509, 'data-value': derived.doubled }, children);
}
export default Component26509;
