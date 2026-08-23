import React from 'react';
const LABEL_19893 = 'component_19893';
export function Component19893({ value = 19893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19893, 'data-value': derived.doubled }, children);
}
export default Component19893;
