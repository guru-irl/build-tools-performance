import React from 'react';
const LABEL_22519 = 'component_22519';
export function Component22519({ value = 22519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22519, 'data-value': derived.doubled }, children);
}
export default Component22519;
