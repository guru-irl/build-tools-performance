import React from 'react';
const LABEL_3102 = 'component_3102';
export function Component3102({ value = 3102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3102, 'data-value': derived.doubled }, children);
}
export default Component3102;
