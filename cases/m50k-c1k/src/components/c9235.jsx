import React from 'react';
const LABEL_9235 = 'component_9235';
export function Component9235({ value = 9235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9235, 'data-value': derived.doubled }, children);
}
export default Component9235;
