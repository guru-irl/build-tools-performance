import React from 'react';
const LABEL_484 = 'component_484';
export function Component484({ value = 484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_484, 'data-value': derived.doubled }, children);
}
export default Component484;
