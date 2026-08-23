import React from 'react';
const LABEL_9042 = 'component_9042';
export function Component9042({ value = 9042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9042, 'data-value': derived.doubled }, children);
}
export default Component9042;
