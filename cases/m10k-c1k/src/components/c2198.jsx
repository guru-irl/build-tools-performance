import React from 'react';
const LABEL_2198 = 'component_2198';
export function Component2198({ value = 2198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2198, 'data-value': derived.doubled }, children);
}
export default Component2198;
