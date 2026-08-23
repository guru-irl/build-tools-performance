import React from 'react';
const LABEL_9766 = 'component_9766';
export function Component9766({ value = 9766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9766, 'data-value': derived.doubled }, children);
}
export default Component9766;
