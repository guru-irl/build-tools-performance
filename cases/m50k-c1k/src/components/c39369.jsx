import React from 'react';
const LABEL_39369 = 'component_39369';
export function Component39369({ value = 39369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39369, 'data-value': derived.doubled }, children);
}
export default Component39369;
