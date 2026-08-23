import React from 'react';
const LABEL_21808 = 'component_21808';
export function Component21808({ value = 21808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21808, 'data-value': derived.doubled }, children);
}
export default Component21808;
