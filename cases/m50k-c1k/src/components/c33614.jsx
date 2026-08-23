import React from 'react';
const LABEL_33614 = 'component_33614';
export function Component33614({ value = 33614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33614, 'data-value': derived.doubled }, children);
}
export default Component33614;
