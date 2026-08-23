import React from 'react';
const LABEL_11369 = 'component_11369';
export function Component11369({ value = 11369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11369, 'data-value': derived.doubled }, children);
}
export default Component11369;
