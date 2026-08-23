import React from 'react';
const LABEL_9026 = 'component_9026';
export function Component9026({ value = 9026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9026, 'data-value': derived.doubled }, children);
}
export default Component9026;
