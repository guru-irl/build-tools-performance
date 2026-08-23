import React from 'react';
const LABEL_13780 = 'component_13780';
export function Component13780({ value = 13780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13780, 'data-value': derived.doubled }, children);
}
export default Component13780;
