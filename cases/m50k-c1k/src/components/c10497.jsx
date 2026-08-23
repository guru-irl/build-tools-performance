import React from 'react';
const LABEL_10497 = 'component_10497';
export function Component10497({ value = 10497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10497, 'data-value': derived.doubled }, children);
}
export default Component10497;
