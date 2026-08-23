import React from 'react';
const LABEL_15808 = 'component_15808';
export function Component15808({ value = 15808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15808, 'data-value': derived.doubled }, children);
}
export default Component15808;
