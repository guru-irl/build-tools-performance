import React from 'react';
const LABEL_33860 = 'component_33860';
export function Component33860({ value = 33860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33860, 'data-value': derived.doubled }, children);
}
export default Component33860;
