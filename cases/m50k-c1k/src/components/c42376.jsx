import React from 'react';
const LABEL_42376 = 'component_42376';
export function Component42376({ value = 42376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42376, 'data-value': derived.doubled }, children);
}
export default Component42376;
