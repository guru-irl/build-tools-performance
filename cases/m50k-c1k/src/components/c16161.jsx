import React from 'react';
const LABEL_16161 = 'component_16161';
export function Component16161({ value = 16161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16161, 'data-value': derived.doubled }, children);
}
export default Component16161;
