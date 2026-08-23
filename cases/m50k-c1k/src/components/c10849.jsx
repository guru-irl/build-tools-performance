import React from 'react';
const LABEL_10849 = 'component_10849';
export function Component10849({ value = 10849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10849, 'data-value': derived.doubled }, children);
}
export default Component10849;
