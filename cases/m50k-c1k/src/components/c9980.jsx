import React from 'react';
const LABEL_9980 = 'component_9980';
export function Component9980({ value = 9980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9980, 'data-value': derived.doubled }, children);
}
export default Component9980;
