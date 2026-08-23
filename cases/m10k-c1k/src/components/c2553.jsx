import React from 'react';
const LABEL_2553 = 'component_2553';
export function Component2553({ value = 2553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2553, 'data-value': derived.doubled }, children);
}
export default Component2553;
