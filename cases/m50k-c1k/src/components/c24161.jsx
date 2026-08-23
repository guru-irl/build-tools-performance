import React from 'react';
const LABEL_24161 = 'component_24161';
export function Component24161({ value = 24161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24161, 'data-value': derived.doubled }, children);
}
export default Component24161;
