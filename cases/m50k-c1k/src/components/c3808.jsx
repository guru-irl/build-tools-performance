import React from 'react';
const LABEL_3808 = 'component_3808';
export function Component3808({ value = 3808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3808, 'data-value': derived.doubled }, children);
}
export default Component3808;
