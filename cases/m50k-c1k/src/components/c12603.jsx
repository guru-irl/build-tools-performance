import React from 'react';
const LABEL_12603 = 'component_12603';
export function Component12603({ value = 12603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12603, 'data-value': derived.doubled }, children);
}
export default Component12603;
