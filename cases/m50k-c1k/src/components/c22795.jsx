import React from 'react';
const LABEL_22795 = 'component_22795';
export function Component22795({ value = 22795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22795, 'data-value': derived.doubled }, children);
}
export default Component22795;
