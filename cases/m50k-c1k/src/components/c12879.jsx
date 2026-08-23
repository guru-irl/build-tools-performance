import React from 'react';
const LABEL_12879 = 'component_12879';
export function Component12879({ value = 12879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12879, 'data-value': derived.doubled }, children);
}
export default Component12879;
