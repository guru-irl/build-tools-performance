import React from 'react';
const LABEL_28271 = 'component_28271';
export function Component28271({ value = 28271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28271, 'data-value': derived.doubled }, children);
}
export default Component28271;
