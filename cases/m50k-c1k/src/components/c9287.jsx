import React from 'react';
const LABEL_9287 = 'component_9287';
export function Component9287({ value = 9287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9287, 'data-value': derived.doubled }, children);
}
export default Component9287;
