import React from 'react';
const LABEL_44610 = 'component_44610';
export function Component44610({ value = 44610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44610, 'data-value': derived.doubled }, children);
}
export default Component44610;
