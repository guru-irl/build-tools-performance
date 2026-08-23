import React from 'react';
const LABEL_42041 = 'component_42041';
export function Component42041({ value = 42041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42041, 'data-value': derived.doubled }, children);
}
export default Component42041;
