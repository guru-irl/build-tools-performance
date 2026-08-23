import React from 'react';
const LABEL_32674 = 'component_32674';
export function Component32674({ value = 32674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32674, 'data-value': derived.doubled }, children);
}
export default Component32674;
