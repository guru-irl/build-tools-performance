import React from 'react';
const LABEL_38666 = 'component_38666';
export function Component38666({ value = 38666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38666, 'data-value': derived.doubled }, children);
}
export default Component38666;
