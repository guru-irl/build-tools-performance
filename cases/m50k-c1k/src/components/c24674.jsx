import React from 'react';
const LABEL_24674 = 'component_24674';
export function Component24674({ value = 24674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24674, 'data-value': derived.doubled }, children);
}
export default Component24674;
