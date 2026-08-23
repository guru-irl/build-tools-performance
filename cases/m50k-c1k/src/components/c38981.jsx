import React from 'react';
const LABEL_38981 = 'component_38981';
export function Component38981({ value = 38981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38981, 'data-value': derived.doubled }, children);
}
export default Component38981;
