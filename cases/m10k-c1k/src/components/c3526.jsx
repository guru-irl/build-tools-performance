import React from 'react';
const LABEL_3526 = 'component_3526';
export function Component3526({ value = 3526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3526, 'data-value': derived.doubled }, children);
}
export default Component3526;
