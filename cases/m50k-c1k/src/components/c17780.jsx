import React from 'react';
const LABEL_17780 = 'component_17780';
export function Component17780({ value = 17780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17780, 'data-value': derived.doubled }, children);
}
export default Component17780;
