import React from 'react';
const LABEL_9228 = 'component_9228';
export function Component9228({ value = 9228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9228, 'data-value': derived.doubled }, children);
}
export default Component9228;
