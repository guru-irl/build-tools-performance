import React from 'react';
const LABEL_2129 = 'component_2129';
export function Component2129({ value = 2129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2129, 'data-value': derived.doubled }, children);
}
export default Component2129;
