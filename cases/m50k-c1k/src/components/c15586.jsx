import React from 'react';
const LABEL_15586 = 'component_15586';
export function Component15586({ value = 15586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15586, 'data-value': derived.doubled }, children);
}
export default Component15586;
