import React from 'react';
const LABEL_37509 = 'component_37509';
export function Component37509({ value = 37509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37509, 'data-value': derived.doubled }, children);
}
export default Component37509;
