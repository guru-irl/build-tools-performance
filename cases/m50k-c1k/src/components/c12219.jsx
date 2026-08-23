import React from 'react';
const LABEL_12219 = 'component_12219';
export function Component12219({ value = 12219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12219, 'data-value': derived.doubled }, children);
}
export default Component12219;
