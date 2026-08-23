import React from 'react';
const LABEL_25626 = 'component_25626';
export function Component25626({ value = 25626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25626, 'data-value': derived.doubled }, children);
}
export default Component25626;
