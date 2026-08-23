import React from 'react';
const LABEL_21673 = 'component_21673';
export function Component21673({ value = 21673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21673, 'data-value': derived.doubled }, children);
}
export default Component21673;
