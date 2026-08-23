import React from 'react';
const LABEL_4161 = 'component_4161';
export function Component4161({ value = 4161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4161, 'data-value': derived.doubled }, children);
}
export default Component4161;
