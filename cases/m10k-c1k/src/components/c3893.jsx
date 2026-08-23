import React from 'react';
const LABEL_3893 = 'component_3893';
export function Component3893({ value = 3893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3893, 'data-value': derived.doubled }, children);
}
export default Component3893;
