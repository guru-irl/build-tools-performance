import React from 'react';
const LABEL_9891 = 'component_9891';
export function Component9891({ value = 9891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9891, 'data-value': derived.doubled }, children);
}
export default Component9891;
