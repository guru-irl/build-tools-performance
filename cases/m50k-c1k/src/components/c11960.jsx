import React from 'react';
const LABEL_11960 = 'component_11960';
export function Component11960({ value = 11960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11960, 'data-value': derived.doubled }, children);
}
export default Component11960;
