import React from 'react';
const LABEL_9775 = 'component_9775';
export function Component9775({ value = 9775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9775, 'data-value': derived.doubled }, children);
}
export default Component9775;
