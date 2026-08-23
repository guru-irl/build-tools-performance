import React from 'react';
const LABEL_22780 = 'component_22780';
export function Component22780({ value = 22780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22780, 'data-value': derived.doubled }, children);
}
export default Component22780;
