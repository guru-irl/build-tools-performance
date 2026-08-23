import React from 'react';
const LABEL_32002 = 'component_32002';
export function Component32002({ value = 32002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32002, 'data-value': derived.doubled }, children);
}
export default Component32002;
