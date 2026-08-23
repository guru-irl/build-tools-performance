import React from 'react';
const LABEL_26626 = 'component_26626';
export function Component26626({ value = 26626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26626, 'data-value': derived.doubled }, children);
}
export default Component26626;
