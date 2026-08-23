import React from 'react';
const LABEL_13808 = 'component_13808';
export function Component13808({ value = 13808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13808, 'data-value': derived.doubled }, children);
}
export default Component13808;
