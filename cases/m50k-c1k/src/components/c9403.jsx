import React from 'react';
const LABEL_9403 = 'component_9403';
export function Component9403({ value = 9403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9403, 'data-value': derived.doubled }, children);
}
export default Component9403;
