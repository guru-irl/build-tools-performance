import React from 'react';
const LABEL_29674 = 'component_29674';
export function Component29674({ value = 29674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29674, 'data-value': derived.doubled }, children);
}
export default Component29674;
