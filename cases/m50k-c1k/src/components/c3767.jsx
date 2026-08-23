import React from 'react';
const LABEL_3767 = 'component_3767';
export function Component3767({ value = 3767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3767, 'data-value': derived.doubled }, children);
}
export default Component3767;
