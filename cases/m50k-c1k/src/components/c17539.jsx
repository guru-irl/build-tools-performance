import React from 'react';
const LABEL_17539 = 'component_17539';
export function Component17539({ value = 17539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17539, 'data-value': derived.doubled }, children);
}
export default Component17539;
