import React from 'react';
const LABEL_18674 = 'component_18674';
export function Component18674({ value = 18674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18674, 'data-value': derived.doubled }, children);
}
export default Component18674;
