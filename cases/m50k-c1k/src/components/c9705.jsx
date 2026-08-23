import React from 'react';
const LABEL_9705 = 'component_9705';
export function Component9705({ value = 9705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9705, 'data-value': derived.doubled }, children);
}
export default Component9705;
