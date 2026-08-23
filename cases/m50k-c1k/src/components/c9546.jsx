import React from 'react';
const LABEL_9546 = 'component_9546';
export function Component9546({ value = 9546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9546, 'data-value': derived.doubled }, children);
}
export default Component9546;
