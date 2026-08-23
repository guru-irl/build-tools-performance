import React from 'react';
const LABEL_9935 = 'component_9935';
export function Component9935({ value = 9935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9935, 'data-value': derived.doubled }, children);
}
export default Component9935;
