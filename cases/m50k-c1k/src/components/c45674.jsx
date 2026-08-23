import React from 'react';
const LABEL_45674 = 'component_45674';
export function Component45674({ value = 45674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45674, 'data-value': derived.doubled }, children);
}
export default Component45674;
