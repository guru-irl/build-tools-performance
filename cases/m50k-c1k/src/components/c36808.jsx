import React from 'react';
const LABEL_36808 = 'component_36808';
export function Component36808({ value = 36808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36808, 'data-value': derived.doubled }, children);
}
export default Component36808;
