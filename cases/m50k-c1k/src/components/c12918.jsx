import React from 'react';
const LABEL_12918 = 'component_12918';
export function Component12918({ value = 12918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12918, 'data-value': derived.doubled }, children);
}
export default Component12918;
