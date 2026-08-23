import React from 'react';
const LABEL_9014 = 'component_9014';
export function Component9014({ value = 9014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9014, 'data-value': derived.doubled }, children);
}
export default Component9014;
