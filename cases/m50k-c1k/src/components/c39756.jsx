import React from 'react';
const LABEL_39756 = 'component_39756';
export function Component39756({ value = 39756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39756, 'data-value': derived.doubled }, children);
}
export default Component39756;
