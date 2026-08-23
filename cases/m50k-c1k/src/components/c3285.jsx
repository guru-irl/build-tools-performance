import React from 'react';
const LABEL_3285 = 'component_3285';
export function Component3285({ value = 3285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3285, 'data-value': derived.doubled }, children);
}
export default Component3285;
