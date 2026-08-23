import React from 'react';
const LABEL_9285 = 'component_9285';
export function Component9285({ value = 9285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9285, 'data-value': derived.doubled }, children);
}
export default Component9285;
