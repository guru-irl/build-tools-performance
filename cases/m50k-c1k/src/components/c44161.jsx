import React from 'react';
const LABEL_44161 = 'component_44161';
export function Component44161({ value = 44161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44161, 'data-value': derived.doubled }, children);
}
export default Component44161;
