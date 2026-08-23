import React from 'react';
const LABEL_8674 = 'component_8674';
export function Component8674({ value = 8674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8674, 'data-value': derived.doubled }, children);
}
export default Component8674;
