import React from 'react';
const LABEL_30324 = 'component_30324';
export function Component30324({ value = 30324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30324, 'data-value': derived.doubled }, children);
}
export default Component30324;
