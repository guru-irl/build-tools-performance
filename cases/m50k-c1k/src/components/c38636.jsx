import React from 'react';
const LABEL_38636 = 'component_38636';
export function Component38636({ value = 38636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38636, 'data-value': derived.doubled }, children);
}
export default Component38636;
