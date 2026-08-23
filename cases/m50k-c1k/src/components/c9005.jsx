import React from 'react';
const LABEL_9005 = 'component_9005';
export function Component9005({ value = 9005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9005, 'data-value': derived.doubled }, children);
}
export default Component9005;
