import React from 'react';
const LABEL_13674 = 'component_13674';
export function Component13674({ value = 13674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13674, 'data-value': derived.doubled }, children);
}
export default Component13674;
