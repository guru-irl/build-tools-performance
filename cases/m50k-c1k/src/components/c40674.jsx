import React from 'react';
const LABEL_40674 = 'component_40674';
export function Component40674({ value = 40674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40674, 'data-value': derived.doubled }, children);
}
export default Component40674;
