import React from 'react';
const LABEL_28487 = 'component_28487';
export function Component28487({ value = 28487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28487, 'data-value': derived.doubled }, children);
}
export default Component28487;
