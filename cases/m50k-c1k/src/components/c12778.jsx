import React from 'react';
const LABEL_12778 = 'component_12778';
export function Component12778({ value = 12778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12778, 'data-value': derived.doubled }, children);
}
export default Component12778;
