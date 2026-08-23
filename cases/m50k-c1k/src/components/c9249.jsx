import React from 'react';
const LABEL_9249 = 'component_9249';
export function Component9249({ value = 9249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9249, 'data-value': derived.doubled }, children);
}
export default Component9249;
