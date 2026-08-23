import React from 'react';
const LABEL_9297 = 'component_9297';
export function Component9297({ value = 9297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9297, 'data-value': derived.doubled }, children);
}
export default Component9297;
