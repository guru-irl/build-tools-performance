import React from 'react';
const LABEL_6674 = 'component_6674';
export function Component6674({ value = 6674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6674, 'data-value': derived.doubled }, children);
}
export default Component6674;
