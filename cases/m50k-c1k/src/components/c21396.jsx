import React from 'react';
const LABEL_21396 = 'component_21396';
export function Component21396({ value = 21396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21396, 'data-value': derived.doubled }, children);
}
export default Component21396;
