import React from 'react';
const LABEL_26674 = 'component_26674';
export function Component26674({ value = 26674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26674, 'data-value': derived.doubled }, children);
}
export default Component26674;
