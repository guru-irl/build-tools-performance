import React from 'react';
const LABEL_44093 = 'component_44093';
export function Component44093({ value = 44093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44093, 'data-value': derived.doubled }, children);
}
export default Component44093;
