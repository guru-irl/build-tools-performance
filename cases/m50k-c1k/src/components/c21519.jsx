import React from 'react';
const LABEL_21519 = 'component_21519';
export function Component21519({ value = 21519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21519, 'data-value': derived.doubled }, children);
}
export default Component21519;
