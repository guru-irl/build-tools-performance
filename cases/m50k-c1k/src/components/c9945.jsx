import React from 'react';
const LABEL_9945 = 'component_9945';
export function Component9945({ value = 9945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9945, 'data-value': derived.doubled }, children);
}
export default Component9945;
