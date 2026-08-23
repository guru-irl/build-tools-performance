import React from 'react';
const LABEL_17837 = 'component_17837';
export function Component17837({ value = 17837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17837, 'data-value': derived.doubled }, children);
}
export default Component17837;
