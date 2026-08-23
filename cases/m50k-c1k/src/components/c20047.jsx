import React from 'react';
const LABEL_20047 = 'component_20047';
export function Component20047({ value = 20047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20047, 'data-value': derived.doubled }, children);
}
export default Component20047;
