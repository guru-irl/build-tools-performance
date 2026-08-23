import React from 'react';
const LABEL_3494 = 'component_3494';
export function Component3494({ value = 3494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3494, 'data-value': derived.doubled }, children);
}
export default Component3494;
