import React from 'react';
const LABEL_39767 = 'component_39767';
export function Component39767({ value = 39767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39767, 'data-value': derived.doubled }, children);
}
export default Component39767;
