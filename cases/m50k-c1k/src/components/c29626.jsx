import React from 'react';
const LABEL_29626 = 'component_29626';
export function Component29626({ value = 29626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29626, 'data-value': derived.doubled }, children);
}
export default Component29626;
