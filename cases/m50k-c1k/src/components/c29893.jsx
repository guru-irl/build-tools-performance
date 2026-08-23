import React from 'react';
const LABEL_29893 = 'component_29893';
export function Component29893({ value = 29893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29893, 'data-value': derived.doubled }, children);
}
export default Component29893;
