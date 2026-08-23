import React from 'react';
const LABEL_5968 = 'component_5968';
export function Component5968({ value = 5968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5968, 'data-value': derived.doubled }, children);
}
export default Component5968;
