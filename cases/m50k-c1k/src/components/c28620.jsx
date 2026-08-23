import React from 'react';
const LABEL_28620 = 'component_28620';
export function Component28620({ value = 28620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28620, 'data-value': derived.doubled }, children);
}
export default Component28620;
