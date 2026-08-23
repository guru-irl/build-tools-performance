import React from 'react';
const LABEL_30376 = 'component_30376';
export function Component30376({ value = 30376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30376, 'data-value': derived.doubled }, children);
}
export default Component30376;
