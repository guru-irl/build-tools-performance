import React from 'react';
const LABEL_38324 = 'component_38324';
export function Component38324({ value = 38324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38324, 'data-value': derived.doubled }, children);
}
export default Component38324;
