import React from 'react';
const LABEL_21163 = 'component_21163';
export function Component21163({ value = 21163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21163, 'data-value': derived.doubled }, children);
}
export default Component21163;
