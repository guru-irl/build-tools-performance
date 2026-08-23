import React from 'react';
const LABEL_16674 = 'component_16674';
export function Component16674({ value = 16674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16674, 'data-value': derived.doubled }, children);
}
export default Component16674;
