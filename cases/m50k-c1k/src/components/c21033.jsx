import React from 'react';
const LABEL_21033 = 'component_21033';
export function Component21033({ value = 21033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21033, 'data-value': derived.doubled }, children);
}
export default Component21033;
