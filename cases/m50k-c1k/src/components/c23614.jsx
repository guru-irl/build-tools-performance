import React from 'react';
const LABEL_23614 = 'component_23614';
export function Component23614({ value = 23614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23614, 'data-value': derived.doubled }, children);
}
export default Component23614;
