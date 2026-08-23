import React from 'react';
const LABEL_35665 = 'component_35665';
export function Component35665({ value = 35665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35665, 'data-value': derived.doubled }, children);
}
export default Component35665;
