import React from 'react';
const LABEL_9099 = 'component_9099';
export function Component9099({ value = 9099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9099, 'data-value': derived.doubled }, children);
}
export default Component9099;
