import React from 'react';
const LABEL_44659 = 'component_44659';
export function Component44659({ value = 44659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44659, 'data-value': derived.doubled }, children);
}
export default Component44659;
