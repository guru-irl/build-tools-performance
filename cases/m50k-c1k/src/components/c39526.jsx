import React from 'react';
const LABEL_39526 = 'component_39526';
export function Component39526({ value = 39526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39526, 'data-value': derived.doubled }, children);
}
export default Component39526;
