import React from 'react';
const LABEL_25603 = 'component_25603';
export function Component25603({ value = 25603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25603, 'data-value': derived.doubled }, children);
}
export default Component25603;
