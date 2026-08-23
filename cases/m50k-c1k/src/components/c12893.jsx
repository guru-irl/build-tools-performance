import React from 'react';
const LABEL_12893 = 'component_12893';
export function Component12893({ value = 12893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12893, 'data-value': derived.doubled }, children);
}
export default Component12893;
