import React from 'react';
const LABEL_9925 = 'component_9925';
export function Component9925({ value = 9925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9925, 'data-value': derived.doubled }, children);
}
export default Component9925;
