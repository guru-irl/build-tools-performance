import React from 'react';
const LABEL_12746 = 'component_12746';
export function Component12746({ value = 12746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12746, 'data-value': derived.doubled }, children);
}
export default Component12746;
