import React from 'react';
const LABEL_17264 = 'component_17264';
export function Component17264({ value = 17264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17264, 'data-value': derived.doubled }, children);
}
export default Component17264;
