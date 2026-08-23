import React from 'react';
const LABEL_3979 = 'component_3979';
export function Component3979({ value = 3979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3979, 'data-value': derived.doubled }, children);
}
export default Component3979;
