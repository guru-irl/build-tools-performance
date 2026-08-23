import React from 'react';
const LABEL_21884 = 'component_21884';
export function Component21884({ value = 21884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21884, 'data-value': derived.doubled }, children);
}
export default Component21884;
