import React from 'react';
const LABEL_34491 = 'component_34491';
export function Component34491({ value = 34491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34491, 'data-value': derived.doubled }, children);
}
export default Component34491;
