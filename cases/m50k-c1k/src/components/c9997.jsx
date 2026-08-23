import React from 'react';
const LABEL_9997 = 'component_9997';
export function Component9997({ value = 9997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9997, 'data-value': derived.doubled }, children);
}
export default Component9997;
