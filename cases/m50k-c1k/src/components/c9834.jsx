import React from 'react';
const LABEL_9834 = 'component_9834';
export function Component9834({ value = 9834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9834, 'data-value': derived.doubled }, children);
}
export default Component9834;
