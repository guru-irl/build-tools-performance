import React from 'react';
const LABEL_21151 = 'component_21151';
export function Component21151({ value = 21151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21151, 'data-value': derived.doubled }, children);
}
export default Component21151;
