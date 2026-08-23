import React from 'react';
const LABEL_9875 = 'component_9875';
export function Component9875({ value = 9875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9875, 'data-value': derived.doubled }, children);
}
export default Component9875;
