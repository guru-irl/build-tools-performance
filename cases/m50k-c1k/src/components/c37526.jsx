import React from 'react';
const LABEL_37526 = 'component_37526';
export function Component37526({ value = 37526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37526, 'data-value': derived.doubled }, children);
}
export default Component37526;
