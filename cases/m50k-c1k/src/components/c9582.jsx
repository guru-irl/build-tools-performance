import React from 'react';
const LABEL_9582 = 'component_9582';
export function Component9582({ value = 9582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9582, 'data-value': derived.doubled }, children);
}
export default Component9582;
