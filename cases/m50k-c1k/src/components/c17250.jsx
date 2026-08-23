import React from 'react';
const LABEL_17250 = 'component_17250';
export function Component17250({ value = 17250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17250, 'data-value': derived.doubled }, children);
}
export default Component17250;
