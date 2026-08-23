import React from 'react';
const LABEL_12682 = 'component_12682';
export function Component12682({ value = 12682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12682, 'data-value': derived.doubled }, children);
}
export default Component12682;
