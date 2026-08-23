import React from 'react';
const LABEL_34965 = 'component_34965';
export function Component34965({ value = 34965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34965, 'data-value': derived.doubled }, children);
}
export default Component34965;
