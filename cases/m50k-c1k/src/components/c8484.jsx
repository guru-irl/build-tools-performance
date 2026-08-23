import React from 'react';
const LABEL_8484 = 'component_8484';
export function Component8484({ value = 8484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8484, 'data-value': derived.doubled }, children);
}
export default Component8484;
