import React from 'react';
const LABEL_38965 = 'component_38965';
export function Component38965({ value = 38965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38965, 'data-value': derived.doubled }, children);
}
export default Component38965;
