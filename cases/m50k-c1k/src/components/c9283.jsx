import React from 'react';
const LABEL_9283 = 'component_9283';
export function Component9283({ value = 9283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9283, 'data-value': derived.doubled }, children);
}
export default Component9283;
