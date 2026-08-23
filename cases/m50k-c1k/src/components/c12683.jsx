import React from 'react';
const LABEL_12683 = 'component_12683';
export function Component12683({ value = 12683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12683, 'data-value': derived.doubled }, children);
}
export default Component12683;
