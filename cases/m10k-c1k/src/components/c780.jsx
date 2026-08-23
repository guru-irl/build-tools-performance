import React from 'react';
const LABEL_780 = 'component_780';
export function Component780({ value = 780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_780, 'data-value': derived.doubled }, children);
}
export default Component780;
