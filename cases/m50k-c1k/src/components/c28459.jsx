import React from 'react';
const LABEL_28459 = 'component_28459';
export function Component28459({ value = 28459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28459, 'data-value': derived.doubled }, children);
}
export default Component28459;
