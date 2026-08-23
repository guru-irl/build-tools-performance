import React from 'react';
const LABEL_36893 = 'component_36893';
export function Component36893({ value = 36893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36893, 'data-value': derived.doubled }, children);
}
export default Component36893;
