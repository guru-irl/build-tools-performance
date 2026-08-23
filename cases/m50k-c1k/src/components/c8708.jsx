import React from 'react';
const LABEL_8708 = 'component_8708';
export function Component8708({ value = 8708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8708, 'data-value': derived.doubled }, children);
}
export default Component8708;
