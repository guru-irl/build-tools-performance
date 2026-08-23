import React from 'react';
const LABEL_23435 = 'component_23435';
export function Component23435({ value = 23435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23435, 'data-value': derived.doubled }, children);
}
export default Component23435;
