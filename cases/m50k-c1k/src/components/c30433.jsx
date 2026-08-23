import React from 'react';
const LABEL_30433 = 'component_30433';
export function Component30433({ value = 30433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30433, 'data-value': derived.doubled }, children);
}
export default Component30433;
