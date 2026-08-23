import React from 'react';
const LABEL_5478 = 'component_5478';
export function Component5478({ value = 5478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5478, 'data-value': derived.doubled }, children);
}
export default Component5478;
