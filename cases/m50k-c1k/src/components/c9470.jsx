import React from 'react';
const LABEL_9470 = 'component_9470';
export function Component9470({ value = 9470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9470, 'data-value': derived.doubled }, children);
}
export default Component9470;
