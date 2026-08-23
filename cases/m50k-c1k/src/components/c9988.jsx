import React from 'react';
const LABEL_9988 = 'component_9988';
export function Component9988({ value = 9988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9988, 'data-value': derived.doubled }, children);
}
export default Component9988;
