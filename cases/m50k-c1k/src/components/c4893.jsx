import React from 'react';
const LABEL_4893 = 'component_4893';
export function Component4893({ value = 4893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4893, 'data-value': derived.doubled }, children);
}
export default Component4893;
