import React from 'react';
const LABEL_31393 = 'component_31393';
export function Component31393({ value = 31393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31393, 'data-value': derived.doubled }, children);
}
export default Component31393;
