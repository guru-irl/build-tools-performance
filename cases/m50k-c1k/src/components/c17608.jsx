import React from 'react';
const LABEL_17608 = 'component_17608';
export function Component17608({ value = 17608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17608, 'data-value': derived.doubled }, children);
}
export default Component17608;
