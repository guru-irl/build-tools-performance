import React from 'react';
const LABEL_18516 = 'component_18516';
export function Component18516({ value = 18516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18516, 'data-value': derived.doubled }, children);
}
export default Component18516;
