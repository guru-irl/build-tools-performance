import React from 'react';
const LABEL_44674 = 'component_44674';
export function Component44674({ value = 44674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44674, 'data-value': derived.doubled }, children);
}
export default Component44674;
