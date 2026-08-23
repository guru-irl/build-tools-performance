import React from 'react';
const LABEL_9567 = 'component_9567';
export function Component9567({ value = 9567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9567, 'data-value': derived.doubled }, children);
}
export default Component9567;
