import React from 'react';
const LABEL_9626 = 'component_9626';
export function Component9626({ value = 9626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9626, 'data-value': derived.doubled }, children);
}
export default Component9626;
