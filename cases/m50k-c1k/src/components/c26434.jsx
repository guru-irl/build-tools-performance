import React from 'react';
const LABEL_26434 = 'component_26434';
export function Component26434({ value = 26434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26434, 'data-value': derived.doubled }, children);
}
export default Component26434;
