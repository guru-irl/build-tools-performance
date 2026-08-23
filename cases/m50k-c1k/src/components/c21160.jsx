import React from 'react';
const LABEL_21160 = 'component_21160';
export function Component21160({ value = 21160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21160, 'data-value': derived.doubled }, children);
}
export default Component21160;
