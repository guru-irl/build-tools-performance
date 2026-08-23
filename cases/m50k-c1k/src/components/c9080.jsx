import React from 'react';
const LABEL_9080 = 'component_9080';
export function Component9080({ value = 9080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9080, 'data-value': derived.doubled }, children);
}
export default Component9080;
