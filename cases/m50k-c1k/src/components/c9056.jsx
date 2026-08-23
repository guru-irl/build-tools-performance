import React from 'react';
const LABEL_9056 = 'component_9056';
export function Component9056({ value = 9056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9056, 'data-value': derived.doubled }, children);
}
export default Component9056;
