import React from 'react';
const LABEL_33674 = 'component_33674';
export function Component33674({ value = 33674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33674, 'data-value': derived.doubled }, children);
}
export default Component33674;
