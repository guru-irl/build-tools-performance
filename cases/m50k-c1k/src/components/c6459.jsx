import React from 'react';
const LABEL_6459 = 'component_6459';
export function Component6459({ value = 6459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6459, 'data-value': derived.doubled }, children);
}
export default Component6459;
