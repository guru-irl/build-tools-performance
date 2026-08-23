import React from 'react';
const LABEL_16484 = 'component_16484';
export function Component16484({ value = 16484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16484, 'data-value': derived.doubled }, children);
}
export default Component16484;
