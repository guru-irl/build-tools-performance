import React from 'react';
const LABEL_36665 = 'component_36665';
export function Component36665({ value = 36665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36665, 'data-value': derived.doubled }, children);
}
export default Component36665;
