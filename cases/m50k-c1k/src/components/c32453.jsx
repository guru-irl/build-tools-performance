import React from 'react';
const LABEL_32453 = 'component_32453';
export function Component32453({ value = 32453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32453, 'data-value': derived.doubled }, children);
}
export default Component32453;
