import React from 'react';
const LABEL_16453 = 'component_16453';
export function Component16453({ value = 16453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16453, 'data-value': derived.doubled }, children);
}
export default Component16453;
