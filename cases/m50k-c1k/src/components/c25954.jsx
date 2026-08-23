import React from 'react';
const LABEL_25954 = 'component_25954';
export function Component25954({ value = 25954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25954, 'data-value': derived.doubled }, children);
}
export default Component25954;
