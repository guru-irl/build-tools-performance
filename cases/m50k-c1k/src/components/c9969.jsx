import React from 'react';
const LABEL_9969 = 'component_9969';
export function Component9969({ value = 9969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9969, 'data-value': derived.doubled }, children);
}
export default Component9969;
