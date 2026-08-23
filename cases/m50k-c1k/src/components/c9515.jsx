import React from 'react';
const LABEL_9515 = 'component_9515';
export function Component9515({ value = 9515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9515, 'data-value': derived.doubled }, children);
}
export default Component9515;
