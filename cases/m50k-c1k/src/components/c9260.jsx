import React from 'react';
const LABEL_9260 = 'component_9260';
export function Component9260({ value = 9260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9260, 'data-value': derived.doubled }, children);
}
export default Component9260;
