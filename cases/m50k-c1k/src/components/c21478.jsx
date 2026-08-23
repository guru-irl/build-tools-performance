import React from 'react';
const LABEL_21478 = 'component_21478';
export function Component21478({ value = 21478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21478, 'data-value': derived.doubled }, children);
}
export default Component21478;
