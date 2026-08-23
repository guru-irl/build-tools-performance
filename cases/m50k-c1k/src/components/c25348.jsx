import React from 'react';
const LABEL_25348 = 'component_25348';
export function Component25348({ value = 25348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25348, 'data-value': derived.doubled }, children);
}
export default Component25348;
