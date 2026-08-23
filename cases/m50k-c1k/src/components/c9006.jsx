import React from 'react';
const LABEL_9006 = 'component_9006';
export function Component9006({ value = 9006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9006, 'data-value': derived.doubled }, children);
}
export default Component9006;
