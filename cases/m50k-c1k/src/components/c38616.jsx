import React from 'react';
const LABEL_38616 = 'component_38616';
export function Component38616({ value = 38616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38616, 'data-value': derived.doubled }, children);
}
export default Component38616;
