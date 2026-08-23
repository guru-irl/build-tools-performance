import React from 'react';
const LABEL_26780 = 'component_26780';
export function Component26780({ value = 26780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26780, 'data-value': derived.doubled }, children);
}
export default Component26780;
