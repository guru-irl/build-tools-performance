import React from 'react';
const LABEL_5767 = 'component_5767';
export function Component5767({ value = 5767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5767, 'data-value': derived.doubled }, children);
}
export default Component5767;
