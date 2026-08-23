import React from 'react';
const LABEL_7674 = 'component_7674';
export function Component7674({ value = 7674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7674, 'data-value': derived.doubled }, children);
}
export default Component7674;
