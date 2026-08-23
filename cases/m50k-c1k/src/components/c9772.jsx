import React from 'react';
const LABEL_9772 = 'component_9772';
export function Component9772({ value = 9772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9772, 'data-value': derived.doubled }, children);
}
export default Component9772;
