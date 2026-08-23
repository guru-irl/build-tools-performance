import React from 'react';
const LABEL_12388 = 'component_12388';
export function Component12388({ value = 12388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12388, 'data-value': derived.doubled }, children);
}
export default Component12388;
