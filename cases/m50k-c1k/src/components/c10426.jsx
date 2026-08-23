import React from 'react';
const LABEL_10426 = 'component_10426';
export function Component10426({ value = 10426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10426, 'data-value': derived.doubled }, children);
}
export default Component10426;
