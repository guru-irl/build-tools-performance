import React from 'react';
const LABEL_39306 = 'component_39306';
export function Component39306({ value = 39306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39306, 'data-value': derived.doubled }, children);
}
export default Component39306;
