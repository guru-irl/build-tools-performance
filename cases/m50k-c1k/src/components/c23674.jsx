import React from 'react';
const LABEL_23674 = 'component_23674';
export function Component23674({ value = 23674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23674, 'data-value': derived.doubled }, children);
}
export default Component23674;
