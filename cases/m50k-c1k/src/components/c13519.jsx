import React from 'react';
const LABEL_13519 = 'component_13519';
export function Component13519({ value = 13519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13519, 'data-value': derived.doubled }, children);
}
export default Component13519;
