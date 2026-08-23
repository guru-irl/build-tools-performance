import React from 'react';
const LABEL_35004 = 'component_35004';
export function Component35004({ value = 35004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35004, 'data-value': derived.doubled }, children);
}
export default Component35004;
