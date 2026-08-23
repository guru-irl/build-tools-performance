import React from 'react';
const LABEL_14968 = 'component_14968';
export function Component14968({ value = 14968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14968, 'data-value': derived.doubled }, children);
}
export default Component14968;
