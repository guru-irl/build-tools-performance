import React from 'react';
const LABEL_10002 = 'component_10002';
export function Component10002({ value = 10002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10002, 'data-value': derived.doubled }, children);
}
export default Component10002;
