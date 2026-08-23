import React from 'react';
const LABEL_3620 = 'component_3620';
export function Component3620({ value = 3620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3620, 'data-value': derived.doubled }, children);
}
export default Component3620;
