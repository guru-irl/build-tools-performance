import React from 'react';
const LABEL_34459 = 'component_34459';
export function Component34459({ value = 34459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34459, 'data-value': derived.doubled }, children);
}
export default Component34459;
