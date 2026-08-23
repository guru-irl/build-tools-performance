import React from 'react';
const LABEL_12812 = 'component_12812';
export function Component12812({ value = 12812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12812, 'data-value': derived.doubled }, children);
}
export default Component12812;
