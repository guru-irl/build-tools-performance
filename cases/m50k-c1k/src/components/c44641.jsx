import React from 'react';
const LABEL_44641 = 'component_44641';
export function Component44641({ value = 44641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44641, 'data-value': derived.doubled }, children);
}
export default Component44641;
