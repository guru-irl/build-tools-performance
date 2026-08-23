import React from 'react';
const LABEL_24808 = 'component_24808';
export function Component24808({ value = 24808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24808, 'data-value': derived.doubled }, children);
}
export default Component24808;
