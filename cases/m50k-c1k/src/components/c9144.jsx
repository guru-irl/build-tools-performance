import React from 'react';
const LABEL_9144 = 'component_9144';
export function Component9144({ value = 9144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9144, 'data-value': derived.doubled }, children);
}
export default Component9144;
