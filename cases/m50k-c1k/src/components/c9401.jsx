import React from 'react';
const LABEL_9401 = 'component_9401';
export function Component9401({ value = 9401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9401, 'data-value': derived.doubled }, children);
}
export default Component9401;
