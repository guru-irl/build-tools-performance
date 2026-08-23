import React from 'react';
const LABEL_38620 = 'component_38620';
export function Component38620({ value = 38620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38620, 'data-value': derived.doubled }, children);
}
export default Component38620;
