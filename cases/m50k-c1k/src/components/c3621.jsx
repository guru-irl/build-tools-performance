import React from 'react';
const LABEL_3621 = 'component_3621';
export function Component3621({ value = 3621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3621, 'data-value': derived.doubled }, children);
}
export default Component3621;
