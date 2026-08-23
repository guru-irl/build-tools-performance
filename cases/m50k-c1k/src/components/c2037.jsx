import React from 'react';
const LABEL_2037 = 'component_2037';
export function Component2037({ value = 2037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2037, 'data-value': derived.doubled }, children);
}
export default Component2037;
