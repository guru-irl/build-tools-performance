import React from 'react';
const LABEL_28674 = 'component_28674';
export function Component28674({ value = 28674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28674, 'data-value': derived.doubled }, children);
}
export default Component28674;
