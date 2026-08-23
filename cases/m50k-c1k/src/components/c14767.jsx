import React from 'react';
const LABEL_14767 = 'component_14767';
export function Component14767({ value = 14767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14767, 'data-value': derived.doubled }, children);
}
export default Component14767;
