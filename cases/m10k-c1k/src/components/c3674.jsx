import React from 'react';
const LABEL_3674 = 'component_3674';
export function Component3674({ value = 3674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3674, 'data-value': derived.doubled }, children);
}
export default Component3674;
