import React from 'react';
const LABEL_22674 = 'component_22674';
export function Component22674({ value = 22674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22674, 'data-value': derived.doubled }, children);
}
export default Component22674;
