import React from 'react';
const LABEL_893 = 'component_893';
export function Component893({ value = 893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_893, 'data-value': derived.doubled }, children);
}
export default Component893;
