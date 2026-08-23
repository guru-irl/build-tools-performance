import React from 'react';
const LABEL_39343 = 'component_39343';
export function Component39343({ value = 39343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39343, 'data-value': derived.doubled }, children);
}
export default Component39343;
