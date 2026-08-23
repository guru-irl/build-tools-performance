import React from 'react';
const LABEL_27161 = 'component_27161';
export function Component27161({ value = 27161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27161, 'data-value': derived.doubled }, children);
}
export default Component27161;
