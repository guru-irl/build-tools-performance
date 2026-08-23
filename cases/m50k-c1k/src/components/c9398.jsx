import React from 'react';
const LABEL_9398 = 'component_9398';
export function Component9398({ value = 9398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9398, 'data-value': derived.doubled }, children);
}
export default Component9398;
