import React from 'react';
const LABEL_44516 = 'component_44516';
export function Component44516({ value = 44516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44516, 'data-value': derived.doubled }, children);
}
export default Component44516;
