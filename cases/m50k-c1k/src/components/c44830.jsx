import React from 'react';
const LABEL_44830 = 'component_44830';
export function Component44830({ value = 44830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44830, 'data-value': derived.doubled }, children);
}
export default Component44830;
