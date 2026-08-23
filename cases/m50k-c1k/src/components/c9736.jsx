import React from 'react';
const LABEL_9736 = 'component_9736';
export function Component9736({ value = 9736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9736, 'data-value': derived.doubled }, children);
}
export default Component9736;
