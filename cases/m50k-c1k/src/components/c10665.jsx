import React from 'react';
const LABEL_10665 = 'component_10665';
export function Component10665({ value = 10665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10665, 'data-value': derived.doubled }, children);
}
export default Component10665;
