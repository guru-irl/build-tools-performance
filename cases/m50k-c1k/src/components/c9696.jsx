import React from 'react';
const LABEL_9696 = 'component_9696';
export function Component9696({ value = 9696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9696, 'data-value': derived.doubled }, children);
}
export default Component9696;
