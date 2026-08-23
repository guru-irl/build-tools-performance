import React from 'react';
const LABEL_28833 = 'component_28833';
export function Component28833({ value = 28833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28833, 'data-value': derived.doubled }, children);
}
export default Component28833;
