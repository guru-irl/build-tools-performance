import React from 'react';
const LABEL_28519 = 'component_28519';
export function Component28519({ value = 28519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28519, 'data-value': derived.doubled }, children);
}
export default Component28519;
