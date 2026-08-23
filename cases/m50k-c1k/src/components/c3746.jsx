import React from 'react';
const LABEL_3746 = 'component_3746';
export function Component3746({ value = 3746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3746, 'data-value': derived.doubled }, children);
}
export default Component3746;
