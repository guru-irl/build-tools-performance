import React from 'react';
const LABEL_12194 = 'component_12194';
export function Component12194({ value = 12194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12194, 'data-value': derived.doubled }, children);
}
export default Component12194;
