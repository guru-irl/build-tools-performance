import React from 'react';
const LABEL_32189 = 'component_32189';
export function Component32189({ value = 32189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32189, 'data-value': derived.doubled }, children);
}
export default Component32189;
