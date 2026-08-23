import React from 'react';
const LABEL_36968 = 'component_36968';
export function Component36968({ value = 36968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36968, 'data-value': derived.doubled }, children);
}
export default Component36968;
