import React from 'react';
const LABEL_9548 = 'component_9548';
export function Component9548({ value = 9548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9548, 'data-value': derived.doubled }, children);
}
export default Component9548;
