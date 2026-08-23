import React from 'react';
const LABEL_33228 = 'component_33228';
export function Component33228({ value = 33228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33228, 'data-value': derived.doubled }, children);
}
export default Component33228;
