import React from 'react';
const LABEL_28893 = 'component_28893';
export function Component28893({ value = 28893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28893, 'data-value': derived.doubled }, children);
}
export default Component28893;
