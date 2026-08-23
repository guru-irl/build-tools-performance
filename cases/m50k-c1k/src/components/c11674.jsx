import React from 'react';
const LABEL_11674 = 'component_11674';
export function Component11674({ value = 11674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11674, 'data-value': derived.doubled }, children);
}
export default Component11674;
