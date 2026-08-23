import React from 'react';
const LABEL_17610 = 'component_17610';
export function Component17610({ value = 17610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17610, 'data-value': derived.doubled }, children);
}
export default Component17610;
