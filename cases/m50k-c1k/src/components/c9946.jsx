import React from 'react';
const LABEL_9946 = 'component_9946';
export function Component9946({ value = 9946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9946, 'data-value': derived.doubled }, children);
}
export default Component9946;
