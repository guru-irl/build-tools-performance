import React from 'react';
const LABEL_32163 = 'component_32163';
export function Component32163({ value = 32163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32163, 'data-value': derived.doubled }, children);
}
export default Component32163;
