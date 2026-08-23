import React from 'react';
const LABEL_3825 = 'component_3825';
export function Component3825({ value = 3825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3825, 'data-value': derived.doubled }, children);
}
export default Component3825;
