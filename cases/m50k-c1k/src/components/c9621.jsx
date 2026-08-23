import React from 'react';
const LABEL_9621 = 'component_9621';
export function Component9621({ value = 9621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9621, 'data-value': derived.doubled }, children);
}
export default Component9621;
