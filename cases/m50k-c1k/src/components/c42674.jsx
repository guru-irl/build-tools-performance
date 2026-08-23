import React from 'react';
const LABEL_42674 = 'component_42674';
export function Component42674({ value = 42674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42674, 'data-value': derived.doubled }, children);
}
export default Component42674;
