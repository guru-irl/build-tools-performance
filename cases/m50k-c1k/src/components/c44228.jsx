import React from 'react';
const LABEL_44228 = 'component_44228';
export function Component44228({ value = 44228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44228, 'data-value': derived.doubled }, children);
}
export default Component44228;
