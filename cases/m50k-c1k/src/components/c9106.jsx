import React from 'react';
const LABEL_9106 = 'component_9106';
export function Component9106({ value = 9106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9106, 'data-value': derived.doubled }, children);
}
export default Component9106;
