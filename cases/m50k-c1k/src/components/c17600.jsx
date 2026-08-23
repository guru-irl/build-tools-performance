import React from 'react';
const LABEL_17600 = 'component_17600';
export function Component17600({ value = 17600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17600, 'data-value': derived.doubled }, children);
}
export default Component17600;
