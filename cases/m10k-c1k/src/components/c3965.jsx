import React from 'react';
const LABEL_3965 = 'component_3965';
export function Component3965({ value = 3965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3965, 'data-value': derived.doubled }, children);
}
export default Component3965;
