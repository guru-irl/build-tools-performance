import React from 'react';
const LABEL_9493 = 'component_9493';
export function Component9493({ value = 9493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9493, 'data-value': derived.doubled }, children);
}
export default Component9493;
