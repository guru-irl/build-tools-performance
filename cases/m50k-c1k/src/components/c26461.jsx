import React from 'react';
const LABEL_26461 = 'component_26461';
export function Component26461({ value = 26461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26461, 'data-value': derived.doubled }, children);
}
export default Component26461;
