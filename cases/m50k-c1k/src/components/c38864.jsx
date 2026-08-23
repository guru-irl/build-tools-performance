import React from 'react';
const LABEL_38864 = 'component_38864';
export function Component38864({ value = 38864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38864, 'data-value': derived.doubled }, children);
}
export default Component38864;
