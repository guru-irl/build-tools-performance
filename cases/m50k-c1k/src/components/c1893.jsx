import React from 'react';
const LABEL_1893 = 'component_1893';
export function Component1893({ value = 1893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1893, 'data-value': derived.doubled }, children);
}
export default Component1893;
