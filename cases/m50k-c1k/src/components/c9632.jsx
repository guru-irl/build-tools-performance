import React from 'react';
const LABEL_9632 = 'component_9632';
export function Component9632({ value = 9632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9632, 'data-value': derived.doubled }, children);
}
export default Component9632;
