import React from 'react';
const LABEL_23519 = 'component_23519';
export function Component23519({ value = 23519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23519, 'data-value': derived.doubled }, children);
}
export default Component23519;
