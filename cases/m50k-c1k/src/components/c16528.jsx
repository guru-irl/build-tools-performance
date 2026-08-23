import React from 'react';
const LABEL_16528 = 'component_16528';
export function Component16528({ value = 16528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16528, 'data-value': derived.doubled }, children);
}
export default Component16528;
