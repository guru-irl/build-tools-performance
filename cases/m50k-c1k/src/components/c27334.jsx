import React from 'react';
const LABEL_27334 = 'component_27334';
export function Component27334({ value = 27334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27334, 'data-value': derived.doubled }, children);
}
export default Component27334;
