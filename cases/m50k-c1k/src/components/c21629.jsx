import React from 'react';
const LABEL_21629 = 'component_21629';
export function Component21629({ value = 21629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21629, 'data-value': derived.doubled }, children);
}
export default Component21629;
