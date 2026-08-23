import React from 'react';
const LABEL_674 = 'component_674';
export function Component674({ value = 674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_674, 'data-value': derived.doubled }, children);
}
export default Component674;
