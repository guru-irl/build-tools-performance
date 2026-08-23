import React from 'react';
const LABEL_3073 = 'component_3073';
export function Component3073({ value = 3073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3073, 'data-value': derived.doubled }, children);
}
export default Component3073;
