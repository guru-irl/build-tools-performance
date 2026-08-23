import React from 'react';
const LABEL_44893 = 'component_44893';
export function Component44893({ value = 44893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44893, 'data-value': derived.doubled }, children);
}
export default Component44893;
