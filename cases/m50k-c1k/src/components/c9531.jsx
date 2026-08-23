import React from 'react';
const LABEL_9531 = 'component_9531';
export function Component9531({ value = 9531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9531, 'data-value': derived.doubled }, children);
}
export default Component9531;
