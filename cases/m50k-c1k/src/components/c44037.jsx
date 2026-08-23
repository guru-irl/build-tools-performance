import React from 'react';
const LABEL_44037 = 'component_44037';
export function Component44037({ value = 44037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44037, 'data-value': derived.doubled }, children);
}
export default Component44037;
