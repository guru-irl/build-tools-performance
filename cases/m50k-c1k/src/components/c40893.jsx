import React from 'react';
const LABEL_40893 = 'component_40893';
export function Component40893({ value = 40893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40893, 'data-value': derived.doubled }, children);
}
export default Component40893;
