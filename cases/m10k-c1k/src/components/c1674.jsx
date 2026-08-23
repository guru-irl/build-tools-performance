import React from 'react';
const LABEL_1674 = 'component_1674';
export function Component1674({ value = 1674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1674, 'data-value': derived.doubled }, children);
}
export default Component1674;
