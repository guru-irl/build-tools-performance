import React from 'react';
const LABEL_3574 = 'component_3574';
export function Component3574({ value = 3574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3574, 'data-value': derived.doubled }, children);
}
export default Component3574;
