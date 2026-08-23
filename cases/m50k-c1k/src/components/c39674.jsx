import React from 'react';
const LABEL_39674 = 'component_39674';
export function Component39674({ value = 39674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39674, 'data-value': derived.doubled }, children);
}
export default Component39674;
