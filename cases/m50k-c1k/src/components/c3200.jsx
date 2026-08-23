import React from 'react';
const LABEL_3200 = 'component_3200';
export function Component3200({ value = 3200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3200, 'data-value': derived.doubled }, children);
}
export default Component3200;
