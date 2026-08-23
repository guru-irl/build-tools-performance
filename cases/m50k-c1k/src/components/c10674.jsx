import React from 'react';
const LABEL_10674 = 'component_10674';
export function Component10674({ value = 10674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10674, 'data-value': derived.doubled }, children);
}
export default Component10674;
