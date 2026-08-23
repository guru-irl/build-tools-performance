import React from 'react';
const LABEL_35123 = 'component_35123';
export function Component35123({ value = 35123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35123, 'data-value': derived.doubled }, children);
}
export default Component35123;
