import React from 'react';
const LABEL_30965 = 'component_30965';
export function Component30965({ value = 30965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30965, 'data-value': derived.doubled }, children);
}
export default Component30965;
