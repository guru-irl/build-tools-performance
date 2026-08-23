import React from 'react';
const LABEL_37161 = 'component_37161';
export function Component37161({ value = 37161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37161, 'data-value': derived.doubled }, children);
}
export default Component37161;
