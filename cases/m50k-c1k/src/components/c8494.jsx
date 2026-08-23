import React from 'react';
const LABEL_8494 = 'component_8494';
export function Component8494({ value = 8494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8494, 'data-value': derived.doubled }, children);
}
export default Component8494;
