import React from 'react';
const LABEL_39665 = 'component_39665';
export function Component39665({ value = 39665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39665, 'data-value': derived.doubled }, children);
}
export default Component39665;
