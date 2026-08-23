import React from 'react';
const LABEL_3912 = 'component_3912';
export function Component3912({ value = 3912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3912, 'data-value': derived.doubled }, children);
}
export default Component3912;
