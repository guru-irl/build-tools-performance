import React from 'react';
const LABEL_9276 = 'component_9276';
export function Component9276({ value = 9276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9276, 'data-value': derived.doubled }, children);
}
export default Component9276;
