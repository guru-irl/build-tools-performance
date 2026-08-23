import React from 'react';
const LABEL_39718 = 'component_39718';
export function Component39718({ value = 39718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39718, 'data-value': derived.doubled }, children);
}
export default Component39718;
