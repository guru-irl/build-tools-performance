import React from 'react';
const LABEL_3665 = 'component_3665';
export function Component3665({ value = 3665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3665, 'data-value': derived.doubled }, children);
}
export default Component3665;
