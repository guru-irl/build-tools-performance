import React from 'react';
const LABEL_39004 = 'component_39004';
export function Component39004({ value = 39004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39004, 'data-value': derived.doubled }, children);
}
export default Component39004;
