import React from 'react';
const LABEL_23804 = 'component_23804';
export function Component23804({ value = 23804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23804, 'data-value': derived.doubled }, children);
}
export default Component23804;
