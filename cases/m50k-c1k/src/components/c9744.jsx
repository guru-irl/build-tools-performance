import React from 'react';
const LABEL_9744 = 'component_9744';
export function Component9744({ value = 9744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9744, 'data-value': derived.doubled }, children);
}
export default Component9744;
