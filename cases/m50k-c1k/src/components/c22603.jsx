import React from 'react';
const LABEL_22603 = 'component_22603';
export function Component22603({ value = 22603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22603, 'data-value': derived.doubled }, children);
}
export default Component22603;
