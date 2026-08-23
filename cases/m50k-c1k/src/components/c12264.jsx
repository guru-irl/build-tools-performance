import React from 'react';
const LABEL_12264 = 'component_12264';
export function Component12264({ value = 12264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12264, 'data-value': derived.doubled }, children);
}
export default Component12264;
