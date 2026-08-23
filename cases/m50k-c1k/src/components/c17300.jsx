import React from 'react';
const LABEL_17300 = 'component_17300';
export function Component17300({ value = 17300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17300, 'data-value': derived.doubled }, children);
}
export default Component17300;
