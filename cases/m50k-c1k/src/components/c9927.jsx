import React from 'react';
const LABEL_9927 = 'component_9927';
export function Component9927({ value = 9927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9927, 'data-value': derived.doubled }, children);
}
export default Component9927;
