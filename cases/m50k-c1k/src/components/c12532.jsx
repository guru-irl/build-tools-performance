import React from 'react';
const LABEL_12532 = 'component_12532';
export function Component12532({ value = 12532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12532, 'data-value': derived.doubled }, children);
}
export default Component12532;
