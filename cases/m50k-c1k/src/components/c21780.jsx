import React from 'react';
const LABEL_21780 = 'component_21780';
export function Component21780({ value = 21780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21780, 'data-value': derived.doubled }, children);
}
export default Component21780;
