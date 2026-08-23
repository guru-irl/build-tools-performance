import React from 'react';
const LABEL_9644 = 'component_9644';
export function Component9644({ value = 9644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9644, 'data-value': derived.doubled }, children);
}
export default Component9644;
