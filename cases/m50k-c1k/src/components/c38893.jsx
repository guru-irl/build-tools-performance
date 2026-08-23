import React from 'react';
const LABEL_38893 = 'component_38893';
export function Component38893({ value = 38893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38893, 'data-value': derived.doubled }, children);
}
export default Component38893;
