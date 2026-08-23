import React from 'react';
const LABEL_5674 = 'component_5674';
export function Component5674({ value = 5674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5674, 'data-value': derived.doubled }, children);
}
export default Component5674;
