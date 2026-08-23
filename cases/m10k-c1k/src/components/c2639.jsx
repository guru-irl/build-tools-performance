import React from 'react';
const LABEL_2639 = 'component_2639';
export function Component2639({ value = 2639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2639, 'data-value': derived.doubled }, children);
}
export default Component2639;
