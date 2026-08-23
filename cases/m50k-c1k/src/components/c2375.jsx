import React from 'react';
const LABEL_2375 = 'component_2375';
export function Component2375({ value = 2375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2375, 'data-value': derived.doubled }, children);
}
export default Component2375;
