import React from 'react';
const LABEL_32437 = 'component_32437';
export function Component32437({ value = 32437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32437, 'data-value': derived.doubled }, children);
}
export default Component32437;
