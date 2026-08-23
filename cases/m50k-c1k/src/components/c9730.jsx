import React from 'react';
const LABEL_9730 = 'component_9730';
export function Component9730({ value = 9730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9730, 'data-value': derived.doubled }, children);
}
export default Component9730;
