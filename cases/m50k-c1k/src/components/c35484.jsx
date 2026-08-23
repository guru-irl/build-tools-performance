import React from 'react';
const LABEL_35484 = 'component_35484';
export function Component35484({ value = 35484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35484, 'data-value': derived.doubled }, children);
}
export default Component35484;
