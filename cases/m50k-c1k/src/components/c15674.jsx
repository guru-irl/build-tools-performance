import React from 'react';
const LABEL_15674 = 'component_15674';
export function Component15674({ value = 15674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15674, 'data-value': derived.doubled }, children);
}
export default Component15674;
