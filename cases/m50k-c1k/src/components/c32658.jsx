import React from 'react';
const LABEL_32658 = 'component_32658';
export function Component32658({ value = 32658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32658, 'data-value': derived.doubled }, children);
}
export default Component32658;
