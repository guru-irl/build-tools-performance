import React from 'react';
const LABEL_4348 = 'component_4348';
export function Component4348({ value = 4348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4348, 'data-value': derived.doubled }, children);
}
export default Component4348;
