import React from 'react';
const LABEL_35459 = 'component_35459';
export function Component35459({ value = 35459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35459, 'data-value': derived.doubled }, children);
}
export default Component35459;
