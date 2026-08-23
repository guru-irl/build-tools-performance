import React from 'react';
const LABEL_30674 = 'component_30674';
export function Component30674({ value = 30674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30674, 'data-value': derived.doubled }, children);
}
export default Component30674;
