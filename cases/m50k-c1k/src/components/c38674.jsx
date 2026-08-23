import React from 'react';
const LABEL_38674 = 'component_38674';
export function Component38674({ value = 38674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38674, 'data-value': derived.doubled }, children);
}
export default Component38674;
