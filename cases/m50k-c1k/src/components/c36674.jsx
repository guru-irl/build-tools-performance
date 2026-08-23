import React from 'react';
const LABEL_36674 = 'component_36674';
export function Component36674({ value = 36674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36674, 'data-value': derived.doubled }, children);
}
export default Component36674;
