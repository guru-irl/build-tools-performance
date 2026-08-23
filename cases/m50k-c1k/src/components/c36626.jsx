import React from 'react';
const LABEL_36626 = 'component_36626';
export function Component36626({ value = 36626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36626, 'data-value': derived.doubled }, children);
}
export default Component36626;
