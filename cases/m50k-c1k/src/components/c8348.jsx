import React from 'react';
const LABEL_8348 = 'component_8348';
export function Component8348({ value = 8348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8348, 'data-value': derived.doubled }, children);
}
export default Component8348;
