import React from 'react';
const LABEL_12885 = 'component_12885';
export function Component12885({ value = 12885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12885, 'data-value': derived.doubled }, children);
}
export default Component12885;
