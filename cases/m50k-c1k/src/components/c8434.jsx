import React from 'react';
const LABEL_8434 = 'component_8434';
export function Component8434({ value = 8434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8434, 'data-value': derived.doubled }, children);
}
export default Component8434;
