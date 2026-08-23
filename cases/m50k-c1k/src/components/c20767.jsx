import React from 'react';
const LABEL_20767 = 'component_20767';
export function Component20767({ value = 20767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20767, 'data-value': derived.doubled }, children);
}
export default Component20767;
