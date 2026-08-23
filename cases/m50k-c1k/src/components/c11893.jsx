import React from 'react';
const LABEL_11893 = 'component_11893';
export function Component11893({ value = 11893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11893, 'data-value': derived.doubled }, children);
}
export default Component11893;
