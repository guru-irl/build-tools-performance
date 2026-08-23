import React from 'react';
const LABEL_39893 = 'component_39893';
export function Component39893({ value = 39893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39893, 'data-value': derived.doubled }, children);
}
export default Component39893;
