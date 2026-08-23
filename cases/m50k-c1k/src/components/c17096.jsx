import React from 'react';
const LABEL_17096 = 'component_17096';
export function Component17096({ value = 17096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17096, 'data-value': derived.doubled }, children);
}
export default Component17096;
