import React from 'react';
const LABEL_41478 = 'component_41478';
export function Component41478({ value = 41478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41478, 'data-value': derived.doubled }, children);
}
export default Component41478;
