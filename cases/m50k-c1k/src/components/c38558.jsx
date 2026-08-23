import React from 'react';
const LABEL_38558 = 'component_38558';
export function Component38558({ value = 38558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38558, 'data-value': derived.doubled }, children);
}
export default Component38558;
