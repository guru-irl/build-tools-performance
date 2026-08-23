import React from 'react';
const LABEL_44355 = 'component_44355';
export function Component44355({ value = 44355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44355, 'data-value': derived.doubled }, children);
}
export default Component44355;
