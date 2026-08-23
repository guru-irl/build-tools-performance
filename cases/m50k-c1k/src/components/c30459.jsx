import React from 'react';
const LABEL_30459 = 'component_30459';
export function Component30459({ value = 30459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30459, 'data-value': derived.doubled }, children);
}
export default Component30459;
