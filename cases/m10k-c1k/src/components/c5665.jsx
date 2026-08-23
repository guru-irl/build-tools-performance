import React from 'react';
const LABEL_5665 = 'component_5665';
export function Component5665({ value = 5665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5665, 'data-value': derived.doubled }, children);
}
export default Component5665;
