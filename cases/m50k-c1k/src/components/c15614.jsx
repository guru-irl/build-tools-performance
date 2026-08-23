import React from 'react';
const LABEL_15614 = 'component_15614';
export function Component15614({ value = 15614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15614, 'data-value': derived.doubled }, children);
}
export default Component15614;
