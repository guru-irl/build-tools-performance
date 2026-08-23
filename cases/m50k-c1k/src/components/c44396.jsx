import React from 'react';
const LABEL_44396 = 'component_44396';
export function Component44396({ value = 44396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44396, 'data-value': derived.doubled }, children);
}
export default Component44396;
