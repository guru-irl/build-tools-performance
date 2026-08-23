import React from 'react';
const LABEL_12526 = 'component_12526';
export function Component12526({ value = 12526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12526, 'data-value': derived.doubled }, children);
}
export default Component12526;
