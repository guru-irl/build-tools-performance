import React from 'react';
const LABEL_38855 = 'component_38855';
export function Component38855({ value = 38855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38855, 'data-value': derived.doubled }, children);
}
export default Component38855;
