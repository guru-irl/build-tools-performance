import React from 'react';
const LABEL_26519 = 'component_26519';
export function Component26519({ value = 26519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26519, 'data-value': derived.doubled }, children);
}
export default Component26519;
