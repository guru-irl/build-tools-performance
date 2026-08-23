import React from 'react';
const LABEL_9943 = 'component_9943';
export function Component9943({ value = 9943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9943, 'data-value': derived.doubled }, children);
}
export default Component9943;
