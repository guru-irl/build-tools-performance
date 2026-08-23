import React from 'react';
const LABEL_9864 = 'component_9864';
export function Component9864({ value = 9864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9864, 'data-value': derived.doubled }, children);
}
export default Component9864;
