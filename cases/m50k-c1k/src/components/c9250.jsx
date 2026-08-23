import React from 'react';
const LABEL_9250 = 'component_9250';
export function Component9250({ value = 9250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9250, 'data-value': derived.doubled }, children);
}
export default Component9250;
