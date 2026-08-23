import React from 'react';
const LABEL_17416 = 'component_17416';
export function Component17416({ value = 17416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17416, 'data-value': derived.doubled }, children);
}
export default Component17416;
