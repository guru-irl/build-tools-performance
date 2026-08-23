import React from 'react';
const LABEL_9443 = 'component_9443';
export function Component9443({ value = 9443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9443, 'data-value': derived.doubled }, children);
}
export default Component9443;
