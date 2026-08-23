import React from 'react';
const LABEL_36989 = 'component_36989';
export function Component36989({ value = 36989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36989, 'data-value': derived.doubled }, children);
}
export default Component36989;
