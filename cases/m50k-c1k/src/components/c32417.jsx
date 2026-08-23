import React from 'react';
const LABEL_32417 = 'component_32417';
export function Component32417({ value = 32417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32417, 'data-value': derived.doubled }, children);
}
export default Component32417;
