import React from 'react';
const LABEL_46674 = 'component_46674';
export function Component46674({ value = 46674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46674, 'data-value': derived.doubled }, children);
}
export default Component46674;
