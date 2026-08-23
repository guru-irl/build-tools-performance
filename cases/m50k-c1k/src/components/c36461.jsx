import React from 'react';
const LABEL_36461 = 'component_36461';
export function Component36461({ value = 36461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36461, 'data-value': derived.doubled }, children);
}
export default Component36461;
