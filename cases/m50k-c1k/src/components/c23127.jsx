import React from 'react';
const LABEL_23127 = 'component_23127';
export function Component23127({ value = 23127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23127, 'data-value': derived.doubled }, children);
}
export default Component23127;
