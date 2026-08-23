import React from 'react';
const LABEL_21754 = 'component_21754';
export function Component21754({ value = 21754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21754, 'data-value': derived.doubled }, children);
}
export default Component21754;
