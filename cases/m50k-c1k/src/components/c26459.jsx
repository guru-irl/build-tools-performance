import React from 'react';
const LABEL_26459 = 'component_26459';
export function Component26459({ value = 26459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26459, 'data-value': derived.doubled }, children);
}
export default Component26459;
