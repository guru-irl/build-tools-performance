import React from 'react';
const LABEL_9158 = 'component_9158';
export function Component9158({ value = 9158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9158, 'data-value': derived.doubled }, children);
}
export default Component9158;
