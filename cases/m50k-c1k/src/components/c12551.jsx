import React from 'react';
const LABEL_12551 = 'component_12551';
export function Component12551({ value = 12551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12551, 'data-value': derived.doubled }, children);
}
export default Component12551;
