import React from 'react';
const LABEL_17277 = 'component_17277';
export function Component17277({ value = 17277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17277, 'data-value': derived.doubled }, children);
}
export default Component17277;
