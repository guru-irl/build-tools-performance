import React from 'react';
const LABEL_95 = 'component_95';
export function Component95({ value = 95, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_95, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_95, 'data-value': derived.doubled }, children);
}
export default Component95;
