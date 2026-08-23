import React from 'react';
const LABEL_9061 = 'component_9061';
export function Component9061({ value = 9061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9061, 'data-value': derived.doubled }, children);
}
export default Component9061;
