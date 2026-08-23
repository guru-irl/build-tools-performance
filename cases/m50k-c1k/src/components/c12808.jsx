import React from 'react';
const LABEL_12808 = 'component_12808';
export function Component12808({ value = 12808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12808, 'data-value': derived.doubled }, children);
}
export default Component12808;
