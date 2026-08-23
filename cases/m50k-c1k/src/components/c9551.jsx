import React from 'react';
const LABEL_9551 = 'component_9551';
export function Component9551({ value = 9551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9551, 'data-value': derived.doubled }, children);
}
export default Component9551;
