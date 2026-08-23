import React from 'react';
const LABEL_9657 = 'component_9657';
export function Component9657({ value = 9657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9657, 'data-value': derived.doubled }, children);
}
export default Component9657;
