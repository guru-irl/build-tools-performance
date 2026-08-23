import React from 'react';
const LABEL_17614 = 'component_17614';
export function Component17614({ value = 17614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17614, 'data-value': derived.doubled }, children);
}
export default Component17614;
