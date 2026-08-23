import React from 'react';
const LABEL_23626 = 'component_23626';
export function Component23626({ value = 23626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23626, 'data-value': derived.doubled }, children);
}
export default Component23626;
