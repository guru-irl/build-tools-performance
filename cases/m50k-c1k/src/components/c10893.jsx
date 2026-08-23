import React from 'react';
const LABEL_10893 = 'component_10893';
export function Component10893({ value = 10893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10893, 'data-value': derived.doubled }, children);
}
export default Component10893;
