import React from 'react';
const LABEL_9601 = 'component_9601';
export function Component9601({ value = 9601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9601, 'data-value': derived.doubled }, children);
}
export default Component9601;
