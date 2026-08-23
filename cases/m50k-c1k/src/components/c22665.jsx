import React from 'react';
const LABEL_22665 = 'component_22665';
export function Component22665({ value = 22665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22665, 'data-value': derived.doubled }, children);
}
export default Component22665;
