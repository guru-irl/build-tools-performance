import React from 'react';
const LABEL_12154 = 'component_12154';
export function Component12154({ value = 12154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12154, 'data-value': derived.doubled }, children);
}
export default Component12154;
