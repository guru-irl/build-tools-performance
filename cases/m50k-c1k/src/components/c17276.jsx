import React from 'react';
const LABEL_17276 = 'component_17276';
export function Component17276({ value = 17276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17276, 'data-value': derived.doubled }, children);
}
export default Component17276;
