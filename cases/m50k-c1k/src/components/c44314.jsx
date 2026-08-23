import React from 'react';
const LABEL_44314 = 'component_44314';
export function Component44314({ value = 44314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44314, 'data-value': derived.doubled }, children);
}
export default Component44314;
