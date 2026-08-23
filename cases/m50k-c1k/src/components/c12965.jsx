import React from 'react';
const LABEL_12965 = 'component_12965';
export function Component12965({ value = 12965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12965, 'data-value': derived.doubled }, children);
}
export default Component12965;
