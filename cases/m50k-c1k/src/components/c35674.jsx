import React from 'react';
const LABEL_35674 = 'component_35674';
export function Component35674({ value = 35674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35674, 'data-value': derived.doubled }, children);
}
export default Component35674;
