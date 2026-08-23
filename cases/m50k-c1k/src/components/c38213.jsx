import React from 'react';
const LABEL_38213 = 'component_38213';
export function Component38213({ value = 38213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38213, 'data-value': derived.doubled }, children);
}
export default Component38213;
