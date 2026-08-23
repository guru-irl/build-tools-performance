import React from 'react';
const LABEL_3398 = 'component_3398';
export function Component3398({ value = 3398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3398, 'data-value': derived.doubled }, children);
}
export default Component3398;
