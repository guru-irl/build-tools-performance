import React from 'react';
const LABEL_38647 = 'component_38647';
export function Component38647({ value = 38647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38647, 'data-value': derived.doubled }, children);
}
export default Component38647;
