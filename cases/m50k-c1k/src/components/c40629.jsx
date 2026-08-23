import React from 'react';
const LABEL_40629 = 'component_40629';
export function Component40629({ value = 40629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40629, 'data-value': derived.doubled }, children);
}
export default Component40629;
