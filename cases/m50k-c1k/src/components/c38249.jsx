import React from 'react';
const LABEL_38249 = 'component_38249';
export function Component38249({ value = 38249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38249, 'data-value': derived.doubled }, children);
}
export default Component38249;
