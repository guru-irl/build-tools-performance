import React from 'react';
const LABEL_36603 = 'component_36603';
export function Component36603({ value = 36603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36603, 'data-value': derived.doubled }, children);
}
export default Component36603;
