import React from 'react';
const LABEL_9885 = 'component_9885';
export function Component9885({ value = 9885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9885, 'data-value': derived.doubled }, children);
}
export default Component9885;
