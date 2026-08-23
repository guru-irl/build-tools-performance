import React from 'react';
const LABEL_3992 = 'component_3992';
export function Component3992({ value = 3992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3992, 'data-value': derived.doubled }, children);
}
export default Component3992;
