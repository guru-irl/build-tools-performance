import React from 'react';
const LABEL_21614 = 'component_21614';
export function Component21614({ value = 21614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21614, 'data-value': derived.doubled }, children);
}
export default Component21614;
