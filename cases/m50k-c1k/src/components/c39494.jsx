import React from 'react';
const LABEL_39494 = 'component_39494';
export function Component39494({ value = 39494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39494, 'data-value': derived.doubled }, children);
}
export default Component39494;
