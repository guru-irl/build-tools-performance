import React from 'react';
const LABEL_10968 = 'component_10968';
export function Component10968({ value = 10968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10968, 'data-value': derived.doubled }, children);
}
export default Component10968;
