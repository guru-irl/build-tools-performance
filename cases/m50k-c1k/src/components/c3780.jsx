import React from 'react';
const LABEL_3780 = 'component_3780';
export function Component3780({ value = 3780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3780, 'data-value': derived.doubled }, children);
}
export default Component3780;
