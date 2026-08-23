import React from 'react';
const LABEL_9326 = 'component_9326';
export function Component9326({ value = 9326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9326, 'data-value': derived.doubled }, children);
}
export default Component9326;
