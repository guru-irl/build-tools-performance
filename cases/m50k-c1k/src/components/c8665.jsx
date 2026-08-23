import React from 'react';
const LABEL_8665 = 'component_8665';
export function Component8665({ value = 8665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8665, 'data-value': derived.doubled }, children);
}
export default Component8665;
