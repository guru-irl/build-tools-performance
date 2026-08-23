import React from 'react';
const LABEL_36453 = 'component_36453';
export function Component36453({ value = 36453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36453, 'data-value': derived.doubled }, children);
}
export default Component36453;
