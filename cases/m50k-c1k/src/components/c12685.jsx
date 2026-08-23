import React from 'react';
const LABEL_12685 = 'component_12685';
export function Component12685({ value = 12685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12685, 'data-value': derived.doubled }, children);
}
export default Component12685;
