import React from 'react';
const LABEL_9504 = 'component_9504';
export function Component9504({ value = 9504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9504, 'data-value': derived.doubled }, children);
}
export default Component9504;
