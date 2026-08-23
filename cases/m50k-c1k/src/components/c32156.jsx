import React from 'react';
const LABEL_32156 = 'component_32156';
export function Component32156({ value = 32156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32156, 'data-value': derived.doubled }, children);
}
export default Component32156;
