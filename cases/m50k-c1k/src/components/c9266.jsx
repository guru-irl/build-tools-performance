import React from 'react';
const LABEL_9266 = 'component_9266';
export function Component9266({ value = 9266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9266, 'data-value': derived.doubled }, children);
}
export default Component9266;
