import React from 'react';
const LABEL_29968 = 'component_29968';
export function Component29968({ value = 29968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29968, 'data-value': derived.doubled }, children);
}
export default Component29968;
