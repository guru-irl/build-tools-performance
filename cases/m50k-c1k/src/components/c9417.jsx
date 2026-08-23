import React from 'react';
const LABEL_9417 = 'component_9417';
export function Component9417({ value = 9417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9417, 'data-value': derived.doubled }, children);
}
export default Component9417;
