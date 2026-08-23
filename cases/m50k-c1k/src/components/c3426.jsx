import React from 'react';
const LABEL_3426 = 'component_3426';
export function Component3426({ value = 3426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3426, 'data-value': derived.doubled }, children);
}
export default Component3426;
