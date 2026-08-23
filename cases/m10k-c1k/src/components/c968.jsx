import React from 'react';
const LABEL_968 = 'component_968';
export function Component968({ value = 968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_968, 'data-value': derived.doubled }, children);
}
export default Component968;
