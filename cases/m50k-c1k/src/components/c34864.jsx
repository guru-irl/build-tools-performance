import React from 'react';
const LABEL_34864 = 'component_34864';
export function Component34864({ value = 34864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34864, 'data-value': derived.doubled }, children);
}
export default Component34864;
