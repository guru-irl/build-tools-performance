import React from 'react';
const LABEL_25674 = 'component_25674';
export function Component25674({ value = 25674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25674, 'data-value': derived.doubled }, children);
}
export default Component25674;
