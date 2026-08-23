import React from 'react';
const LABEL_8767 = 'component_8767';
export function Component8767({ value = 8767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8767, 'data-value': derived.doubled }, children);
}
export default Component8767;
