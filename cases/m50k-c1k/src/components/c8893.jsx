import React from 'react';
const LABEL_8893 = 'component_8893';
export function Component8893({ value = 8893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8893, 'data-value': derived.doubled }, children);
}
export default Component8893;
