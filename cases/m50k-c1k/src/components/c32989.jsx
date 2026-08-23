import React from 'react';
const LABEL_32989 = 'component_32989';
export function Component32989({ value = 32989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32989, 'data-value': derived.doubled }, children);
}
export default Component32989;
