import React from 'react';
const LABEL_21626 = 'component_21626';
export function Component21626({ value = 21626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21626, 'data-value': derived.doubled }, children);
}
export default Component21626;
