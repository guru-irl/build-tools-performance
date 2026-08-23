import React from 'react';
const LABEL_17227 = 'component_17227';
export function Component17227({ value = 17227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17227, 'data-value': derived.doubled }, children);
}
export default Component17227;
